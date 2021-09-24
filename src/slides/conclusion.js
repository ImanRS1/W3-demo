import React from "react";
import styled from "styled-components";
import mobPic from "../images/mobSters.png";
import ClickToScrollUp from "../components/clickToScrollUp";
import { UseScroll } from "../components/UseScroll";
import { scrollReveal } from "../animations";
import { motion } from "framer-motion";

export default function conclusion() {
    const [element, controls] = UseScroll();
    return (
    <PageContainer variants={scrollReveal} ref={element} animate={controls}>
        <ClickToScrollUp page={4} ref={element} animate={controls} />
        <img src={mobPic}/>
        <div className="logo">
            <h1>Thank you!</h1>
        </div>
    </PageContainer>
    );
}

const PageContainer = styled(motion.div)`
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
        h1{
            font-size: 12vw;
            margin: 5rem;
        }
    }
    img {
        height: 100vh;
        width: 100vw;
        z-index: 1;
        position: absolute;
    } 
`;