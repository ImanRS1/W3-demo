import React from "react";
import styled from "styled-components";
import calcSnippet from "../images/calcSnippet.png";
import ClickToScrollDown from "../components/clickToScrollDown";
import ClickToScrollUp from "../components/clickToScrollUp";
import { UseScroll } from "../components/UseScroll";
import { scrollReveal } from "../animations";
import { motion } from "framer-motion";
import evaluate from "../functions/calculator-func.js"

export default function calculator() {
  const [element, controls] = UseScroll();
  const handle = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      evaluate();
    }
  }
  const evaluate = () => {
    const input = document.getElementById("userInput").value;
    const whiteSpacePattern = /\s+/;
    const inputNoWhiteSpace = input.replace(whiteSpacePattern, '');
    const digitPattern = /(-\d+|\d+)/g;
    const operand = inputNoWhiteSpace.replace(digitPattern, '');
    const resultContainer = document.querySelector(".userResult");
  
    if (inputNoWhiteSpace.match(digitPattern) === null) {
      return resultContainer.innerHTML = "You can only calculate using digits.";
    }
  
    const digitOne = parseInt(inputNoWhiteSpace.match(digitPattern)[0], 10);
    const digitTwo = parseInt(inputNoWhiteSpace.match(digitPattern)[1], 10);
  
    let result;
    switch (operand) {
      case '+':
        result = digitOne + digitTwo;
        break;
      case '':
        if(digitTwo){
          result = digitOne + digitTwo;
        } else {
          result = digitOne;
        }
        break;
      case '-':
        result = digitOne - digitTwo;
        break;
      case '*':
        result = digitOne * digitTwo;
        break;
      case '/':
        if (digitTwo === 0) {
          result = 'Division by zero not allowed.';
        } else {
           result = digitOne / digitTwo;
        }
        break;
      default:
        result = 'Operation not allowed.';
    }
    resultContainer.innerHTML = `Your result is: ${result}`;
  };
    
  return (
    <PageContainer variants={scrollReveal} ref={element} animate={controls}>
      <h1>Kata 1: Calculator</h1>
      <Holder>
        <ClickToScrollDown page={2} ref={element} animate={controls} />
        <ClickToScrollUp page={-1} ref={element} animate={controls} />
        <div className="snippet">
          <img src={calcSnippet}/>
        </div>
        <div className="result">
          <form className="form">
            <p>Try it out:</p>
            <input type="text" name="converterCtoF" id="userInput" onKeyDown = {handle}/>
            <input type="button" value="Submit" id = "submit" onClick = {evaluate} />
          </form>
          <div className="userResult">
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
    width: 120%;
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
      #submit{
        width: 5rem;
        background-color: black;
        margin: 1rem 0 0.5rem 0;
        border-radius: 0.2rem;
        border-color: white;
        border-style: solid;
        color: white;
        font-size: 1.1rem;
      }
      #submit:hover{
        background-color: white;
        border-color: gray;
        cursor: pointer;
        color: black;
      }
      #userInput {
        text-align: center;
        width: 12rem;
        font-size: 1.2rem;
      }
    }
    .userResult{
      margin: 1rem 0;
      text-align: center;
      overflow-wrap: break-word;
    }
  }
`;