import { FeatureFlag } from ".";

type FeaturesFlagState = {
  [key: string]: FeatureFlag;
};

export default FeaturesFlagState;
