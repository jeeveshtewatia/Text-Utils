import { Container, Nav, Navbar, Form } from "react-bootstrap";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function ColorSchemesExample(props) {
  return (
    <>
      <Navbar bg={props.mode} variant={props.mode}>
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">{props.home}</Nav.Link>
            {/* <Nav.Link href="/About"> About</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Form.Check
            onClick={props.toggller}
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
        </Container>
      </Navbar>
      {/* <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  */}
      {/* 
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}
ColorSchemesExample.protoTypes = {
  title: PropTypes.string,
};

export default ColorSchemesExample;
