import { grey } from "@mui/material/colors";
import { LinkProps } from "@mui/material/Link";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Inter, Sintony } from "@next/font/google";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef } from "react";

export const sintony = Sintony({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const LinkBehavior = forwardRef<HTMLAnchorElement, NextLinkProps>(
  function LinkBehavior(props, ref) {
    return <NextLink ref={ref} {...props} />;
  }
);

let theme = createTheme({
  spacing: 8,
  palette: {
    mode: "light",
    primary: {
      light: "#A7B5CC",
      main: "#4E6C99",
      dark: "#2F3554",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#FFEEA3",
      main: "#FFD200",
      contrastText: "#000000",
    },
    neutral: {
      main: "#FFFFFF",
      dark: grey[400],
      contrastText: "#2F3554",
    },
    error: {
      main: "#DF1F1F",
    },
    info: {
      main: "#007CFF",
    },
    success: {
      main: "#2A8613",
    },
    text: {
      primary: "#000000",
      secondary: "#AAAAAA",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,

    h1: {
      fontSize: "84px",
      fontFamily: sintony.style.fontFamily,
      fontWeight: "normal",
      margin: "20px auto",
    },
    h2: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: "normal",
      fontSize: "56px",
      letterSpacing: "-0.5px",
      marginBottom: "1.5em",
    },
    h3: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: "normal",
      fontSize: "45px",
      letterSpacing: "0px",
      marginBottom: "0.5em",
    },
    h4: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: "bold",
      fontSize: "32px",
      letterSpacing: "0.25px",
      marginBottom: "0.5em",
    },
    h5: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: "bold",
      fontSize: "22px",
      letterSpacing: "0px",
      marginBottom: "0.5em",
    },
    h6: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: "bold",
      fontSize: "19px",
      letterSpacing: "0.15px",
      marginBottom: "10px",
    },
    body1: {
      fontWeight: "normal",
      fontSize: "20px",
    },
    body2: {
      fontWeight: "normal",
      fontSize: "18px",
    },
    subtitle1: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: "normal",
      fontSize: "22px",
      letterSpacing: "0.15px",
      lineHeight: "1.5",
      marginBottom: "20px",
    },
    subtitle2: {
      fontFamily: sintony.style.fontFamily,
      fontWeight: "normal",
      fontSize: "20px",
      letterSpacing: "0.1px",
    },

    caption: {
      fontWeight: "light",
      fontSize: "14px",
      letterSpacing: "0.4px",
    },
    overline: {
      fontWeight: "lighter",
      fontSize: "12px",
      letterSpacing: "1.5px",
    },
    button: {
      fontSize: "18px",
      letterSpacing: "1px",
    },
  },
});

theme.components = {
  MuiAppBar: {
    styleOverrides: {
      colorPrimary: {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: theme.palette.primary.dark,
        width: "250px",
        color: "white",
      },
    },
  },
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      },
      indicator: {
        height: 0,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontSize: 14,
        backgroundColor: theme.palette.primary.light,
      },
      selected: {
        color: theme.palette.primary.dark,
        backgroundColor: "white",
      },
    },
  },
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
    },
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          border: `1px solid ${theme.palette.primary.light}`,
          "&$expanded": {
            margin: 0,
          },
          borderRadius: 0,
          "&:first-child": {
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          },
          "&:last-child": {
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          },
        },
      },
    ],
  },
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 50,
        textAlign: "center",
        minWidth: "max-content",
        margin: "10px auto",
      },
    },
  },
};
theme = responsiveFontSizes(theme);

export default theme;
