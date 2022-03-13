import { useState } from "react";
import { compose } from "redux";

import { withModelProps } from "aa-minimal-core-lib/components/model-props";

import { setFlags, someStaticsAreEnabled } from "models/app";

const withStaticsPopoverState = (Component) => (props) => {
  const { setFlags, featureName, someStaticsAreEnabled } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const setAttribute = async (
    featureName,
    staticName,
    staticChildName,
    staticChildToggleValue
  ) => {
    const response = await fetch(
      `http://localhost:4000/back-office/${featureName}/static.${staticName}.${staticChildName}/${staticChildToggleValue}`,
      { method: "PATCH" }
    );
    const data = await response.json();
    if (response.status === 200) {
      return setFlags(data);
    }
  };

  const staticsPartiallyEnabled = someStaticsAreEnabled(featureName);

  const newProps = {
    ...props,
    anchorEl,
    setAnchorEl,
    setAttribute,
    staticsPartiallyEnabled,
  };

  return <Component {...newProps} />;
};

export { withStaticsPopoverState };
export default compose(
  withModelProps({ setFlags, someStaticsAreEnabled }),
  withStaticsPopoverState
);
