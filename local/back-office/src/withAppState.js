import React, { useEffect, useState } from "react";

const withAppState = (Component) => (props) => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const getConfig = async () => {
      const response = await fetch(`http://localhost:4000/config`);
      const data = await response.json();
      setFlags(data);
    };

    getConfig();
  }, []);

  const toggleFlag = async (flag) => {
    const newFlagState = !flags[flag];
    const response = await fetch(
      `http://localhost:4000/${flag}/${newFlagState}`,
      { method: "POST" }
    );
    const data = await response.json();
    if (response.status === 200) {
      return setFlags(data);
    }
  };

  const newProps = { ...props, flags, toggleFlag };

  return <Component {...newProps} />;
};

export { withAppState };
export default withAppState;
