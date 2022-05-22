import {
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import aboutBanner from "/images/aboutBanner.png";
import aboutLogo from "/images/aboutLogo.png";

const AboutPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <img
            src={aboutLogo}
            alt="Background image"
            style={{ height: "15rem", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Typography vairant="h5">About FloodBuoy</Typography>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <img
            src={aboutBanner}
            alt="Background image"
            style={{ width: "100%", bjectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={7}>
          <List>
            <ListItem>
              <ListItemText primary="Floodbuoy Team" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact Details" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Customer Review" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Download Brochure" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Request a Quote for Products and Services" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
