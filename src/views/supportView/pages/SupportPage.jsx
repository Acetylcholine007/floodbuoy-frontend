import { AccountCircleRounded } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const SupportPage = () => {
  return (
    <Container sx={{marginTop: '1rem'}}>
      <Stack direction="column" alignItems='center'>
        <Typography variant="body1">SUPPORT TEAM</Typography>
        <Typography variant="h5">
          Our friendly support team will help you with anything.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          consectetur deleniti totam eaque nulla accusamus aperiam eius
          consequuntur quidem atque tenetur modi, magnam doloribus nisi facilis
          molestiae architecto quasi! Error?
        </Typography>
      </Stack>
      <Grid container>
        <Grid item xs={3}>
          <Stack direction="column" alignItems="center">
            <Button>Speedy</Button>
            <Icon size="large">
              <AccountCircleRounded />
            </Icon>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="column" alignItems="center">
            <Button>Flexible</Button>
            <Icon size="large">
              <AccountCircleRounded />
            </Icon>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="column" alignItems="center">
            <Button>Enthusiast</Button>
            <Icon size="large">
              <AccountCircleRounded />
            </Icon>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack direction="column" alignItems="center">
            <Button>Patience</Button>
            <Icon size="large">
              <AccountCircleRounded />
            </Icon>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupportPage;
