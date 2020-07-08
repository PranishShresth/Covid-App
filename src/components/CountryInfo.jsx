import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Line, Bar } from "react-chartjs-2";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Spinner from "./../images/Spinner.gif";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  countryCard: {
    background: "#00783E",
    color: "#ffffff",
  },
  grid: {
    margin: "15px",
  },
}));

function chartData(charts) {
  charts.splice(0, charts.length - 15);
  return {
    labels: charts.map((date) => {
      var date = new Date(date.Date);
      return date.getDate() + "/" + (date.getMonth() + 1);
    }),
    datasets: [
      {
        label: "Covid Curve for last 15 days",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,

        data: charts.map((cases) => {
          return cases.Cases;
        }),
      },
    ],
  };
}

function CountryInfo({ country, chart, loading }) {
  const classes = useStyles();

  return loading ? (
    <Grid direction="column">
      <Grid item sm className={classes.grid}>
        {country.map((c) => {
          return (
            <Card>
              <CardContent className={classes.countryCard}>
                <Typography
                  display="block"
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  {c.Country}
                </Typography>

                <Typography display="block" variant="subtitle2">
                  TotalConfirmed: {c.TotalConfirmed}
                </Typography>
                <Typography variant="subtitle2" display="block">
                  TotalRecovered: {c.TotalRecovered}
                </Typography>
                <Typography display="block" variant="subtitle2">
                  TotalDeaths: {c.TotalDeaths}
                </Typography>
                <Typography
                  display="block"
                  className={"MuiTypography--subheading"}
                  variant="subtitle2"
                >
                  NewConfirmed: {c.NewConfirmed}
                </Typography>
                <Divider className={classes.divider} light />
                <Typography variant="subtitle2">
                  Date Updated: {c.Date}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
      <Grid item sm className={classes.grid}>
        <Line data={chartData(chart)} width={80} height={50} />
      </Grid>
    </Grid>
  ) : (
    <Grid container justify="center">
      <Grid item>
        <Typography variant="subtitle">
          Please select a country to visualize the data
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CountryInfo;
