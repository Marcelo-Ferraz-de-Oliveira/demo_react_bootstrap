import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const CardFull = ({
  children,
  image,
  margin = "3",
  bg = "dark",
  text = "light",
  titleSize = "3",
  buttonVariant = "primary",
  title = "Card",
  buttonText = "Button",
}) => {
  return (
    <Card className={`m-${margin} text-center bg-${bg} text-${text}`}>
      <Container className={`text-center mt-${margin}`}>{image}</Container>
      <Card.Body>
        <Card.Title as={`h${titleSize}`}>{title}</Card.Title>
        <Card.Text className="p">{children}</Card.Text>
        <Button variant={buttonVariant}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default CardFull;
