import React from "react";
import { Container } from "react-bootstrap";

const Section = ({ children, bg = "light", text = "dark", flex = "sm" }) => {
  return (
    <section className={`bg-${bg} text-${text} p-5`}>
      <Container
        className={`d-${flex}-flex justify-content-between align-items-center`}
      >
        {children}
      </Container>
    </section>
  );
};

export default Section;
