import { handleActions } from "redux-actions";

import { setFlags } from "./actions";

const initialState = {
  flags: [],
};

const reducer = handleActions(
  {
    [setFlags.type]: (state, { payload }) => ({
      ...state,
      flags: payload,
    }),
  },
  initialState
);

export { reducer, initialState };
export default reducer;
