import {
  Card,
  CircularProgress,
  Container,
  Divider,
  Grid,
  List,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import homeBanner from "/images/homeBanner.png";
import waterLevel from "/images/waterLevel.png";
import current from "/images/current.png";
import turbidity from "/images/turbidity.png";
import rain from "/images/rain.png";
import { AuthContext } from "../../../shared/contexts/AuthContext";
import BuoyAPI from "../../../shared/apis/BuoyAPI";
import { SnackbarContext } from "../../../shared/contexts/SnackbarContext";
import { LoadingContext } from "../../../shared/contexts/LoadingContext";
import { DateTime } from "luxon";
import { useSocket } from "../../../shared/hooks/useSocket";
import ReportAPI from "../../../shared/apis/ReportAPI";
import NewsTile from "../../newsView/components/NewsTile";

const HomePage = () => {
  const { defaultBuoy } = useContext(AuthContext);
  const [reading, setReading] = useState(null);
  const [reports, setReports] = useState(null);
  const { snackbarDispatch } = useContext(SnackbarContext);
  const { loadingDispatch } = useContext(LoadingContext);

  useEffect(() => {
    BuoyAPI.getReading(
      loadingDispatch,
      snackbarDispatch,
      (data) => {
        setReading(data);
      },
      defaultBuoy.serialKey
    );
    ReportAPI.getReports(
      loadingDispatch,
      snackbarDispatch,
      (data) => {
        setReports(data);
      },
      defaultBuoy.serialKey,
      true
    );
  }, []);

  const socketHandler = (data) => {
    setReading(data);
  };

  useSocket(defaultBuoy.serialKey, socketHandler);

  return (
    <Container>
      <Grid container>
        <Grid item xs={6} md={6}>
          <Stack
            direction="column"
            justifyContent="flex-end"
            sx={{ height: "100%" }}
          >
            <Typography variant="h3">Welcome to Floodbuoy</Typography>
            <Typography variant="body1">
              Floodbuoy gives you live data, showing where water levels, current
              and tubidity are high and flooding is likely and sending alerts to
              you or your community
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={6}>
          <img
            src={homeBanner}
            alt="bannerImage"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Divider sx={{ width: "100%", margin: "1rem 0" }} />
        <Grid item xs={6} md={8}>
          <Stack direction="column">
            <Typography variant="h6">
              REAL-TIME FLOOD MONITORING UPDATES
            </Typography>
            <Typography viarant="body1">{`Floodbuoy Location: ${defaultBuoy.location}`}</Typography>
            <Typography viarant="body1">{`Station Code: ${defaultBuoy.serialKey}`}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4} align="right">
          {reading && (
            <Typography viarant="body1">{`${DateTime.fromISO(
              reading.datetime
            ).toLocaleString(DateTime.DATETIME_MED)}`}</Typography>
          )}
          {!reading && <CircularProgress />}
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  padding: "1rem",
                  borderRadius: "1rem",
                }}
              >
                <Stack direction="column" alignItems="center">
                  <Typography variant="body2">Water Level</Typography>
                  <img
                    src={waterLevel}
                    alt="bannerImage"
                    style={{
                      height: "5rem",
                      objectFit: "cover",
                      margin: "0.5rem 0",
                    }}
                  />
                  {reading && (
                    <Typography variant="body2">{`${reading.floodLevel} ft`}</Typography>
                  )}
                  {!reading && <CircularProgress sx={{ color: "white" }} />}
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  padding: "1rem",
                  borderRadius: "1rem",
                }}
              >
                <Stack direction="column" alignItems="center">
                  <Typography variant="body2">Water Current</Typography>
                  <img
                    src={current}
                    alt="bannerImage"
                    style={{
                      height: "5rem",
                      objectFit: "cover",
                      margin: "0.5rem 0",
                    }}
                  />
                  {reading && (
                    <Typography variant="body2">{`${reading.current} m/s`}</Typography>
                  )}
                  {!reading && <CircularProgress sx={{ color: "white" }} />}
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  padding: "1rem",
                  borderRadius: "1rem",
                }}
              >
                <Stack direction="column" alignItems="center">
                  <Typography variant="body2">Water Turbidity</Typography>
                  <img
                    src={turbidity}
                    alt="bannerImage"
                    style={{
                      height: "5rem",
                      objectFit: "cover",
                      margin: "0.5rem 0",
                    }}
                  />
                  {reading && (
                    <Typography variant="body2">{`${reading.turbidity} NTU`}</Typography>
                  )}
                  {!reading && <CircularProgress sx={{ color: "white" }} />}
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  padding: "1rem",
                  borderRadius: "1rem",
                }}
              >
                <Stack direction="column" alignItems="center">
                  <Typography variant="body2">Rain</Typography>
                  <img
                    src={rain}
                    alt="bannerImage"
                    style={{
                      height: "5rem",
                      objectFit: "cover",
                      margin: "0.5rem 0",
                    }}
                  />
                  {reading && (
                    <Typography variant="body2">{`${reading.precipitation} mm`}</Typography>
                  )}
                  {!reading && <CircularProgress sx={{ color: "white" }} />}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ width: "100%", margin: "1rem 0" }} />
        <Grid item xs={6} md={8}>
          <Stack direction="column">
            <Typography variant="h6">FLOOD ALERT</Typography>
            <Typography viarant="body1">{`Floodbuoy Location: ${defaultBuoy.location}`}</Typography>
            <Typography viarant="body1">{`Station Code: ${defaultBuoy.serialKey}`}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4} align="right">
          {reading && (
            <Typography viarant="body1">{`${DateTime.fromISO(
              reading.datetime
            ).toLocaleString(DateTime.DATETIME_MED)}`}</Typography>
          )}
          {!reading && <CircularProgress />}
        </Grid>
        <Grid item xs={12} sx={{ boxSizing: "border-box" }}>
          {reports && (
            <List sx={{ width: "100%" }}>
              {reports.map((report) => (
                <NewsTile key={report._id} report={report} />
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
