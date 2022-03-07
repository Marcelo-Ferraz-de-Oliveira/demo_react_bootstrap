import React from "react";
import Section from "./Section";
import { Card, Button, Image } from "react-bootstrap";

const Showcase = ({ handleShow, devfocus }) => {
  return (
    <Section bg="dark" text="light">
      <Card bg="dark" text="light" border="dark">
        <Card.Body className="">
          <Card.Title as="h1">Become a Web Developer</Card.Title>
          <Card.Text className="p lead">
            We focus on teaching our students the fundamentals of the latest and
            greatest technologies to prepare them for their first dev role
          </Card.Text>
          <Button variant="primary btn-lg" onClick={handleShow}>
            Start The Enrollment
          </Button>
        </Card.Body>
      </Card>
      <Image src={devfocus} fluid="true" className="w-50 d-none d-sm-block" />
    </Section>
  );
};

export default Showcase;
