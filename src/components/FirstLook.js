import { motion } from "framer-motion";
import { React, useEffect, useState } from "react";
import  styled  from "styled-components";
import { useSelector } from "react-redux";
import FirstAnimatedArrow from './FirstAnimatedArrow';
import SecondAnimatedArrow from './SecondAnimatedArrow';
import Button from '@mui/material/Button';

const FirstLook = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [showFirstArrow, setShowFirstArrows] = useState(false); 
    const [showSecondFirstArrow, setShowSecondArrows] = useState(false); 
    const isLoading = useSelector(state => state.animation.loading); 

    //delay animation
    useEffect(() => {
        setTimeout(() => {
            setShowFirstArrows(true);
        }, 4500);

        setTimeout(() => {
            setShowSecondArrows(true);
        }, 5000);

    },[]);


    return(
        <Section>
    <MainContainer>
    {/* <motion.div
    animate={{ x: !isLoading ? '-150vw' : '0vw' ,}}
        
> */}
    <Container>
        <FirstArrowContainer>
        <motion.div
        animate={{x: !showFirstArrow ? '30vw' : '0', y: !showFirstArrow ? '-30vh' : '0',}}
        >
        <FirstAnimatedArrow />
      
        </motion.div>
        </FirstArrowContainer>

        <SecondArrowContainer>
        <motion.div
        animate={{x: !showSecondFirstArrow ? '-30vw' : '0', y: !showSecondFirstArrow ? '-30vh' : '0'}}
        >

        <SecondAnimatedArrow />
        </motion.div>
        </SecondArrowContainer>
      
            <Paragraph nmt tas>
                Hi there, I'm Mohammed <ShackingHand>👋</ShackingHand>	
            </Paragraph>

            <HeadLine>
                Junior React.js Developer
            </HeadLine>

            <Paragraph mb>
                I help people and brands reach their goals by building user interfaces and converting designs to interactive layouts and more...
            </Paragraph>

            <ButtonsContainer>

            <InternalLink href="#aboutme">
                    <Button variant="outlined" sx={{
                        borderColor: '#cca132',
                        color: 'white',
                        '&:hover': {
                            borderColor: '#fcde67',
                            backgroundColor: '#fcde67',
                            color: 'rgba(0 0 0 / 90%)',
                        }
                    }}>More About Me</Button>
                    {/* <MoreButton >More About Me</MoreButton> */}
                </InternalLink>

                <InternalLink href="#myprojects" >
                    <Button variant="contained" sx={{
                        backgroundColor: '#cca132',
                        color: 'rgba(0 0 0 / 90%)',
                        border: '1px solid #cca132',
                        padding: '5px 20px',
                        '&:hover': {
                            backgroundColor: '#fcde67',
                            border: '1px solid #fcde67',
                        }
                    }}>View My Work</Button>
                    {/* <WorkButton >View My Work</WorkButton> */}
                </InternalLink>

                
      

            </ButtonsContainer>


            </Container>
            {/* </motion.div> */}
            </MainContainer>
            </Section>
    
)};

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    /* overflow-x: hidden !important; */
    
`;

const MainContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%,-50%);
    /* display: none; */
    /* overflow-x: hidden; */
    @media (max-width: 500px){
        top:50%;
    }

    @media (max-width: 630px){
        right: 48%;
    }

    @media (max-width: 580px){
        right: 45%;
    }

    @media (max-width: 500px){
        
    }

    
    @media (max-width: 430px){
        
    }

    @media (max-width: 380px){
        
    }

    @media (max-width: 355px){
        
    }

`;

