import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Input,
  FormHelperText,
  FormGroup,
  Button,
  TextField,
} from "@material-ui/core";
// import Alert from "@material-ui/lab/Alert";
import { Formik } from "formik";
import { postUserEntryList } from "../actions/userEntryActions";
import * as Yup from "yup";
//TODO: Fix Regex for Case insensitive
const schema = Yup.object({
  word: Yup.string()
    .required("Required")
    .matches(/^[abcdefghijklmnopqrstuvwxyz]+$/, "Word must be only letters"),
});

const useStyles = makeStyles({
  form: {
    margin: "0em 2em",
    padding: "0em 2em",
  },
  buttonCancel: {
    margin: "1em 1em",
    backgroundColor: "red",
    color: "black",
    fontSize: 24,
  },
  buttonSubmit: {
    margin: "1em 1em",
    backgroundColor: "green",
    color: "black",
    fontSize: 24,
  },
  buttonSummary: {
    margin: "1em 1em",
    backgroundColor: "blue",
    color: "black",
    fontSize: 24,
  },
  textField: {
    // width: 500,
    margin: 100,
  },
  //style for font size
  resize: {
    fontSize: 50,
  },
});
function InputForm(props) {
  const func_props = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  let name = "muzamir";
  return (
    <React.Fragment>
      <Formik
        initialValues={{ word: "" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            dispatch(postUserEntryList(name, values.word));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <FormGroup className={classes.form}>
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
        )}
      </Formik>
    </React.Fragment>
  );
}

export default InputForm;
