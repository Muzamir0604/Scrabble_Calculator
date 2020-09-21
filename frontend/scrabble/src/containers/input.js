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
import Tile from "../components/tile";

const schema = Yup.object({
  word: Yup.string()
    .max(7, "Maximum 7 letters")
    .required("Required")
    .matches(/^[a-zA-Z]+$/, "Word must be only letters"),
});

const useStyles = makeStyles({
  buttonCancel: {
    backgroundColor: "red",
    color: "black",
    fontSize: 24,
  },
  buttonSubmit: {
    margin: "0.5em 0.5em",
    backgroundColor: "green",
    color: "black",
    fontSize: 24,
  },
  buttonSummary: {
    margin: "0.5em 0.5em",
    backgroundColor: "blue",
    color: "black",
    fontSize: 24,
  },
  textField: {
    margin: 50,
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
          <React.Fragment>
            <Tile word={props.values.word} count={7} />
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
