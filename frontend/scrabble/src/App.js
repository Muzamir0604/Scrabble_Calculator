import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserEntryList } from "./actions/userEntryActions";
import ScoreCard from "./components/score";
import InputForm from "./containers/input";
import SimpleTable from "./components/table";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

// Issue relating to multiple re-render
// https://stackoverflow.com/questions/35136836/react-component-render-is-called-multiple-times-when-pushing-new-url
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
  const scoreList = useSelector((state) => state.scoreTableReducer.list);

  const [isSummary, setIsSummary] = useState(false);
  const [isScore, setIsScore] = useState(true);
  function handleSummary() {
    setIsSummary(!isSummary);
  }

  useEffect(() => {
    dispatch(fetchUserEntryList());
    // eslint-disable-next-line
  }, [userEntry.score]);

  const list = userEntry.list;
  let scoreComponent;
  let tableComponent;
  if (userEntry.isLoading) {
    scoreComponent = tableComponent = <div>Loading.....</div>;
  } else {
    scoreComponent = (
      <ScoreCard score={isScore ? userEntry.score : 0} data-test="test-score" />
    );
    tableComponent = <SimpleTable list={list} data-test="test-table" />;
  }

  return (
    <div className="App" data-test="test-app">
      <Grid container>
        <Grid item xs={12} className={classes.form}>
          {scoreComponent}
        </Grid>
        <Grid item xs={12} className={classes.table} data-test="test-input">
          <InputForm
            handleSummary={handleSummary}
            setIsScore={setIsScore}
            scoreList={scoreList}
          />
        </Grid>
        {isSummary ? (
          <Grid item xs={12} className={classes.table}>
            {tableComponent}
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default App;
