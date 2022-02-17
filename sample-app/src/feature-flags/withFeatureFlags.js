import React from "react";
import useFeatureFlags from "./useFeatureFlags.js";

const withFeatureFlags =
  ({ ffServerURL, attributes }) =>
  (Component) =>
  (props) => {
    const { isFeatureEnabled } = useFeatureFlags({ ffServerURL, attributes });

    const newProps = {
      ...props,
      isFeatureEnabled,
    };
    return <Component {...newProps} />;
  };

export { withFeatureFlags };
export default withFeatureFlags;
