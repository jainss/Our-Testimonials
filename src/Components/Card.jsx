import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "@emotion/styled";
import { height } from "@mui/system";

const ImageWrapper = styled("div")`
  position: relative;
  height: 3.5rem;
`;
const Image = styled("img")`
  max-width: 6.5rem;
  max-height: 6.5rem;
  object-fit: cover;
  border-radius: 50%;
  top: -4rem;
  left: 2rem;
  // position: absolute;
  margin-left: -0.7rem;
  margin-top: 0.1rem;
`;

const ImageBox = styled("div")`
  width: 6.5rem;
  background-color: #af69ef;
  height: 6.5rem;
  z-index: -20;

  border-radius: 50%;
  top: -3rem;
  left: 2rem;
  z-index: 25;
  position: absolute;
`;

const Desciption = styled("div")`
  padding-left: 4rem;
  padding-right: 4rem;
`;

const ButtonWrap = styled("div")`
  margin-top: 2rem;
`;

const B1 = styled("button")`
  cursor: pointer;
  background-color: white;
  height: 2rem;
  width: 2rem;
  margin-right: 2rem;
  border-style: none;
  font-size: 2rem;
  color: #af69ef;
`;
const Surprise = styled("button")`
  background-color: #af69ef;
  height: 2rem;
  width: 8rem;
  color: white;
  font-weight: 600;
  border-radius: 0.3rem;
  border-style: none;
  cursor: pointer;
`;

export default function Card(props) {
  let reviews = props.reviews;
  let len = reviews.length;
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    if (index == 0) {
      setIndex(len - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const rightShiftHandler = () => {
    if (index == len - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const surpriseHandler = () => {
    setIndex(Math.floor(Math.random() * len));
  };

  return (
    <div>
      <ImageWrapper>
        <ImageBox>
          <Image src={reviews[index].image} alt="Avatar" />
        </ImageBox>
      </ImageWrapper>
      <div>
        <h2 style={{ marginBottom: 5 }}>{reviews[index].name}</h2>
      </div>
      <div>
        <h6 style={{ color: "9999FF" }}>{reviews[index].job.toUpperCase()}.</h6>
      </div>
      <div style={{ marginTop: 15, color: "#AF69EF" }}>
        <FaQuoteLeft />
      </div>
      <Desciption>
        <p>{reviews[index].text}</p>
      </Desciption>
      <div style={{ marginTop: 15, color: "#AF69EF" }}>
        <FaQuoteRight />
      </div>

      <ButtonWrap>
        <B1 onClick={leftShiftHandler}>
          <FiChevronLeft style={{ marginLeft: 16 }} />
        </B1>
        <B1 onClick={rightShiftHandler}>
          <FiChevronRight style={{ marginRight: 16 }} />
        </B1>
      </ButtonWrap>
      <div style={{ marginTop: 20 }}>
        <Surprise onClick={surpriseHandler}>Surprise Me</Surprise>
      </div>
    </div>
  );
}
