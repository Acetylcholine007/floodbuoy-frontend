import {
  Button,
  ButtonGroup,
  Card,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const StatisticsPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={2}>
            <Card>
              <Typography variant="h6">April 2, 2022</Typography>
            </Card>
            <Card>
              <Typography variant="h6">April 2, 2022</Typography>
            </Card>
            <Card>
              <Typography variant="h6">April 2, 2022</Typography>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"Calumpit"}
                  label="Location"
                  onChange={(e) => {}}
                >
                  <MenuItem value={10}>Calumpit</MenuItem>
                  <MenuItem value={20}>Hagonoy</MenuItem>
                  <MenuItem value={30}>Paombong</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                fullWidth
              >
                <Button>Week</Button>
                <Button>Month</Button>
                <Button>Year</Button>
                <Button>3 - Year</Button>
                <Button>5 - Year</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>Flood Graph</Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>Flood Graph</Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>Flood Graph</Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>Flood Graph</Card>
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
