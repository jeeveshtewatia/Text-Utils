import { Accordion, Button } from "react-bootstrap";
import React, { useState } from "react";

function About() {
  const [mystyle, Newstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btn, setBtn] = useState("Change to dark mode");
  const toggleMode = () => {
    if (mystyle.color === "white") {
      Newstyle({ color: "black", backgroundColor: "white" });
      setBtn("Change to dark mode");
    } else {
      Newstyle({ color: "white", backgroundColor: "black" });
      setBtn("Change to normal mode");
    }
  };

  return (
    <div className="container" style={mystyle}>
      <h2>About us </h2>
      <Accordion defaultActiveKey="0" style={mystyle}>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={mystyle}>Accordion Item #1</Accordion.Header>
          <Accordion.Body style={mystyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style={mystyle}>Accordion Item #2</Accordion.Header>
          <Accordion.Body style={mystyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button variant="primary" onClick={toggleMode}>
        {btn}
      </Button>
    </div>
  );
}

export default About;
