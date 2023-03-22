import HistoryIcon from "@mui/icons-material/History";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { PortableText } from "@portabletext/react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { useState } from "react";
import {
  getCalculatorConfig,
  getCalculatorPageBySlug,
  getCalculatorPagePaths,
} from "utils/sanity.client";

import ExternalButton from "../../components/ExternalButton";
import portableTextComponents from "../../utils/portableTextComponents";

const configuredSanityClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const BASE_IMAGE_URL = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

export default function CalculatorSlugRoute({
  page,
  calculatorConfig,
  mySanityData,
}) {
  const imageProps = useNextSanityImage(configuredSanityClient, mySanityData);

  const [open, setOpen] = useState(false);
  let imageUrl;

  if (page.image) {
    let metaData = page.image.asset._ref.split("-") || 0;
    imageUrl = `${BASE_IMAGE_URL}/${metaData[1]}-${metaData[2]}.${metaData[3]}`;
  }

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          minHeight: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box mb={4}>
          <PortableText
            value={page.content}
            components={portableTextComponents}
          />

          {page.image && (
            <Container
              sx={{
                width: "100%",
                height: "10em",
                position: "relative",
              }}
            >
              <Image
                {...imageProps}
                alt="img"
                className="calc-image"
                src={imageUrl}
                fill
                position="relative"
                priority={true}
              />
            </Container>
          )}
        </Box>

        <Container maxWidth="xs" sx={{ mb: 4 }}>
          <Stack gap={2}>
            {page.choices &&
              page.choices.map((choice) => {
                const linkTo = choice.linkTo
                  ? `/calculator/${choice.linkTo.slug.current}`
                  : "#";
                const href = choice.isExternalLink ? choice.url : linkTo;
                return (
                  <Button
                    key={choice._key}
                    variant="contained"
                    color="primary"
                    href={href}
                  >
                    {choice.label}
                  </Button>
                );
              })}
            {page.isQuestion && (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpen(true)}
              >
                {calculatorConfig.unknownAnswer.promptText}
              </Button>
            )}
            {page.isFinalPage && (
              <>
                <ExternalButton
                  variant="contained"
                  color="primary"
                  href={
                    page.isUndetermined
                      ? calculatorConfig.feedback.isUndeterminedUrl
                      : calculatorConfig.feedback.allOtherFeedbackUrl
                  }
                >
                  {calculatorConfig.feedback.linkText}
                </ExternalButton>
                <Link
                  sx={{ textAlign: "center" }}
                  href={
                    calculatorConfig.checkAnotherConviction.linkTo.slug.current
                  }
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <HistoryIcon />
                    {calculatorConfig.checkAnotherConviction.linkText}
                  </Box>
                </Link>
              </>
            )}
          </Stack>
        </Container>
        {page.isFinalPage && (
          <Box maxWidth="60ch" textAlign="center">
            <Typography variant="caption" sx={{ fontWeight: "light" }}>
              {calculatorConfig.legalDisclaimer}
            </Typography>
          </Box>
        )}
      </Container>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {calculatorConfig.unknownAnswer.header}
        </DialogTitle>
        <DialogContent>
          <PortableText
            value={calculatorConfig.unknownAnswer.content}
            components={portableTextComponents}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            {calculatorConfig.unknownAnswer.closeText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export async function getStaticProps(ctx) {
  const { params = {} } = ctx;

  const [page, calculatorConfig] = await Promise.all([
    getCalculatorPageBySlug({ slug: params.slug }),
    getCalculatorConfig(),
  ]);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      calculatorConfig,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getCalculatorPagePaths();

  return {
    paths: paths?.map((slug) => `/calculator/${slug}`) || [],
    fallback: false,
  };
}
