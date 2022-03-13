import getClientConfig from "../getClientConfig";

const mockFlagsState = {
  "new.feature": {
    globally: false,
    attributes: {
      statics: {
        environment: {
          DEVELOPMENT: true,
          STAGING: false,
          PRODUCTION: false,
        },
      },
      dynamics: {},
    },
  },
};

describe("getClientConfig", () => {
  it("should return the expected output", () => {
    const attributes = {
      statics: {
        environment: "DEVELOPMENT",
      },
      dynamics: {},
    };

    const expectedOutput = {
      "new.feature": true,
    };

    expect(getClientConfig(mockFlagsState, attributes)).toEqual(expectedOutput);
  });

  it("should return the expected output", () => {
    const attributes = {
      statics: {
        environment: "PRODUCTION",
      },
      dynamics: {},
    };

    const expectedOutput = {
      "new.feature": false,
    };

    expect(getClientConfig(mockFlagsState, attributes)).toEqual(expectedOutput);
  });
});
