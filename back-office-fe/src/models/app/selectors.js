import { createSelector } from "reselect";
import { memoize } from "lodash";

const flags = ({ app }) => app?.flags;

const someStaticsAreEnabled = createSelector(flags, (flags) =>
  memoize((featureName) =>
    Object.values(Object.values(flags[featureName].attributes.statics)[0]).some(
      (value) => value
    )
  )
);

export { flags, someStaticsAreEnabled };
