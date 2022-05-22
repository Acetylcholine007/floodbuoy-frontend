import {
  Card,
  Container,
  Divider,
  Grid,
  List,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
// import homeBanner from "/images/homeBanner.png";

const HomePage = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6} md={8}>
          <Stack direction="column">
            <Typography variant="h5">Welcome to Floodbuoy</Typography>
            <Typography variant="body1">
              Floodbuoy gives you live data, showing where water levels, current
              and tubidity are high and flooding is likely and sending alerts to
              you or your community
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card>
            <img src={""} alt="bannerImage" />
          </Card>
        </Grid>
        <Divider sx={{ width: "100%", margin: "1rem 0" }} />
        <Grid item xs={6} md={8}>
          <Stack direction="column">
            <Typography variant="h6">
              REAL-TIME FLOOD MONITORING UPDATES
            </Typography>
            <Typography viarant="body1">{`Floodbuoy Location: `}</Typography>
            <Typography viarant="body1">{`Station Code: `}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography viarant="body1">{`Today, September 15, 2020 `}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6} md={3}>
              <Card>
                <Stack direction="column" alignItems="center">
                  <Typography variant="body2">Water Level</Typography>
                  <Typography variant="body2">Rain</Typography>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <Stack direction="column" alignItems="center">
                  <Typography variant="body2">Water Current</Typography>
                  <Typography variant="body2">Rain</Typography>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <Stack direction="column" alignItems="center">
                  <Typography variant="body2">Water Turbidity</Typography>
                  <Typography variant="body2">Rain</Typography>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <Stack direction="column" alignItems="center">
                  <Typography variant="body2">Rain</Typography>
                  <Typography variant="body2">Rain</Typography>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ width: "100%", margin: "1rem 0" }} />
        <Grid item xs={6} md={8}>
          <Stack direction="column">
            <Typography variant="h6">FLOOD ALERT</Typography>
            <Typography viarant="body1">{`Floodbuoy Location: `}</Typography>
            <Typography viarant="body1">{`Station Code: `}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography viarant="body1">{`Today, September 15, 2020 `}</Typography>
        </Grid>
        <Grid item xs={12}>
          <List>Reports</List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
