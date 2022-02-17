import React from "react";
import useFeatureFlags from "./useFeatureFlags.js";

const withFeatureFlagsCreator =
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

const withFeatureFlags = withFeatureFlagsCreator;

export { withFeatureFlags };
export default withFeatureFlags;
