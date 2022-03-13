import React, { useEffect, useState, useRef } from "react";
import { compose } from "redux";

import { withModelProps } from "aa-minimal-core-lib/components/model-props";
import { flags, setFlags } from "models/app";

const withAppState = (Component) => (props) => {
  const { flags, setFlags } = props;
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const getConfig = async () => {
      const response = await fetch(`http://localhost:4000/back-office/config`);
      const data = await response.json();
      setFlags(data);
    };

    getConfig();
  }, []);

  const toggleFlag = async (flag) => {
    const newFlagState = !flags[flag].globally;
    const response = await fetch(
      `http://localhost:4000/back-office/${flag}/globally/${newFlagState}`,
      { method: "PATCH" }
    );
    const data = await response.json();
    if (response.status === 200) {
      return setFlags(data);
    }
  };

  const addFeatureFlagHandler = async () => {
    const response = await fetch(
      `http://localhost:4000/back-office/create/${inputText}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      setFlags(data);
      setInputText("");
    }
  };

  const removeFeatureFlagHandler = async (flag) => {
    const response = await fetch(`http://localhost:4000/back-office/${flag}`, {
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
export default compose(withModelProps({ flags, setFlags }), withAppState);
