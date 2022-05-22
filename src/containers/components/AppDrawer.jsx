import { LogoutOutlined, SettingsRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { adminRoutes } from "../../routes/AdminRoutes";
import { userRoutes } from "../../routes/UserRoutes";
import drawerLogo from "/images/drawerLogo.png";

const AppDrawer = ({ accountType, logoutHandler }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <>
      <div style={{background: "url('./images/drawer/authBackground.png')"}}>
        <Toolbar>
          <Stack direction="row" alignItems="center">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Flood Buoy
            </Typography>
          </Stack>
        </Toolbar>
        <Divider sx={{ width: "100%" }} />
        <List>
          {(accountType === 1 ? userRoutes : adminRoutes).map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => history.push(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      ></div>
    </>
  );
};

export default AppDrawer;
