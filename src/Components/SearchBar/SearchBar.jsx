import React from "react";
// import { Container, Form, FormGroup,Input, Button} from "reactstrap";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

import { IconButton, TextField} from "@material-ui/core";

//SearchBar from material UI

function SearchBar({ input, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <form  noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Search for Product"
          onChange={handleChange}
          value={input}
        />
        <IconButton >
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default SearchBar;
