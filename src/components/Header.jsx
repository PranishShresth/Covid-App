import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: "#00783E",
    color: "#ffffff",
  },
  formControl: {
    minWidth: 120,
    color: "#ffffff",
  },
  selectCountry: {
    color: "#ffffff",
    borderBottom: "#ffffff solid 2px",
  },
}));

function Header(props) {
  const { handleCountry, data } = props;
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
    handleCountry(event.target.value);
  };

  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" className={classes.title}>
          COVID - TRACKER
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel style={{ color: "#ffffff" }} id="contry">
            Countries
          </InputLabel>

          <Select
            className={classes.selectCountry}
            labelId="country-selector"
            id="country-selectors"
            value={country}
            onChange={handleChange}
          >
            {data.Countries &&
              data.Countries.map((country) => {
                return (
                  <MenuItem key={country.Slug} value={country.Country}>
                    {country.Country}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
