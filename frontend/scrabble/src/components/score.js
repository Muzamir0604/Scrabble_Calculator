import React from "react";
import { Typography } from "@material-ui/core";

function ScoreCard(props) {
  return (
    <React.Fragment>
      <Typography data-test="score" variant="h4">
        Your Score : {props.score}
      </Typography>
    </React.Fragment>
  );
}

export default ScoreCard;
