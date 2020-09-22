import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#016450",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
