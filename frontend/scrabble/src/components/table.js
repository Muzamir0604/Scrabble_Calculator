import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: "2em 12em",
    maxWidth: "80%",
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  var arr = [];
  for (var key in props.list[0]) {
    if (props.list[0].hasOwnProperty(key)) {
      arr.push(key);
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {arr.map((header, key) => {
              return (
                <React.Fragment>
                  <TableCell>{header}</TableCell>
                </React.Fragment>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((list, key) => (
            <TableRow key={list.id}>
              <TableCell component="th" scope="row">
                {key}
              </TableCell>
              <TableCell>{list.name}</TableCell>
              <TableCell>{list.word}</TableCell>
              <TableCell>{list.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
