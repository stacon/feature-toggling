import classNames from "classnames";
import logo from "./logo.svg";
import "./App.css";

import withFeatureFlags from "./withFeatureFlags";

const App = ({ isFeatureEnabled }) => (
  <div className="App">
    <header className="App-header">
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
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default withFeatureFlags(App);
