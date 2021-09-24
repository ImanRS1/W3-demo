import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  fadeInAndStay1,
} from "../animations";

export default function clickToScroll(current) {
  const scrollDown = () => {
    let innerHeight = window.innerHeight;
    console.log(innerHeight * current.page);
    window.scrollTo({
      top: innerHeight * current.page,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      onClick={scrollDown}
      variants={fadeInAndStay1}
    >
      <ChevronContainer
      >
        <ChevronHolder>
          <FontAwesomeIcon icon={faChevronDown} />
        </ChevronHolder>
      </ChevronContainer>
    </ScrollButton>
  );
}

const ChevronHolder = styled(motion.div)`
  margin: 0;
  padding: 0rem 0rem;
  font-size: 1.7rem;
`;

const ChevronContainer = styled(motion.div)``;

const ScrollButton = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  // border: 0.2rem solid white;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
  //background-color: #1b1b1b;
  top: 3.5rem;
  right: 1rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    // border: 0.2rem solid gray;
    color: gray;
  }
`;