import {
  DashboardSharp,
  HomeSharp,
  InfoSharp,
  MapSharp,
  NewspaperSharp,
  SettingsSharp,
  SupportAgentSharp,
} from "@mui/icons-material";
import { Route, Switch } from "react-router";

import NotFoundPage from "../shared/pages/NotFoundPage";
import HomePage from "../views/homeView/pages/HomePage";
import StatisticsPage from "../views/statisticsView/pages/StatisticsPage";
import MapPage from "../views/mapView/pages/MapPage";
import AboutPage from "../views/aboutView/pages/AboutPage";
import NewsPage from "../views/newsView/pages/NewsPage";
import SupportPage from "../views/supportView/pages/SupportPage";
import SettingsPage from "../views/settingsView/pages/SettingsPage";

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path="/statistics">
        <StatisticsPage />
      </Route>
      <Route exact path="/map">
        <MapPage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/news">
        <NewsPage />
      </Route>
      <Route exact path="/support">
        <SupportPage />
      </Route>
      <Route exact path="/settings">
        <SettingsPage />
      </Route>
      <Route exact path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default AdminRoutes;

export const adminRoutes = [
  {
    title: "Home",
    icon: <HomeSharp />,
    path: "/home",
  },
  {
    title: "Dashboard",
    icon: <DashboardSharp />,
    path: "/statistics",
  },
  {
    title: "Flood Map",
    icon: <MapSharp />,
    path: "/map",
  },
  {
    title: "Divider",
  },
  {
    title: "About",
    icon: <InfoSharp />,
    path: "/about",
  },
  {
    title: "News",
    icon: <NewspaperSharp />,
    path: "/news",
  },
  {
    title: "Support",
    icon: <SupportAgentSharp />,
    path: "/support",
  },
  {
    title: "Settings",
    icon: <SettingsSharp />,
    path: "/settings",
  },
];
