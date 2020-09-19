import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserEntryList } from "./actions/userEntryActions";

import ScoreCard from "./components/score";
import InputForm from "./containers/input";
import SimpleTable from "./components/table";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
const useStyles = makeStyles({
  form: {
    padding: "4em 4em",
  },
});

function App(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userEntry = useSelector((state) => state.userEntryReducer);

  useEffect(() => {
    dispatch(fetchUserEntryList());
    // eslint-disable-next-line
  }, [userEntry.score]);
  const list = useSelector((state) => state.userEntryReducer.list);

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} className={classes.form}>
          <ScoreCard score={userEntry.score} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <InputForm />
        </Grid>
        <Grid item xs={12} sm={12}>
          <SimpleTable list={list} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
