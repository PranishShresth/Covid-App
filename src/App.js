import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import axios from "axios";

function App() {
  const [country, setCountry] = useState([]);
  const [chart, setChart] = useState([]);

  const handleCountry = (c) => {
    setCountry(filterCountry(c));
    fetchSelectedCountry(c);
    setIsLoading(true);
  };
  const [allCountries, setAllCountries] = useState([]);
  const fetchAllCountries = async () => {
    const stats = await axios.get("https://api.covid19api.com/summary");
    setAllCountries(stats.data);
  };
  const [isLoading, setIsLoading] = useState(false);

  const fetchSelectedCountry = async (country) => {
    var currentDate = new Date();
    var getMonth = currentDate.getMonth() + 1;
    var getDay = currentDate.getDate();
    var getYear = currentDate.getFullYear();

    const chart = await axios.get(
      `https://api.covid19api.com/country/${country}/status/confirmed?from=2020-04-01T00:00:00Z&to=${getYear}-0${getDay}-${getMonth}T00:00:00Z`
    );
    setChart(chart.data);
  };

  useEffect(() => {
    fetchAllCountries();
    setIsLoading(false);
  }, []);

  const filterCountry = (ct) => {
    return (
      allCountries.Countries &&
      allCountries.Countries.filter((c) => {
        return c.Country === ct;
      })
    );
  };

  return (
    <div className="covid">
      <Header
        handleCountry={handleCountry}
        data={allCountries}
        filter={filterCountry}
      />
      <Dashboard
        country={country}
        allstats={allCountries}
        chart={chart}
        loading={isLoading}
      />
    </div>
  );
}

export default App;
