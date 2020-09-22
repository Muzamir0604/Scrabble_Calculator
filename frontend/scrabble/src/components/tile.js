import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import capitalize from "../utils/textTransformer";
import dictTransformer from "../utils/dictTransformer";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  box: {
    borderStyle: "dotted",
    backgroundColor: "transparent",
    alignItems: "centre",
    justifyItems: "centre",

    [theme.breakpoints.only("xs")]: {
      width: "28px",
      height: "40px",
      margin: "0.25em",
    },
    [theme.breakpoints.only("sm")]: {
      width: "50px",
      height: "50px",
      margin: "0.25em",
    },
    [theme.breakpoints.up("md")]: {
      width: "100px",
      height: "100px",
      margin: "0.25em",
    },
  },
  grid: {},
  type: {
    [theme.breakpoints.only("xs")]: { fontSize: "24px" },
    [theme.breakpoints.only("sm")]: { fontSize: "28px" },
    [theme.breakpoints.up("md")]: { fontSize: "58px" },
  },
  sub: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "10px",
      textAlign: "right",
      margin: "-1.25em 0.25em",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "10px",
      textAlign: "right",
      margin: "-1.25em 0.7em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
      textAlign: "right",
      margin: "-1em 0.75em",
    },
  },
}));
function Tile(props) {
  const classes = useStyles();
  const scoreList = useSelector((state) => state.scoreTableReducer.list);
  var dict = dictTransformer(scoreList);

  return (
    <React.Fragment>
      <Grid container className={classes.grid} justify="center">
        {[...Array(props.count)].map((val, key) => {
          return (
            <Grid item key={key}>
              <Box key={key} className={classes.box}>
                <Typography className={classes.type}>
                  {props.word !== undefined
                    ? capitalize(props.word[key]) !== null
                      ? capitalize(props.word[key])
                      : null
                    : null}
                </Typography>
                <Typography className={classes.sub}>
                  {props.word !== undefined
                    ? capitalize(props.word[key]) !== null
                      ? dict[props.word[key].toLowerCase()]
                      : null
                    : null}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
export default Tile;
