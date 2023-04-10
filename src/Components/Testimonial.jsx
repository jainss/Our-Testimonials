import styled from "@emotion/styled";
import React from "react";
import Card from "./Card";

const Container = styled("div")`
  height: 28rem;
  width: 35rem;
  background-color: white;
  border-radius: 0.5rem;
`;

export default function Testimonial(props) {
  let reviews = props.reviews;
  return (
    <Container>
      <Card reviews={reviews} />
    </Container>
  );
}
