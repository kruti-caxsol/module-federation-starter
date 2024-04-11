import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Drawer,
  CssBaseline,
  Toolbar,
  Divider,
  IconButton,
} from "@mui/material";
import { Outlet } from "react-router";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  GridView as GridViewIcon,
} from "@mui/icons-material";
// import SidebarLogo from "../../assets/images/SiderbarLogo.png";
import { useTheme } from "@mui/material/styles";
// import { Logo } from "../../components/Sidebar/style";
import { AppHeader, DrawerHeader, Main, BodyBox, MySkills } from "./style.ts";
import "./Layout.css";
import DropDownMenu from "../DropDownMenu.tsx";
// import Sidebar from "../../Organisms/Sidebar/Sidebar.tsx";

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
        {/* <Sidebar /> */}
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
