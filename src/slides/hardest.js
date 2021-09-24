import React from "react";
import styled from "styled-components";
import hardest from "../images/hardest.png";
import mobing from "../images/mobing.png";
import ClickToScroll from "../components/clickToScrollDown";
import ClickToScrollUp from "../components/clickToScrollUp";
import { UseScroll } from "../components/UseScroll";

export default function hardAndFun() {
    const [element, controls] = UseScroll();
    return (
        <PageContainer>
            <ClickToScrollUp page={3} ref={element} animate={controls} />
            <ClickToScroll page={5} ref={element} animate={controls} />
            <div className="infoContainer">
                <div className="partInfo">
                    <h1>Hardest part</h1>
                    <p>Preparing this website!</p>
                    <img src={hardest}/>
                </div>
            
                <div className="partInfo">
                    <h1>Most satisfying part</h1>
                    <p><i>Mobing</i> during the katas.</p>
                    <img src={mobing}/>
                </div>
            </div>
            
        </PageContainer>
    );
}


const PageContainer = styled.div`
    position: relative;
    background-color: black;
    height: 100vh;
    width: 100vw;

    .infoContainer{
        display: flex;
        justify-content: space-evenly;
        .partInfo{
            width: 40vw;
            h1{
                margin-top: 2rem;
            }
            p{
                margin-top: 3rem;
                font-size: 2vw;
                text-align: center;
            }
        }

    }

    h1 {
        padding-top: 1rem;
        font-size: 5vw;
        text-align: center;
        margin: 0;
    }
    img {
        background-color: white;
    }
`;