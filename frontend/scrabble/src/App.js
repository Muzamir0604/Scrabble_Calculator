import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserEntryList } from "./actions/userEntryActions";
import { fetchScoreTableList } from "./actions/scoreTableActions";
import ScoreCard from "./components/score";
import InputForm from "./containers/input";
import SimpleTable from "./components/table";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.down("sm")]: {
      padding: "2em 0.5em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4em 4em",
    },
  },
  table: {
    [theme.breakpoints.down("sm")]: {
      margin: "0.5em 0.5em",
      padding: "0.5em 0.5em",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0.5em 4em",
      padding: "0.5em 4em",
    },
  },
}));

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
    dispatch(fetchScoreTableList());
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
          <Grid item xs={12} className={classes.table}>
            <SimpleTable list={list} />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default App;
