// import { Image } from "@mui/icons-material";
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

export default function CalculatorSlugRoute({
  page,
  calculatorConfig,
  mySanityData,
}) {
  const imageProps = useNextSanityImage(configuredSanityClient, mySanityData);

  const [open, setOpen] = useState(false);
  console.log("page => ", page);
  console.log("page image => ", typeof page.image?.asset._ref);
  let arr = page.image?.asset._ref.split("-") || 0;
  console.log(arr);
  let url;

  let baseUrl = `https://cdn.sanity.io/images`;
  console.log("baseUrl =>", baseUrl);
  if (arr) {
    url = `${baseUrl}/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${arr[1]}-${arr[2]}.${arr[3]}`;
    console.log("url => ", url);
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
        </Box>
        {page.image && (
          <Container
            id="hello-world"
            sx={{ my: 6, width: "100%", height: "280px" }}
            position="relative"
          >
            {/* <img alt="img" src={url} /> */}
            <Image
              {...imageProps}
              alt="img"
              src={url}
              fill
              position="initial"
            />
          </Container>
        )}
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
