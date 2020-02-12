import React from "react";
import ReactDOM from "react-dom";
import Info from "./info/Info"
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="header">
        <div className="toggle-container">
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
           </div> 
           <div className="header-text">
            <p> — toggle dark theme</p>
          </div> 
      </div>
      <div className="content">
        <Info/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
