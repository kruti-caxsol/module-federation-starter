import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSub } from "services/PubSub_SR";

export default function DropDownMenu() {
  const [userName, setUserName] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const flag = authToken !== null;

  const handleUserLoggedIn = (userData: string) => {
    setUserName(userData);
  };

  useSub("userName", handleUserLoggedIn);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setAnchorEl(null);
    localStorage.clear();
    navigate("/login");
    setUserName("");
  };
  return (
    <div>
      {flag && (
        <Button color="inherit" onClick={handleClick}>
          {userName}
        </Button>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
