import { Config } from "../types";
import FeatureFlag from "../types/FeatureFlag.type";

// TODO: This is an example configuration for static attributes
const config: Config = {
  statics: {
    environments: ["DEVELOPMENT", "STAGING", "PRODUCTION"],
  },
  dynamics: {},
};

const createFlag =
  ({ statics }: Config) =>
  (): FeatureFlag => ({
    globally: false,
    attributes: {
      statics: {
        ...Object.entries(statics).reduce(
          (staticAcc, [key, values]) => ({
            ...staticAcc,
            [key]: values.reduce(
              (acc, value) => ({
                ...acc,
                [value]: false,
              }),
              {}
            ),
          }),
          {}
        ),
      },
      dynamics: {},
    },
  });

export default createFlag(config);
