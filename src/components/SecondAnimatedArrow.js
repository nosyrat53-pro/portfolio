import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variantsArrow = {
    cool: {
        // translateY: -10,
        // rotateX: -20,
        rotateZ: -15,
        transition: {
            yoyo: Infinity,
   
        }
    }
}

const FirstAnimatedArrow = (props) => {


    return  <Container> 
        <motion.div
            variants={variantsArrow}
            // initial={{x:0,y:-10,scale:1}}
            // animate={{x: -10,y:-20,scale: 1.09}}
            // transition={{repeat: Infinity}}
            whileInView={'cool'}
        > 

            <Curve />
            <Point />

        </motion.div>    
    </Container>;
};

const Container = styled.div`
    position: absolute;
    top: -265px;
    left: -180px;
    width: 100px;
    transform: rotateZ(100deg) rotateX(190deg);

    @media (max-width: 550px){
        display: none;
    }
`;

const Curve = styled.div`
    border: 2px solid #fff;
	border-color: transparent transparent transparent #fff;
	height: 360px;
	width: 1200px;
	border-radius: 230px 0 0 150px;
`;

const Point = styled.div`
    position: absolute;
	left: 40px;
	top: 315px;
    &::before , &::after {
        border: 1px solid #fff;
        height: 25px;
        content: "";
        position: absolute;
    }

    &::before {
        top: -11px;
        left: -11px;
        transform:rotate(-74deg);
        -webkit-transform:rotate(-74deg);
        -moz-transform:rotate(-74deg);
        -ms-transform: rotate(-74deg);
    }

    &::after {
        top: -20px;
        left: 5px;
        transform:rotate(12deg);
        -webkit-transform: rotate(12deg);
        -moz-transform:rotate(12deg);
        -ms-transform: rotate(12deg);
    }
`;

export default FirstAnimatedArrow;