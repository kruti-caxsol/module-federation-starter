import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const drawerWidth = 240;
const $iconcolor = "#6363ed"; // Define your SCSS variable

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
interface Props {
  isMobile: boolean;
  children: React.ReactNode;
  isOpen: boolean;
}

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: "100%",
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  "@media (max-width: 900px)": {
    marginLeft: 0,
  },
  "@media (max-width: 768px)": {
    padding: "0 !important",
  },
}));

export const AppHeader = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: $iconcolor,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  position: "absolute",
  marginTop: "0px",
  width: "100%",
  minHeight: "50px",
  marginRight: "0px",
  zIndex: 1,
  ...(open && {
    width: `calc(100% - (${drawerWidth}px))`,
    marginLeft: 0,
    marginRight: "0px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "@media (max-width: 900px)": {
      width: "100%",
      marginRight: "0px",
    },
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export const MySkills = styled("div")`
  // padding: 0px 25px;
  /* margin-left:${(props: Props) => (props.isOpen ? "0" : "240px")}; */
  /* margin-top:30px; */
  @media (max-width: 991.5px) {
    padding: 0 0;
  }
  button.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButtonBase-root.sc-pGacB.gyDHRE.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    margin-top: 2px;
  }
`;

export const BodyBox = styled(Box)`
  @media (max-width: 991.5px) {
    padding: 0;
  }
`;
