import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import capitalize from "../utils/textTransformer";
import dictTransformer from "../utils/dictTransformer";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  box: {
    borderStyle: "dotted",
    backgroundColor: "transparent",
    width: "100px",
    height: "100px",
    margin: "0.25em",
    alignItems: "centre",
    justifyItems: "centre",
  },
  grid: {},
  type: { fontSize: "58px" },
  sub: {
    fontSize: "16px",
    textAlign: "right",
    margin: "-1em 0.5em",
  },
});
function Tile(props) {
  const classes = useStyles();
  const scoreList = useSelector((state) => state.scoreTableReducer.list);
  var dict = dictTransformer(scoreList);
  console.log(dict["a"]);

  return (
    <React.Fragment>
      <Grid container className={classes.grid} justify="center">
        {[...Array(props.count)].map((val, key) => {
          return (
            <Grid item>
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