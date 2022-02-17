import classNames from "classnames";
import { useContext } from "react";
import { FeatureFlagsProvider } from "../../feature-flags";
import logo from "./logo.svg";

const Logo = () => {
  const { isFeatureEnabled } = useContext(FeatureFlagsProvider);

  return (
    <img
      src={logo}
      className={classNames(
        "App-logo",
        isFeatureEnabled("new.logo")
          ? "App-logo-animation-v2"
          : "App-logo-animation"
      )}
      alt="logo"
    />
  );
};

export default Logo;
