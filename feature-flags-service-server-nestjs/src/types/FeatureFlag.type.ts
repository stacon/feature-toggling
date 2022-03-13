import StateAttributes from "./StateAttributes.type";

type FeatureFlag = {
  globally: boolean;
  attributes: StateAttributes;
};

export default FeatureFlag;
