import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

export default function Section({ section, index, sanityClient, ...props }) {
  const imageProps = useNextSanityImage(sanityClient, section.image);

  return (
    <Box
      key={section._key}
      data-cy="home-section"
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: index % 2 === 0 ? "#fff" : "#dedede",
        color: index % 2 === 0 ? "#121212" : "#121212",
        height: { xs: "380px" },
        width: "100vw",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: index % 2 === 0 ? "row" : "row-reverse",
          // justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
          }}
        >
          <Typography variant="h2">{section.heading}</Typography>

          {section.excerpt && (
            <Typography
              maxWidth="60ch"
              variant="body1"
              fontSize="1.5rem"
              gutterBottom
            >
              {section.excerpt}
            </Typography>
          )}
          {section.callToAction && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              href={section.callToAction.url}
              label={section.callToAction.linkText}
            />
          )}
          {section.tagline && (
            <Typography
              maxWidth="60ch"
              variant="body1"
              fontSize="1rem"
              gutterBottom
              py={2}
            >
              {section.tagline}
            </Typography>
          )}
        </Box>
        {imageProps && (
          <Box sx={{ flex: 1, position: "relative" }}>
            <Image
              src={imageProps.src}
              loader={imageProps.loader}
              fill
              style={{ objectFit: "contain" }}
              alt=""
            ></Image>
          </Box>
        )}
      </Container>
    </Box>
  );
}
