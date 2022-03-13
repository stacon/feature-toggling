import staticsFlag from "../../utils/staticsFlag";

describe("staticsFlag", () => {
  test("should return true", () => {
    const clientAttributes = {
      statics: {
        environment: "DEVELOPMENT",
      },
      dynamics: {},
    };
    const stateAttributes = {
      statics: {
        environment: {
          DEVELOPMENT: true,
          STAGING: false,
          PRODUCTION: false,
        },
      },
      dynamics: {},
    };

    expect(staticsFlag(clientAttributes, stateAttributes)).toBe(true);
  });
});
