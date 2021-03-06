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
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddBox from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";

import { darkTheme } from "./theme";
import withAppState from "./withAppState";
import { StaticsPopover } from "./components";

const App = ({
  flags,
  toggleFlag,
  inputRef,
  inputText,
  setInputText,
  addFeatureFlagHandler,
  removeFeatureFlagHandler,
}) => (
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
        <Box sx={{ p: 4 }}>
          <TextField
            ref={inputRef}
            id="standard-basic"
            label="New feature"
            variant="standard"
            size="small"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addFeatureFlagHandler()}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="add-feature-flag"
                  size="large"
                  color="success"
                  onClick={addFeatureFlagHandler}
                >
                  <AddBox />
                </IconButton>
              ),
            }}
          />
        </Box>
        <FormGroup sx={{ p: 2 }}>
          {Object.entries(flags).map(
            ([
              flagName,
              {
                globally,
                attributes: { statics },
              },
            ]) => (
              <Box sx={{ display: "flex" }} key={flagName}>
                <FormControlLabel
                  sx={{ flexGrow: 1, justifyContent: "space-between" }}
                  control={<Switch checked={globally} />}
                  label={flagName}
                  labelPlacement="start"
                  onChange={() => toggleFlag(flagName)}
                />
                <StaticsPopover featureName={flagName} statics={statics} />
                <IconButton
                  aria-label="remove-feature-flag"
                  size="large"
                  color="error"
                  onClick={() => removeFeatureFlagHandler(flagName)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )
          )}
        </FormGroup>
      </Container>
    </Container>
  </ThemeProvider>
);

export default withAppState(App);
