import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

import navItems from "../../content/navItems";
import NavigationLogo from "../NavigationLogo";

const sectionContainerStyles: SxProps = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const sectionHeaderStyles: SxProps = {
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      component="footer"
      color="primary"
      sx={{
        mt: "auto",
        backgroundColor: "primary.dark",
        color: "primary.contrastText",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          textAlign: "center",
          padding: 2,
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box sx={sectionContainerStyles}>
          <Box sx={sectionHeaderStyles}>
            <NavigationLogo fullSize />
          </Box>
          <Typography variant="caption" gutterBottom>
            Clearviction is reducing barriers faced by formerly incarcerated
            individuals by streamlining the process of vacating eligible
            convictions in Washington state.
          </Typography>
          <Typography variant="caption">
            Clearviction is a registered 501(c)3 nonprofit organization,
            EIN#88-3187952. All donations are tax deductible in full or in part.
          </Typography>
        </Box>

        <Divider />

        <Box sx={sectionContainerStyles}>
          <Box sx={sectionHeaderStyles}>
            <Typography variant="h4">Links</Typography>
          </Box>
          <Grid container spacing={1} maxWidth={300}>
            {navItems
              .filter((item) => {
                return (
                  item.text !== "Home" && item.text !== "Access Calculator"
                );
              })
              .map((item) => (
                <Grid key={item.text} item xs={6}>
                  <Link
                    href={item.href}
                    color="primary.contrastText"
                    underline="hover"
                    fontSize={18}
                    noWrap
                  >
                    {item.text}
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Box>

        <Divider />

        <Box sx={sectionContainerStyles}>
          <Box sx={sectionHeaderStyles}>
            <Typography variant="h4">Partners</Typography>
          </Box>
          <Stack
            height="100%"
            alignItems="center"
            justifyContent="center"
            sx={{ flex: 1 }}
          >
            <Box>
              <Image
                alt=""
                src="/democracylab-logo.png"
                width={412}
                height={122}
                style={{
                  maxWidth: "200px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Box>
              <Image
                alt=""
                src="/openseattle-logo.png"
                width={130}
                height={102}
                style={{
                  maxWidth: "200px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
