import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function TextForm(props) {
  const [set, setState] = useState("");
  const handleState = () => {
    let NewText = set.toUpperCase();
    setState(NewText);
    props.showAlert("Converted To Uppercase", "success");
  };
  const handleStateLower = () => {
    let NewText = set.toLowerCase();
    setState(NewText);
    props.showAlert("Converted To Lowecase", "success");
  };
  const handleOnChange = (e) => {
    setState(e.target.value);
  };
  const handleClear = () => {
    setState("");
    props.showAlert("Clear Successfully", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("textarea");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard !", "success");
  };

  const HandleExtraSpaces = () => {
    let NewText = set.split(/[ ]+/);
    setState(NewText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Write Something Here</h1>
        <Form className="my-3">
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button> */}

          <textarea
            name="textarea"
            id="textarea"
            value={set}
            onChange={handleOnChange}
            cols="100"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </Form>
        <Button
          disabled={set.length === 0}
          className="mx-2 my-1"
          variant="primary"
          onClick={handleState}
        >
          Convert to uppercase
        </Button>
        <Button
          disabled={set.length === 0}
          variant="primary"
          className="mx-2 my-1"
          onClick={handleStateLower}
        >
          Convert to lowercase
        </Button>
        <Button
          disabled={set.length === 0}
          variant="primary"
          className="mx-2 my-1"
          onClick={handleClear}
        >
          Clear Text
        </Button>
        <Button
          disabled={set.length === 0}
          variant="primary"
          className="mx-2 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </Button>
        <Button
          disabled={set.length === 0}
          variant="primary"
          className="mx-2"
          onClick={HandleExtraSpaces}
        >
          Remove Extraspaces
        </Button>
        {/* </Form> */}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {
            set.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {set.length} characters{" "}
        </p>
        <p>
          Time to read the above para{" "}
          {0.008 *
            set.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}
        </p>
        <h2>Preview</h2>
        <p>
          {set.length > 0
            ? set
            : "Enter Something into textbox above to preview here"}{" "}
        </p>
      </div>
    </>
  );
}
