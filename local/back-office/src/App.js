import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { darkTheme } from "./theme";
import { withAppState } from "./withAppState";

const App = ({ flags, toggleFlag }) => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container
      maxWidth={false}
      sx={{ flexGrow: 1, minHeight: "100vh" }}
      disableGutters
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Feature Flags
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ bgcolor: "black", mt: 4 }}>
        <FormGroup sx={{ p: 2 }}>
          {Object.entries(flags).map(([flagName, value]) => (
            <FormControlLabel
              key={flagName}
              sx={{ justifyContent: "space-between" }}
              control={<Switch checked={value} />}
              label={flagName}
              labelPlacement="start"
              onChange={() => toggleFlag(flagName)}
            />
          ))}
        </FormGroup>
      </Container>
    </Container>
  </ThemeProvider>
);

export default withAppState(App);
