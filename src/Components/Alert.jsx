import React from "react";
import { Alert } from "react-bootstrap";

// import Button from "react-bootstrap/Button";

export default function Alertt(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "80px" }}>
      {props.alert && (
        <Alert variant={props.alert.type}>
          {capitalize(props.alert.type)}{" "}
          <Alert.Heading>{props.alert.msg}</Alert.Heading>
          {/* <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p> */}
        </Alert>
      )}
    </div>
  );
}
