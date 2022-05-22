import {
  AccountBalanceWalletRounded,
  DashboardRounded,
  HomeRounded,
  InfoRounded,
  MapRounded,
  NewspaperRounded,
  PersonRounded,
  SettingsRounded,
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

const UserRoutes = () => {
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

export default UserRoutes;

export const userRoutes = [
  {
    title: "Home",
    icon: <HomeRounded />,
    path: "/home",
  },
  {
    title: "Statistics",
    icon: <HomeRounded />,
    path: "/statistics",
  },
  {
    title: "Flood Map",
    icon: <MapRounded />,
    path: "/map",
  },
  {
    title: "About",
    icon: <InfoRounded />,
    path: "/about",
  },
  {
    title: "News",
    icon: <NewspaperRounded />,
    path: "/news",
  },
  {
    title: "Support",
    icon: <SettingsRounded />,
    path: "/support",
  },
  {
    title: "Settings",
    icon: <SettingsRounded />,
    path: "/settings",
  },
];
