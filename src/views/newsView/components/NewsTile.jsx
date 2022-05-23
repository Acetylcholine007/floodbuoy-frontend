import { Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import alertImage from "/images/alertImage.png";

const NewsTile = ({ report }) => {
  return (
    <Grid container spacing={2} sx={{padding: '0.5rem 0'}}>
      <Grid item xs={3}>
        <Stack
          direction="column"
          component={Card}
          alignItems="center"
          sx={{ padding: "1rem", borderRadius: "1rem", overflow: "hidden" }}
        >
          <img
            src={alertImage}
            alt="Report Icon"
            style={{ height: "10rem", objectFit: "cover" }}
          />
          <Typography variant="body1">{report.type}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={9}>
        <Card
          sx={{
            height: "100%",
            padding: "1rem",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <Stack direction="column">
            <Typography variant="h5">{report.heading}</Typography>
            <Typography variant="body1">{report.body}</Typography>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewsTile;
