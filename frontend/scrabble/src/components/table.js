import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import capitalize from "../utils/textTransformer";
import options from "../utils/dateOption";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 250,
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#193684",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    backgroundColor: "#f0f0f0",
  },
}))(TableCell);

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
          <TableHead>
            <TableRow>
              {arr.map((header, key) => {
                return (
                  <React.Fragment>
                    {header !== "id" ? (
                      header !== "name" ? (
                        <StyledTableCell align="center" key={key}>
                          {capitalize(header)}
                        </StyledTableCell>
                      ) : null
                    ) : null}
                  </React.Fragment>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.list
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((list, key) => (
                <TableRow key={list.id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {list.word}
                  </StyledTableCell>
                  <StyledTableCell align="center">{list.score}</StyledTableCell>
                  <StyledTableCell align="center">
                    {new Date(list.created_at).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </StyledTableCell>
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
