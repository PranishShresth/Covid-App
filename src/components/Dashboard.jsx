import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CountryInfo from "./CountryInfo";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
  items: {
    margin: "15px",
    "&:hover": {
      transform: "scale(1.09)",
      background: "white",
      transition: "transform 1s ease-in",
    },
  },
  card: {
    background: "#234361",
    color: "#ffffff",
  },

  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function Dashboard({ country, allstats, chart, loading }) {
  console.log(allstats);
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={3}
        className={classes.grid}
      >
        <Grid item xs={12} sm={6} md={3} className={classes.items}>
          <Card className={classes.card}>
            <p style={{ textAlign: "center" }}>Total infected </p>
            <h3 style={{ textAlign: "center" }}>
              {allstats && allstats.Global && allstats.Global.TotalConfirmed}
            </h3>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.items}>
          <Card className={classes.card}>
            <p style={{ textAlign: "center" }}>Total Deaths </p>
            <h3 style={{ textAlign: "center" }}>
              {allstats && allstats.Global && allstats.Global.TotalDeaths}
            </h3>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.items}>
          <Card className={classes.card}>
            <p style={{ textAlign: "center" }}>Total Recovered</p>
            <h3 style={{ textAlign: "center" }}>
              {allstats && allstats.Global && allstats.Global.TotalRecovered}
            </h3>
          </Card>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
      <CountryInfo country={country} chart={chart} loading={loading} />
    </Container>
  );
}

export default Dashboard;
