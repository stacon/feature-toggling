import { FeaturesFlagState } from "./types";
import { createFlag } from "./utils";

const initialflagsState: FeaturesFlagState = {
  "new.logo": createFlag(),
  "new.button": createFlag(),
};

export { initialflagsState };
