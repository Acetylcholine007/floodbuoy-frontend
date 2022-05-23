import { AccountCircleOutlined, LogoutSharp } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { adminRoutes } from "../../routes/AdminRoutes";
import { userRoutes } from "../../routes/UserRoutes";
import { AuthContext } from "../../shared/contexts/AuthContext";
import drawerLogo from "/images/drawerLogo.png";
import drawerBackground from "/images/drawerBackground.png";

const AppDrawer = ({ accountType, logoutHandler }) => {
  const history = useHistory();
  const location = useLocation();
  const { firstname, lastname } = useContext(AuthContext);

  return (
    <>
      <div
        style={{
          background: `url(${drawerBackground})`,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Toolbar sx={{ backgroundColor: "primary.main" }} />
        <img src={drawerLogo} alt="Logo" style={{ width: "100%" }} />
        <List sx={{ color: "white" }} disablePadding>
          <ListItem
            disablePadding
            sx={{
              backgroundColor: "primary.light",
              padding: "0.5rem 0.5rem",
              color: "white",
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "primary.light" }}>
                <AccountCircleOutlined sx={{ fontSize: 40 }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body1">
                  {firstname} {lastname}
                </Typography>
              }
            />
          </ListItem>
          {(accountType === 1 ? userRoutes : adminRoutes).map((item, index) => {
            if (item.title !== "Divider") {
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => history.push(item.path)}
                    selected={location.pathname.startsWith(item.path)}
                  >
                    <ListItemIcon sx={{ color: "white" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              );
            } else {
              return <Divider sx={{ width: "100%", borderColor: "white" }} />;
            }
          })}
        </List>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <ListItem disablePadding>
            <ListItemButton onClick={logoutHandler}>
              <ListItemIcon sx={{ color: "white" }}>
                <LogoutSharp />
              </ListItemIcon>
              <ListItemText primary={"Logout"} sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </div>
      </div>
    </>
  );
};

export default AppDrawer;
