import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BallotIcon from "@mui/icons-material/Ballot";

import withStaticsPopoverState from "./withStaticsPopoverState";
import { Divider } from "@mui/material";

const StaticsPopover = ({
  featureName,
  statics,
  setAttribute,
  anchorEl,
  setAnchorEl,
  staticsPartiallyEnabled,
}) => (
  <>
    <IconButton
      aria-label="show-static-toggle"
      size="large"
      color={staticsPartiallyEnabled ? "warning" : "default"}
      onClick={(event) => setAnchorEl(event.currentTarget)}
    >
      <BallotIcon />
    </IconButton>
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
    >
      {Object.entries(statics)?.map(([staticName, staticChildren]) => (
        <Box key={staticName} sx={{ p: 2 }}>
          <Typography variant="h5">{staticName}</Typography>
          <Divider />
          {Object.entries(staticChildren)?.map(
            ([staticChildName, staticChildToggleValue]) => (
              <Box key={staticChildName} sx={{ display: "flex" }}>
                <FormControlLabel
                  sx={{ flexGrow: 1, justifyContent: "space-between" }}
                  control={<Switch checked={staticChildToggleValue} />}
                  label={
                    <Typography variant="overline">
                      {staticChildName}
                    </Typography>
                  }
                  labelPlacement="start"
                  onChange={() =>
                    setAttribute(
                      featureName,
                      staticName,
                      staticChildName,
                      !staticChildToggleValue
                    )
                  }
                />
              </Box>
            )
          )}
        </Box>
      ))}
    </Popover>
  </>
);

export { StaticsPopover };
export default withStaticsPopoverState(StaticsPopover);
