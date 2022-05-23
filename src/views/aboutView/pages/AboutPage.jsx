import { ChevronLeftSharp, ChevronRightSharp } from "@mui/icons-material";
import {
  Card,
  Container,
  Grid,
  IconButton,
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
    <Container sx={{marginTop: '1rem'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <img
            src={aboutLogo}
            alt="Background image"
            style={{ height: "15rem", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              padding: "0.5rem 1rem",
              backgroundColor: "#414D61",
              color: "white",
              borderRadius: '0.5rem'
            }}
          >
            <Typography variant="h5">About FloodBuoy</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img
            src={aboutBanner}
            alt="Background image"
            style={{ width: "100%", bjectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <List disablePadding>
            <ListItem
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
              secondaryAction={
                <IconButton
                  onClick={() => window.open("https://www.facebook.com")}
                >
                  <ChevronRightSharp sx={{ color: "white" }} />
                </IconButton>
              }
            >
              <ListItemText primary="Floodbuoy Team" />
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
              secondaryAction={
                <IconButton
                  onClick={() => window.open("https://www.facebook.com")}
                >
                  <ChevronRightSharp sx={{ color: "white" }} />
                </IconButton>
              }
            >
              <ListItemText primary="Contact Details" />
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
              secondaryAction={
                <IconButton
                  onClick={() => window.open("https://www.facebook.com")}
                >
                  <ChevronRightSharp sx={{ color: "white" }} />
                </IconButton>
              }
            >
              <ListItemText primary="Customer Review" />
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
              secondaryAction={
                <IconButton
                  onClick={() => window.open("https://www.facebook.com")}
                >
                  <ChevronRightSharp sx={{ color: "white" }} />
                </IconButton>
              }
            >
              <ListItemText primary="Download Brochure" />
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem",
              }}
              secondaryAction={
                <IconButton
                  onClick={() => window.open("https://www.facebook.com")}
                >
                  <ChevronRightSharp sx={{ color: "white" }} />
                </IconButton>
              }
            >
              <ListItemText primary="Request a Quote for Products and Services" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
