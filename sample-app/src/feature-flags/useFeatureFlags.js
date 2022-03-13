import { useEffect, useState } from "react";

const useFeatureFlags = ({ ffServerURL, attributes }) => {
  const [features, setFeatures] = useState({});

  useEffect(() => {
    const getConfig = async () => {
      const response = await fetch(`${ffServerURL}/client/config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attributes),
      });
      const data = await response.json();
      setFeatures(data);
    };

    getConfig();
  }, []);

  const isFeatureEnabled = (feature) => features[feature];

  return { isFeatureEnabled };
};

export default useFeatureFlags;
