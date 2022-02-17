import { createContext } from "react";
import useFeatureFlags from "./useFeatureFlags";

const FeatureFlagsContext = createContext({});

const FeatureFlagsProvider = ({ children, ffServerURL, attributes }) => {
  const { isFeatureEnabled } = useFeatureFlags({ ffServerURL, attributes });

  return (
    <FeatureFlagsContext.Provider value={{ isFeatureEnabled }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagsProvider;
