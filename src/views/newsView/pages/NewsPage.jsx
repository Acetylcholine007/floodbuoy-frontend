import { Button, Card, Container, Grid, List, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ReportAPI from "../../../shared/apis/ReportAPI";
import { AuthContext } from "../../../shared/contexts/AuthContext";
import { LoadingContext } from "../../../shared/contexts/LoadingContext";
import { SnackbarContext } from "../../../shared/contexts/SnackbarContext";
import NewsTile from "../components/NewsTile";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const { snackbarDispatch } = useContext(SnackbarContext);
  const { loadingDispatch } = useContext(LoadingContext);
  const { defaultBuoy } = useContext(AuthContext);

  useEffect(() => {
    ReportAPI.getReports(
      loadingDispatch,
      snackbarDispatch,
      (data) => {
        setNews(data);
      },
      defaultBuoy.serialKey,
      false
    );
  }, []);

  return (
    <Container sx={{ marginTop: "1rem" }}>
      <Grid container>
        <Grid content xs={8}>
          <Card
            sx={{
              padding: "0.5rem 1rem",
              backgroundColor: "#414D61",
              color: "white",
              borderRadius: "0.5rem",
            }}
          >
            <Typography variant="h5">Flood Reports</Typography>
          </Card>
        </Grid>
        <Grid content xs={4}>
          <Button variant="contained" onClick={() => {}}>
            Report Date Range
          </Button>
        </Grid>
        <Grid content xs={12}>
          {news.length !== 0 && (
            <List>
              {news.map((item) => (
                <NewsTile report={item} />
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsPage;
