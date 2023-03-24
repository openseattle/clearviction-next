import Menu from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import { useState } from "react";

import navItems from "../../content/navItems";
import NavigationLogo from "../NavigationLogo";
import SkipLink from "../SkipLink";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen((prev) => !prev);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ flexGrow: 1 }}>
      <List sx={{ my: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="disclaimer">
          <Typography
            variant="caption"
            sx={{ mb: 2, px: 2, textAlign: "center" }}
          >
            The information on this site is not, nor should it be considered
            legal advice.
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar color="primary" elevation={0} component="nav" position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: { xs: 64 } }}>
            <SkipLink color="primary" variant="contained" />
            {/* Boxes as containers for handling layout among siblings */}
            <Box sx={{ flexGrow: 1, height: "100%" }}>
              <NavigationLogo fullSize={matches} />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { xl: "none" } }}
              onClick={handleDrawerToggle}
            >
              <Menu fontSize="large" />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", xl: "flex" },
                gap: 2,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  href={item.href}
                  variant={
                    item.text === "Access Calculator" ? "contained" : "text"
                  }
                  color="neutral"
                  size="small"
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", xl: "none" },
            textAlign: "center",
          }}
          anchor="right"
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
