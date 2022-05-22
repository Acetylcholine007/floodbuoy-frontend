import { LogoutOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { adminRoutes } from "../../routes/AdminRoutes";
import { userRoutes } from "../../routes/UserRoutes";
import "../../styles/AppDrawer.css";
import logoURI from "/images/eco.png";

const AppDrawer = ({ accountType, logoutHandler }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <>
      <div>
        <Toolbar>
          <Stack direction="row" alignItems="center">
            <Avatar sx={{ marginRight: "1rem" }} alt="avatar" src={logoURI} />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Reverse Vending Machine
            </Typography>
          </Stack>
        </Toolbar>
        <Divider />
        <div className="navlink-container">
          {(accountType === 1 ? userRoutes : adminRoutes).map((item, index) => (
            <div className="link-wrapper" key={index}>
              <NavLink
                to={item.path}
                key={index}
                onClick={() => history.push(item.path)}
              >
                <div className="link-content">
                  <span>{item.icon}</span>
                  <p>{item.title}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      >
        <Button
          color="inherit"
          onClick={logoutHandler}
          startIcon={<LogoutOutlined />}
        >
          LOGOUT
        </Button>
      </div>
    </>
  );
};

export default AppDrawer;
