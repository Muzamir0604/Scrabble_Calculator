import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import capitalize from "../utils/textTransformer";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: "2em 12em",
    maxWidth: "80%",
  },
  tableHead: {
    backgroundColor: "#2b8cbe",
  },
  tableBody: {
    backgroundColor: "#f0f0f0",
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  var arr = [];
  for (var key in props.list[0]) {
    if (props.list[0].hasOwnProperty(key)) {
      arr.push(key);
    }
  }

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="a densed table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              {arr.map((header, key) => {
                return (
                  <React.Fragment>
                    <TableCell key={key}>{capitalize(header)}</TableCell>
                  </React.Fragment>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {props.list
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((list, key) => (
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
        <TablePagination
          className={classes.table}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={props.list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </React.Fragment>
  );
}
