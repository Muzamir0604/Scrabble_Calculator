import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  FormHelperText,
  FormGroup,
  Button,
  TextField,
} from "@material-ui/core";
import { Formik } from "formik";
import { postUserEntryList } from "../actions/userEntryActions";
import * as Yup from "yup";
import Tile from "../components/tile";
const schema = Yup.object({
  word: Yup.string()
    .max(7, "Maximum 7 letters")
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Word must be only letters"),
});

const useStyles = makeStyles((theme) => ({
  buttonCancel: {
    backgroundColor: "#dc143c",
    color: "black",
    [theme.breakpoints.only("xs")]: { fontSize: 12 },
    [theme.breakpoints.only("sm")]: { fontSize: 18 },
    [theme.breakpoints.up("md")]: { fontSize: 24 },
  },

  buttonSubmit: {
    margin: "0.5em 0.5em",
    backgroundColor: "#a0be9f",
    color: "black",
    [theme.breakpoints.only("xs")]: { fontSize: 12 },
    [theme.breakpoints.only("sm")]: { fontSize: 18 },
    [theme.breakpoints.up("md")]: { fontSize: 24 },
  },
  buttonSummary: {
    margin: "0.5em 0.5em",
    backgroundColor: "#3A86B7",
    color: "black",
    [theme.breakpoints.only("xs")]: { fontSize: 12 },
    [theme.breakpoints.only("sm")]: { fontSize: 18 },
    [theme.breakpoints.up("md")]: { fontSize: 24 },
  },
  textField: {
    [theme.breakpoints.only("xs")]: {
      justify: "center",
    },
    [theme.breakpoints.down("sm")]: {
      justify: "center",
    },
    [theme.breakpoints.up("md")]: {
      margin: "2em 10em",
      justify: "center",
    },
  },
  resize: {
    textAlign: "center",
    [theme.breakpoints.only("xs")]: { fontSize: 30 },
    [theme.breakpoints.only("sm")]: { fontSize: 40 },
    [theme.breakpoints.up("md")]: { fontSize: 50 },
  },
}));
function InputForm(props) {
  const func_props = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  let name = "muzamir";
  return (
    <React.Fragment>
      <Formik
        initialValues={{ word: "bob" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            dispatch(postUserEntryList(name, values.word));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <React.Fragment>
            <Tile word={props.values.word} count={10} />
            <form onSubmit={props.handleSubmit}>
              <FormGroup>
                <FormControl>
                  <TextField
                    name="word"
                    type="text"
                    value={props.values.word}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    placeholder="key in your word"
                    InputProps={{ classes: { input: classes.resize } }}
                    className={classes.textField}
                  />
                </FormControl>
                {props.touched.word && props.errors.word ? (
                  <FormHelperText
                    id="component-error-text"
                    style={{ color: "red" }}
                  >
                    {props.errors.word}
                  </FormHelperText>
                ) : null}
              </FormGroup>
              <Button
                color="primary"
                type="submit"
                className={classes.buttonSubmit}
              >
                Submit
              </Button>
              <Button
                color="secondary"
                className={classes.buttonCancel}
                onClick={props.handleReset}
              >
                Clear
              </Button>
              <Button
                color="secondary"
                className={classes.buttonSummary}
                onClick={func_props.handleSummary}
              >
                View All
              </Button>
            </form>
          </React.Fragment>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default InputForm;
