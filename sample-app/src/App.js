import classNames from "classnames";
import logo from "./logo.svg";
import "./App.css";

import withFeatureFlags from "./feature-flags/withFeatureFlags";

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
      {isFeatureEnabled("new.button") && (
        <a
          className="App-link"
          href="https://github.com/stacon"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My Github
        </a>
      )}
    </header>
  </div>
);

export default withFeatureFlags({
  ffServerURL: "http://localhost:4000",
  attributes: {
    statics: {
      environment: process.env.REACT_APP_ENVIRONMENT_NAME,
    },
    dynamics: {},
  },
})(App);
