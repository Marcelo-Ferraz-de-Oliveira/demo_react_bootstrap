import React from "react";
import Section from "./Section";
import { Card, Button, Container } from "react-bootstrap";
import { BsLaptop, BsPersonSquare, BsPeople } from "react-icons/bs";
import CardFull from "./CardFull";

const Boxes = () => {
  return (
    <Section bg="light" text="dark" flex="md">
      <CardFull
        image={<BsLaptop size="2em" />}
        title="Virtual"
        buttonText="Read More"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum natus
        consequuntur deserunt tempora quia obcaecati?
      </CardFull>
      <CardFull
        image={<BsPersonSquare size="2em" />}
        title="Hybrid"
        buttonText="Read More"
        bg="secondary"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum natus
        consequuntur deserunt tempora quia obcaecati?
      </CardFull>
      <CardFull
        image={<BsPeople size="2em" />}
        title="In Person"
        buttonText="Read More"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum natus
        consequuntur deserunt tempora quia obcaecati?
      </CardFull>
    </Section>
  );
};

export default Boxes;
