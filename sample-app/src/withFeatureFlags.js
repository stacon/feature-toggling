import React, { useEffect, useState } from "react";

const withFeatureFlagsCreator =
  ({ ffServerURL, attributes }) =>
  (Component) =>
  (props) => {
    const [features, setFeatures] = useState({});

    useEffect(() => {
      const getConfig = async () => {
        const response = await fetch(`${ffServerURL}/config`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(attributes),
        });
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

const withFeatureFlags = withFeatureFlagsCreator({
  ffServerURL: "http://localhost:4000",
  attributes: {
    statics: {
      environment: process.env.REACT_APP_ENVIRONMENT_NAME,
    },
    dynamics: {},
  },
});

export { withFeatureFlags };
export default withFeatureFlags;
