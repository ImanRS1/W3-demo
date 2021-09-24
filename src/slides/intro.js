import React from "react";
import styled from "styled-components";
import mobPic from "../images/mobSters.png";
import ClickToScroll from "../components/clickToScrollDown";
import { UseScroll } from "../components/UseScroll";

export default function intro() {
    const [element, controls] = UseScroll();
        return (
        <PageContainer>
            <img src={mobPic}/>
            <div className="logo">
                <h1>mobSters</h1>
                <p>[Loukas, Igor, Iman, Mariana]</p>
            </div>
            <ClickToScroll page={1} ref={element} animate={controls} />

           
        </PageContainer>
    );
}

const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;

    .logo {
        right: 0;
        bottom: 0;
        position: absolute;
        color: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5rem;
        margin-right: 2rem;
        h1{
            font-size: 12vw;
            margin: 0;
        }
        p{
            font-size: 4vw;
            margin: 0;
        }
    }
    img {
        height: 100vh;
        width: 100vw;
        z-index: 1;
        position: absolute;
        object-fit: cover;
    } 
`;