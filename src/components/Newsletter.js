import React from "react";
import Section from "./Section";
import { Form, Button } from "react-bootstrap";

const Newsletter = () => {
  return (
    <Section bg="primary" text="light">
      <Form.Label className="h3 d-inline w-100">
        Sign Up For Our NewsLetter
      </Form.Label>
      <div className="input-group news-input">
        <Form.Control type="email" placeholder="Enter email" />
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </div>
    </Section>
  );
};

export default Newsletter;
