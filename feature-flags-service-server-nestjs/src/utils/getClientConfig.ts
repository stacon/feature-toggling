import { ClientAttributes, FeaturesFlagState, FlagList } from "../types";
import staticsFlag from "./staticsFlag";

const getClientConfig = (
  flagsState: FeaturesFlagState,
  clientAttributes: ClientAttributes
): FlagList =>
  Object.entries(flagsState).reduce((acc, [flag, flagConfig]) => {
    const { globally, attributes } = flagConfig;

    if (globally) {
      return { ...acc, [flag]: true };
    }

    if (staticsFlag(clientAttributes, attributes))
      return { ...acc, [flag]: true };

    return { ...acc, [flag]: false };
  }, {});

export default getClientConfig;
