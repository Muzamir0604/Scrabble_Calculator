import React, { useEffect, useState } from "react";
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
  table: {
    margin: "0.5em 0.5em",
    padding: "0.5em 0.5em",
  },
});

function App(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userEntry = useSelector((state) => state.userEntryReducer);
  const [isSummary, setIsSummary] = useState(false);
  function handleSummary() {
    setIsSummary(!isSummary);
  }
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
        <Grid item xs={12} className={classes.table}>
          <InputForm handleSummary={handleSummary} />
        </Grid>
        {isSummary ? (
          <Grid item xs={12}>
            <SimpleTable list={list} />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default App;
