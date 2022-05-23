import { SearchRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import BuoyAPI from "../../../shared/apis/BuoyAPI";
import { AuthContext } from "../../../shared/contexts/AuthContext";
import { LoadingContext } from "../../../shared/contexts/LoadingContext";
import { SnackbarContext } from "../../../shared/contexts/SnackbarContext";
import DataChart from "../components/DataChart";
import { useSocket } from "../../../shared/hooks/useSocket";
import { DateTime } from "luxon";

import waterLevel from "/images/waterLevel.png";
import current from "/images/current.png";
import turbidity from "/images/turbidity.png";
import rain from "/images/rain.png";

const StatisticsPage = () => {
  const { snackbarDispatch } = useContext(SnackbarContext);
  const { loadingDispatch } = useContext(LoadingContext);
  const { defaultBuoy } = useContext(AuthContext);
  const [readings, setReadings] = useState([]);
  const [station, setStation] = useState(defaultBuoy._id);
  const [range, setRange] = useState("week");
  const [samples, setSamples] = useState(15);
  const [buoys, setBuoys] = useState([]);
  const [stationData, setStationData] = useState(defaultBuoy);

  useEffect(() => {
    BuoyAPI.getBuoys(loadingDispatch, snackbarDispatch, (data) => {
      setBuoys(data);
    });
  }, []);

  useEffect(() => {
    BuoyAPI.getBuoy(
      loadingDispatch,
      snackbarDispatch,
      (data, buoy) => {
        setReadings(data);
      },
      defaultBuoy._id,
      15,
      range
    );
  }, [station, range]);

  const socketHandler = (data) => {
    setReadings((readings) => {
      let newReadings = [...readings];
      console.log(newReadings);
      if (newReadings.length === samples) {
        newReadings.shift();
      }
      newReadings.push(data);
      console.log(newReadings);
      return newReadings;
    });
  };

  useSocket(stationData.serialKey, socketHandler);

  const formatData = (parameter) => {
    let labels = [];
    let data = [];
    readings.forEach((reading) => {
      const date = DateTime.fromISO(reading.datetime);
      labels.push(date.toLocaleString(DateTime.DATETIME_MED));
      data.push(reading[parameter]);
    });
    return {
      labels,
      datasets: [
        {
          label: parameter,
          data,
          backgroundColor: "white",
          borderColor: "white",
          borderWidth: 2,
          textColor: "white",
        },
      ],
    };
  };

  const scaler = (parameter) => {
    switch (parameter) {
      case "floodLevel":
        return {
          scales: {
            y: {
              min: 0,
              max: 100,
              stepSize: 5,
              grid: {
                color: "grey",
              },
            },
            x: {
              grid: {
                color: "grey",
              },
            },
          },
        };
      case "current":
        return {
          scales: {
            y: {
              min: 0,
              max: 100,
              stepSize: 5,
              grid: {
                color: "grey",
              },
            },
            x: {
              grid: {
                color: "grey",
              },
            },
          },
        };
      case "turbidity":
        return {
          scales: {
            y: {
              min: 0,
              max: 100,
              stepSize: 5,
              grid: {
                color: "grey",
              },
            },
            x: {
              grid: {
                color: "grey",
              },
            },
          },
        };
      case "precipitation":
        return {
          scales: {
            y: {
              min: 0,
              max: 100,
              stepSize: 5,
              grid: {
                color: "grey",
              },
            },
            x: {
              grid: {
                color: "grey",
              },
            },
          },
        };
      default:
        return {};
    }
  };

  return (
    <Container sx={{ paddingTop: "1rem" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{ fontStyle: "italic", fontWeight: "bold" }}
          >
            FLOODBUOY DASHBOARD
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={2}>
            <Card sx={{ padding: "1rem" }}>
              <Typography variant="h6">{`FloodBuoy Location: ${stationData.location}`}</Typography>
              <Typography variant="h6">{`Station Code: ${stationData.serialKey}`}</Typography>
              <Typography variant="h5">{`Current Readings`}</Typography>
              {readings.length !== 0 && (
                <Grid container>
                  <Grid item xs={3} align="center">
                    <Avatar
                      alt="Icon"
                      src={waterLevel}
                      sx={{ backgroundColor: "primary.main" }}
                    />
                    <Typography variant="body1">{`${
                      readings.at(-1).floodLevel
                    } ft`}</Typography>
                  </Grid>
                  <Grid item xs={3} align="center">
                    <Avatar
                      alt="Icon"
                      src={current}
                      sx={{ backgroundColor: "primary.main" }}
                    />
                    <Typography variant="body1">{`${
                      readings.at(-1).current
                    } m/s`}</Typography>
                  </Grid>
                  <Grid item xs={3} align="center">
                    <Avatar
                      alt="Icon"
                      src={turbidity}
                      sx={{ backgroundColor: "primary.main" }}
                    />
                    <Typography variant="body1">{`${
                      readings.at(-1).turbidity
                    } NTU`}</Typography>
                  </Grid>
                  <Grid item xs={3} align="center">
                    <Avatar
                      alt="Icon"
                      src={rain}
                      sx={{ backgroundColor: "primary.main" }}
                    />
                    <Typography variant="body1">{`${
                      readings.at(-1).precipitation
                    } mm`}</Typography>
                  </Grid>
                </Grid>
              )}
            </Card>
            <Card>
              <CardHeader
                title={
                  <Typography variant="body">
                    {DateTime.now().toLocaleString(DateTime.DATETIME_MED)}
                  </Typography>
                }
                sx={{ backgroundColor: "primary.main", color: "white" }}
              />
              <CardContent>
                <TableContainer>
                  <Table aria-label="Station List">
                    <TableHead>
                      <TableRow>
                        <TableCell>Station</TableCell>
                        <TableCell align="right">Current [EL.m]</TableCell>
                        <TableCell align="right">Alert [EL.m]</TableCell>
                        <TableCell align="right">Alarm [EL.m]</TableCell>
                        <TableCell align="right">Critical [EL.m]</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {buoys.map((buoy) => (
                        <TableRow
                          key={buoy._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {buoy.location}
                          </TableCell>
                          <TableCell align="right">
                            {buoy.currentLevel}
                          </TableCell>
                          <TableCell align="right">
                            {buoy.alertThreshold}
                          </TableCell>
                          <TableCell align="right">
                            {buoy.alarmThreshold}
                          </TableCell>
                          <TableCell align="right">
                            {buoy.criticalThreshold}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {buoys.length !== 0 && (
                <FormControl fullWidth sx={{ backgroundColor: "#f1effb" }}>
                  <InputLabel id="demo-simple-select-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="location"
                    id="location"
                    value={station}
                    label="Location"
                    onChange={(e) => {
                      setStation(e.target.value);
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchRounded />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {buoys.map((buoy) => (
                      <MenuItem
                        key={buoy._id}
                        value={buoy._id}
                        onClick={() => setStationData(buoy)}
                      >
                        {buoy.location}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              {buoys.length === 0 && <LinearProgress />}
            </Grid>
            <Grid item xs={12} align="center">
              <ButtonGroup
                variant="outlined"
                aria-label="outlined primary button group"
                fullWidth
              >
                <Button
                  variant={range === "week" ? "contained" : "outlined"}
                  onClick={() => setRange("week")}
                >
                  Week
                </Button>
                <Button
                  variant={range === "month" ? "contained" : "outlined"}
                  onClick={() => setRange("month")}
                >
                  Month
                </Button>
                <Button
                  variant={range === "year" ? "contained" : "outlined"}
                  onClick={() => setRange("year")}
                >
                  Year
                </Button>
                <Button
                  variant={range === "3-year" ? "contained" : "outlined"}
                  onClick={() => setRange("3-year")}
                >
                  3 - Year
                </Button>
                <Button
                  variant={range === "5-year" ? "contained" : "outlined"}
                  onClick={() => setRange("5-year")}
                >
                  5 - Year
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} md={6}>
              <DataChart
                chartData={formatData("floodLevel")}
                options={scaler("floodLevel")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DataChart
                chartData={formatData("current")}
                options={scaler("current")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DataChart
                chartData={formatData("turbidity")}
                options={scaler("turbidity")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DataChart
                chartData={formatData("precipitation")}
                options={scaler("precipitation")}
              />
            </Grid>
            <Grid item xs={12} align="right">
              <Button variant="outlined">Download Data</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatisticsPage;
