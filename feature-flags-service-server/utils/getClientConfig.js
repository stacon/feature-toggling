const getClientConfig = (flagsState, attributes) => {
  const { static, dynamic } = attributes;

  return Object.entries(flagsState).reduce((acc, [flag, flagConfig]) => {
    const {
      globally,
      static: { environments },
    } = flagConfig;

    acc[flag] = globally || !!environments[static.environment];

    return acc;
  }, {});
};

module.exports = { getClientConfig };
