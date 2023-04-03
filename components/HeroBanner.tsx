import {
  Box,
  Button,
  SxProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import MuiMarkdown from "mui-markdown";

import SectionContainer from "./SectionContainer";

interface HeroBannerProps {
  heading: string;
  smallHeading?: string;
  subheading: string;
  imgsrc?: string;
  ctaText?: string;
  ctaLink?: string;
  children?: JSX.Element;
  overrideStyles?: SxProps;
}

const heroStyles: SxProps = {
  backgroundColor: "primary.dark",
  color: "primary.contrastText",
  py: 8,
};

export default function HeroBanner({
  heading,
  subheading,
  imgsrc,
  ctaText,
  ctaLink,
  children,
  overrideStyles,
}: HeroBannerProps) {
  return (
    <Box sx={overrideStyles || heroStyles} textAlign="left">
      <SectionContainer>
        <Typography variant="h1" sx={{ display: "block" }}>
          {heading}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            flexDirection: { sm: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box sx={{ mb: 4 }}>
              <MuiMarkdown
                overrides={{
                  p: {
                    component: Typography,
                    props: {
                      variant: "subtitle1",
                    } as TypographyProps,
                  },
                  span: {
                    component: Typography,
                    props: { variant: "subtitle1" } as TypographyProps,
                  },
                }}
              >
                {subheading}
              </MuiMarkdown>
            </Box>
            {ctaText && ctaLink && (
              <Button
                variant="contained"
                color="primary"
                href={ctaLink}
                sx={{
                  px: 4,
                  "&:hover": {
                    color: "primary.dark",
                    backgroundColor: "secondary.main",
                  },
                }}
              >
                {ctaText}
              </Button>
            )}
          </Box>
          {(imgsrc || children) && (
            <Box
              sx={{
                display: "flex",
                margin: "30px auto",
                justifyContent: "center",
              }}
            >
              {imgsrc ? (
                <Box
                  component="img"
                  src={imgsrc}
                  alt=""
                  sx={{ width: "100%" }}
                />
              ) : (
                children
              )}
            </Box>
          )}
        </Box>
      </SectionContainer>
    </Box>
  );
}
