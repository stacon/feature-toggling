const { createFlag } = require("./utils");

const initialflagsState = {
  "new.logo": createFlag(),
  "new.button": createFlag(),
};

module.exports = { initialflagsState };
