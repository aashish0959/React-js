import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

export default function FormHendling() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <h1>FormHandling</h1>
      <h1>{name}</h1>
      <button onClick={() => setName("Student")}>Click</button>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"    
          onClick={handleSubmit}
        >
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
        </Button>
      </Form>
    </>
  );
}
