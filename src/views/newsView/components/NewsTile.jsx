import { Card, Grid, Stack } from "@mui/material";
import React from "react";

const NewsTile = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Stack direction="column"></Stack>
      </Grid>
      <Grid item xs={8}>
        <Card>
          <Stack direction="column"></Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NewsTile;
