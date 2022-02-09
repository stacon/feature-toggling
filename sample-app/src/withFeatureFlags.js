import React, { useEffect, useState } from "react";
import config from "./config";

const withFeatureFlagsCreator =
  (config = {}) =>
  (Component) =>
  (props) => {
    const [features, setFeatures] = useState({ ...config });

    useEffect(() => {
      const getConfig = async () => {
        const response = await fetch(`http://localhost:4000/config`);
        const data = await response.json();
        setFeatures(data);
      };

      getConfig();
    }, []);

    const isFeatureEnabled = (feature) => {
      return features[feature];
    };

    const newProps = {
      ...props,
      isFeatureEnabled,
    };
    return <Component {...newProps} />;
  };

const withFeatureFlags = withFeatureFlagsCreator(config);

export { withFeatureFlags };
export default withFeatureFlags;