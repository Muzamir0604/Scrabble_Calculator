import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import capitalize from "../utils/textTransformer";
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
  const txt = "123";

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.grid}
        // alignContent="center"
        // alignItems="center"
        justify="center"
      >
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
                    ? txt !== null
                      ? capitalize(txt)
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
