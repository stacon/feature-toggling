import React, { useEffect, useState, useRef } from "react";

const withAppState = (Component) => (props) => {
  const [flags, setFlags] = useState([]);
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState("");

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
      { method: "PATCH" }
    );
    const data = await response.json();
    if (response.status === 200) {
      return setFlags(data);
    }
  };

  const addFeatureFlagHandler = async () => {
    const response = await fetch(`http://localhost:4000/create/${inputText}`, {
      method: "POST",
    });
    const data = await response.json();
    if (response.status === 200) {
      setFlags(data);
      setInputText("");
    }
  };

  const removeFeatureFlagHandler = async (flag) => {
    const response = await fetch(`http://localhost:4000/delete/${flag}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.status === 200) {
      setFlags(data);
    }
  };

  const newProps = {
    ...props,
    flags,
    toggleFlag,
    inputRef,
    inputText,
    setInputText,
    addFeatureFlagHandler,
    removeFeatureFlagHandler,
  };

  return <Component {...newProps} />;
};

export { withAppState };
export default withAppState;
