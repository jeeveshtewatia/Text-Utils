import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

// import About from "./Components/About";
import ColorSchemesExample from "./Components/Colornavbar";
import TextForm from "./Components/TextForm";
import Alertt from "./Components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "./App.css";
function App() {
  const [Mode, setMode] = useState("light");
  const [Alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Dark Mode Disabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <ColorSchemesExample
        title="Text Utils"
        home="home page"
        mode={Mode}
        toggller={toggleMode}
      />
      <Alertt alert={Alert} />

      <TextForm mode={Mode} showAlert={showAlert} />
      {/* <Routes>
          <Route
            path="/"
            element={<TextForm mode={Mode} showAlert={showAlert} />}
          />

          <Route path="/About" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
