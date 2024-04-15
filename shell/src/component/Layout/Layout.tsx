import React from "react";
import { Outlet } from "react-router";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GridViewIcon from "@mui/icons-material/GridView";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../Sidebar/Sidebar.tsx";
import { AppHeader, DrawerHeader, Main, BodyBox, MySkills } from "./style.ts";
import "./Layout.css";
import DropDownMenu from "../DropDownMenu.tsx";

const drawerWidth = 240;

export default function HigherOrderLayout() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <BodyBox
      sx={{ display: "flex", position: "relative" }}
      className="main-body-wrapper"
    >
      <CssBaseline />
      <AppHeader position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 1, display: open ? "inline-block" : "none" }}
            className={open ? "drawer-visible" : "drawer-hidden"}
          >
            <div className="ml-2 menuicon-open">
              <GridViewIcon />
            </div>
          </IconButton>
          {/* <Appbar /> */}
          <div style={{ marginLeft: "auto" }}>
            <DropDownMenu />
          </div>
        </Toolbar>
      </AppHeader>
      <Drawer
        className="sidebar-drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isMobile ? "temporary" : "persistent"}
        style={{ width: isMobile ? "0%" : drawerWidth }}
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* <Logo>
            <img src={SidebarLogo} alt="logo" />
          </Logo> */}
          Logo
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            className="icon-border"
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Sidebar />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <SnackbarComponent /> */}
        <MySkills isMobile={isMobile} isOpen={open}>
          <Outlet />
        </MySkills>
      </Main>
    </BodyBox>
  );
}
