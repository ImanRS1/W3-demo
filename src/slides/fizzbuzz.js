import React from "react";
import styled from "styled-components";
import fizzSnippet from "../images/fizzSnippet.png";
import ClickToScroll from "../components/clickToScrollDown";
import ClickToScrollUp from "../components/clickToScrollUp";
import { UseScroll } from "../components/UseScroll";

export default function fizzbuzz() {
    const [element, controls] = UseScroll();
    const fizz = () => {
        const arrLen = document.getElementById("fizzInput").value;
        const resultContainer = document.querySelector(".fizzResult");
        
        const popArr = arrLen => {
            const myArr = [];
            for (let i = 1; i <= arrLen; i++) {
              myArr.push(i);
            }
            return myArr;
          };

        const arr = popArr(arrLen);

        const resultArr = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 100) {
            resultArr.push('Please provide number below 100');
          }
      
          if (arr[i] < 0) {
            resultArr.push('Please provide positive number');
          }
      
          if (typeof arr[i] !== 'number') {
            resultArr.push('Please provide numbers');
          }
      
          if (typeof arr[i] === 'number' && arr[i] >= 0 && arr[i] <= 100) {
            switch (0) {
              case arr[i]:
                resultArr.push('Please provide positive number');
                break;
              case arr[i] % 15:
                resultArr.push('FizzBuzz');
                break;
              case arr[i] % 3:
                resultArr.push('Fizz');
                break;
              case arr[i] % 5:
                resultArr.push('Buzz');
                break;
              default:
                resultArr.push(arr[i]);
                break;
            }
          }
        }
        console.log(resultArr);
        console.log(arr);
        resultContainer.innerHTML = `Your result is: ${resultArr}`;
      };
    return (
        <PageContainer>
          <ClickToScrollUp page={1} ref={element} animate={controls} />
          <ClickToScroll page={3} ref={element} animate={controls} />
            <h1>Kata 2: FizzBuzz</h1>
            <Holder>
                <div className="snippet">
                    <img src={fizzSnippet}/>
                </div>
                <div className="result">
                <form className="form">
                    <p>Try it out:</p>
                        <input type="text" name="converterCtoF" id="fizzInput"/>
                        <input type="button" value="Submit" id = "fizzSubmit"
                            onClick = {fizz}/>
                    </form>
                    <div className="fizzResult">
                    </div>
                </div>               
            </Holder>
        </PageContainer>
    );
}

const PageContainer = styled.div`
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
    height: 15rem;
    max-width: 20rem;

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2.5rem;

        #fizzSubmit{
            width: 5rem;
            background-color: black;
            margin: 0.5rem 0;
            border-radius: 0.2rem;
            border-color: white;
            border-style: solid;
            color: white;
        }

        #fizzSubmit:hover{
            background-color: white;
            border-color: gray;
            cursor: pointer;
            color: black;
        }

        #fizzInput {
          text-align: center;
        }
    }
  

    .fizzResult{
        margin: 1rem 0;
        text-align: center;
    }
}
`;