const Container = styled.div`
    position: relative;
    color: white;
    border: 2px solid #0099ff; // #00b14e
    background: rgba(0 0 0 / 75%);
    backdrop-filter: blur(5px);
    width: 500px;
    padding: 20px;
    padding-left: 25px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    animation: neon 3s forwards infinite ;
    
    @media (max-width: 678px){
        border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 250px;
    border-bottom-left-radius: 250px;
    }

    @media (max-width: 550px){
        width: 400px;
        border-bottom-right-radius: 150px;
        border-bottom-left-radius: 150px;
    }

    @media (max-width: 580px){
        width: 450px;
    }

    @media (max-width: 500px){
        width: 380px;
        padding: 25px 15px;
    }

    
    @media (max-width: 430px){
        /* margin-left: 70px; */
        width: 320px;
    }

    @media (max-width: 380px){
        width: 280px;
    }

    @media (max-width: 355px){
        width: 250px;
    }
    @keyframes neon {
        0%{
            box-shadow: 0px 0px 3px 3px #5bccf6aa;
        }
        50%{
            box-shadow: 0px 0px 6px 6px #0099ffaa;
        }
        100%{
            box-shadow: 0px 0px 3px 3px #5bccf6aa;
        }
    }
`;

const Paragraph = styled.p`
    color: #ddddddcc;
    letter-spacing: .6px;
    line-height: 1.7;
    text-align: center;
    font-size: 18px;
    margin-bottom: ${props => props.mb ? '20px' : '0px'};
    margin-top: ${props => props.nmt ? '-10px' : '0px'};

    @media (max-width: 500px){
        /* margin-bottom: 0px;
        margin-top: 0px; */
        font-size: 15px;
        text-align: center;
        /* text-align: ${props => props.tas ? "center" : 'left'}; */
    }
`;

const ShackingHand = styled.span`
    display: inline-block;
    font-size: 35px;
    transform: rotate(-20deg);
    animation: shocking .5s linear infinite;
    @media (max-width: 500px){
        font-size: 15px;
    }
    @keyframes shocking {
        0%{
            transform: rotate(-10deg);
        }
        20%{
            transform: rotate(0deg);
        }
        40%{
            transform: rotate(10deg);
        }
        80%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(-10deg);
        }
    }
`;

const HeadLine = styled.h2`
    color: rgba(230,230,230,.95);
    letter-spacing: 1.5px;
    background-color: #0099ff;
    color: black;
    text-align: center;
    border-radius: 5px;
    user-select: none;
    margin-bottom: 10px;
    margin-top: 5px;

    @media (max-width: 500px){
        font-size: 1.25em;
        height: auto;
        padding: 6px 0px;
        margin-top: 10px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 7px;
    margin-bottom: 12px;
    @media (max-width: 768px){
        flex-direction: column;
        margin-top: 5px;
        justify-content: space-between;
        height: 95px;
    }
`;

const WorkButton = styled.a`
    padding: 5px 10px;
    background: #fcde67;
    border: none;
    border: 1px solid #fcde67;
    border-radius: 20px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    overflow: hidden;
    position: relative;
    transition: all .1s ease-in-out;
    color: #030e12;
    text-decoration: none;
    @media (max-width: 500px){
        font-size: 14px;
        font-weight: 600 ;
        margin-bottom: 8px;
    }
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: white;
        transition: width 175ms ease-in-out;
    }
    &:hover{
        background: #fcde67;
        -webkit-box-shadow: inset 0px 0px 4px 1px rgba(0,0,0,0.81); 
        box-shadow: inset 0px 0px 4px 1px rgba(0,0,0,0.81);
        transform: translate(0px,-1px);
    
    }
`;

const MoreButton = styled(WorkButton)`
    background: transparent;
    color: white;
    &:hover{
        color: black;
        background: #fcde67;
    }
`;

const FirstArrowContainer = styled.div`
        display: none; 

@media (max-width: 550px){
        display: none;  
    }
`;

const SecondArrowContainer = styled.div`

display: none; 
@media (max-width: 550px){
        display: none;  
    }
`;

const InternalLink = styled.a`
    text-decoration: none;

        @media (max-width: 768px){
        /* font-size: 14px;
        font-weight: 600 ; */
        /* width: 90%; */
        margin-bottom: 18px;
    }
`;

export default FirstLook;
