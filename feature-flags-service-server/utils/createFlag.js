const statics = {
  environments: ["DEVELOPMENT", "STAGING", "PRODUCTION"],
};

const createFlag = () => ({
  globally: false,
  static: {
    ...Object.entries(statics).reduce((acc, [static, possibleKeys]) => {
      acc[static] = possibleKeys.reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      return acc;
    }, {}),
  },
  dynamic: {},
});

module.exports = { createFlag };
