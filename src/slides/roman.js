import React from "react";
import styled from "styled-components";
import romanSnippet from "../images/romanSnippet.png";
import ClickToScroll from "../components/clickToScrollDown";
import ClickToScrollUp from "../components/clickToScrollUp";
import { UseScroll } from "../components/UseScroll";
import { scrollReveal } from "../animations";
import { motion } from "framer-motion";

export default function roman() {
  const [element, controls] = UseScroll();
  const handleRoman = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      romanNumeralConverter();
    }
  };
  const romanNumeralConverter = () => {
    const arabicString = document.getElementById("romanInput").value;
    const arabicNumber = parseInt(arabicString, 10);
    const resultContainer = document.querySelector(".romanResult");
    let numToConvert = arabicNumber;
    if (numToConvert <= 0 || numToConvert > 3000 || typeof numToConvert !== 'number') {
      return resultContainer.innerHTML =  'Please provide number between 1 and 3000!';
    }

    if (numToConvert % 1 !== 0) {
      return resultContainer.innerHTML =  'Please provide integer between 1 and 3000!';
    }

    let romanNumber = '';
    const rate = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I',
    };

    const keys = Object.keys(rate).reverse();
    const values = Object.values(rate).reverse();
    let i = 0;

    while (numToConvert > 0) {
      if (keys[i] <= numToConvert) {
        numToConvert -= keys[i];
        romanNumber += values[i];
      } else {
        i += 1;
      }
    }
    resultContainer.innerHTML = `Your result is: ${romanNumber}`;
  };
  return (
    <PageContainer variants={scrollReveal} ref={element} animate={controls}>
      <ClickToScrollUp page={2} ref={element} animate={controls} />
      <ClickToScroll page={4} ref={element} animate={controls} />
      <h1>Kata 3: Roman Numbers</h1>
      <Holder>
        <div className="snippet">
          <img src={romanSnippet}/>
        </div>
        <div className="result">
          <form className="form">
            <p>Try it out:</p>
            <input type="text" name="converterCtoF" id="romanInput" onKeyDown = {handleRoman}/>
            <input type="button" value="Submit" id = "romanSubmit" onClick  = {romanNumeralConverter}/>
          </form>
          <div className="romanResult">
          </div>
        </div>               
      </Holder>
    </PageContainer>
  );
}

const PageContainer = styled(motion.div)`
  position: relative;
  background-color: black;
  height: 100vh;
  width: 100vw;
  h1{
    padding-top: 1rem;
    font-size: 7vw;
    text-align: center;
    margin: 0;
  }
  img{
    height: 80vh;
    width: 100%;
  }
`;

const Holder = styled.div`
  font-size: 2vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .result{
    height: 25rem;
    max-width: 20rem;
    overflow: scroll;
    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 2.5rem;
      #romanSubmit{
        width: 5rem;
        background-color: black;
        margin: 1rem 0 0.5rem 0;
        border-radius: 0.2rem;
        border-color: white;
        border-style: solid;
        color: white;
        font-size: 1.1rem;
      }
      #romanSubmit:hover{
        background-color: white;
        border-color: gray;
        cursor: pointer;
        color: black;
      }
      #romanInput {
        text-align: center;
        width: 12rem;
        font-size: 1.2rem;
      }
    }
    .romanResult{
      margin: 1rem 0;
      text-align: center;
      overflow-wrap: break-word;
    }
  }
`;