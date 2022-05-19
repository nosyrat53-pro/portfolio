import React, {useEffect} from 'react';
import styled from 'styled-components';
import resumePdf from '../assets/resume.pdf';
import downArrow  from '../assets/downarrow.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import wave from '../assets/wave.svg';
import contactIcon from '../assets/contact.svg';
import googleIcon from '../assets/google.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import facebookIcon from '../assets/facebook.svg';

const MyResume = (props) => {

    useEffect(() => { 
        Aos.init({
            duration: 500,
            // easing: 'ease-in-sine',
            // delay: 100,
        });
    },[]);
    return <Section>
            <Container>
                <Content>
                    <Title data-aos="zoom-in">My resume is right over here 

                    </Title>
                        <DownArrow class="downArrow bounce">
                            <img src={downArrow} />
                        </DownArrow>
                        <DownLoadResumeButton href={resumePdf} download="resume.pdf">Download resume</DownLoadResumeButton>
                </Content>    
            </Container>
            <MainContactDiv>
                <LeftContactDiv></LeftContactDiv>
                <RightContactDiv></RightContactDiv>
                <ContactContent>
                    <ContactTitle>Contact Me</ContactTitle>
                    <Media>

                        <MediaIcon>
                            <img src={contactIcon} />
                        </MediaIcon>

                        <MediaIcon>
                            <img src={googleIcon} />
                        </MediaIcon>

                        <MediaIcon>
                            <img src={whatsappIcon} />
                        </MediaIcon>

                        <MediaIcon>
                            <img src={facebookIcon} />
                        </MediaIcon>

                    </Media>
                </ContactContent>
            </MainContactDiv>
    </Section>;
};

const MainContactDiv = styled.div`
    position: relative;
    /* background: #0099ff; */
    /* background: linear-gradient(0deg, rgba(91,204,246,1) 0%, rgba(0,153,255,1) 31%, rgba(91,204,246,1) 64%, rgba(0,153,255,1) 100%); */
    width: 100%;
    height: 170px;
    margin-top: 50px;
    overflow-x: hidden;
    overflow-y: hidden;
    background: linear-gradient(62deg, #0099ff, #5bccf6, #0099ff, #5bccf6);
    animation: animateLinear 10s ease infinite; 
      background-size: 400% 400%;
    @keyframes animateLinear {
        0% {
        background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @media (max-width: 768px){
        height: 100px;
    }
`;

const LeftContactDiv = styled.div`
    position: absolute;
    top: -50px;
    left: 100px;
    width: 100%;
    height: 400px;
    background: #5bccf6;
    /* background: linear-gradient(0deg, rgba(91,204,246,1) 0%, rgba(0,153,255,1) 31%, rgba(91,204,246,1) 64%, rgba(0,153,255,1) 100%); */
    /* transform-origin: left; */
    transform: rotate(30deg);

    background: linear-gradient(62deg, #0099ff, #5bccf6, #0099ff, #5bccf6);
    animation: animateLinear 10s ease infinite; 
      background-size: 400% 400%;
    @keyframes animateLinear {
        0% {
        background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

const RightContactDiv = styled.div`

position: absolute;
    top: -50px;
    right: 100px;
    width: 100%;
    height: 400px;
    /* background: #5bccf6; */
    /* background: linear-gradient(0deg, rgba(91,204,246,1) 0%, rgba(0,153,255,1) 31%, rgba(91,204,246,1) 64%, rgba(0,153,255,1) 100%); */
    /* transform-origin: left; */
    transform: rotate(-30deg);
    background: linear-gradient(62deg, #0099ff, #5bccf6, #0099ff, #5bccf6);
    animation: animateLinear 10s ease infinite; 
      background-size: 400% 400%;
    @keyframes animateLinear {
        0% {
        background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

const ContactContent = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        
    }
`;

const ContactTitle = styled.h1`
    text-align: center;
    font-size: 45px;
    margin-top: 25px;
    ::first-letter {
        color: #fcde67;
    }

    @media (max-width: 768px){
        font-size: 30px;
        margin-top: 10px;
    }
`;

const Media = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 768px){
        
    }
`;

const MediaIcon = styled.a`
    display: inline-block;
    /* width: 40px;
    height: 40px; */
    border: 1px solid rgba(255 255 255 / 55%);
    border-radius: 50%;
    padding: 15px;
    margin: 8px;
    cursor: pointer;
    transition: all 175ms ease;
    transform: rotate(180deg);
    :hover{
        background: #fcde67;
        border: 1px solid rgba(0 0 0 / 95%);
    }
    img{ 
        width: 25x;
        height: 25px;

        @media (max-width: 768px){
            width: 20x;
            height: 20px;
        }
      
    }

    @media (max-width: 768px){
        padding: 6px;
    }


`;

const Section = styled.section`
    width: 100%;
    /* background-color: rgba(0 0 0 / 40%); */
    position: relative;
    backdrop-filter: blur(8px);
    -webkit-box-shadow: 0px 0px 14px 10px #5bccf655; 
    box-shadow: 0px 0px 14px 10px #5bccf655;
    /* padding-bottom: 30px; */

    img {
        transform: rotate(180deg);
        margin-bottom: -7px;
    }
`;

const Container = styled.section`
    color: white;
    width: 80%;
    margin: 0 auto;
    /* color: rgba(249,249,249,.8);
    backdrop-filter: blur(4px); */
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 45px;
    margin-bottom: 35px;
    margin-top: 35px;
    ::first-letter {
        color: #fcde67;
    }

    @media (max-width: 768px){
        font-size: 30px;
    }
`;

const DownArrow = styled.div`
    /* font-size: 10px; */
    width: 80px;
    margin: 0 auto;
    /* margin-top: -20px; */
    margin-bottom: 30px;

    -moz-animation: bounce 3s infinite;
	-webkit-animation: bounce 3s infinite;
	animation: bounce 1.8s infinite;
    transform: rotate(180deg);

    @media (max-width: 768px){
        width: 40px;
    }
    @-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: rotate(180deg)  translateY(0);
  }
  40% {
    -moz-transform: rotate(180deg)  translateY(-30px);
    transform: rotate(180deg)  translateY(-30px);
  }
  60% {
    -moz-transform: rotate(180deg)  translateY(-15px);
    transform: rotate(180deg)  translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: rotate(180deg)  translateY(0);
    transform: rotate(180deg)  translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform:rotate(180deg)  translateY(-30px);
  }
  60% {
    -webkit-transform:rotate(180deg)  translateY(-15px);
    transform:rotate(180deg)  translateY(-15px);
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform:rotate(180deg)  translateY(0);
    -ms-transform:rotate(180deg)  translateY(0);
    -webkit-transform:rotate(180deg)  translateY(0);
    transform:rotate(180deg)  translateY(0);
  }
  40% {
    -moz-transform:rotate(180deg)  translateY(-30px);
    -ms-transform:rotate(180deg)  translateY(-30px);
    -webkit-transform:rotate(180deg)  translateY(-30px);
    transform:rotate(180deg)  translateY(-30px);
  }
  60% {
    -moz-transform:rotate(180deg)  translateY(-15px);
    -ms-transform:rotate(180deg)  translateY(-15px);
    -webkit-transform:rotate(180deg)  translateY(-15px);
    transform:rotate(180deg)  translateY(-15px);
  }
}
`;

const DownLoadResumeButton = styled.a`
    display: inline-block;
	position: relative;
	padding: 10px 25px;
  
	background-color: #0099ff;
	color: white;
  
	/* font-family: sans-serif; */
	text-decoration: none;
	font-size: 1em;
	text-align: center;
	text-indent: 15px;
    margin-bottom: 35px;

    @media (max-width: 768px){
        font-size: .9em;
    }
    &:hover{
        background-color: #333;
	color: white;
    }
    &::before,&::after{
        content: ' ';
	display: block;
	position: absolute;
	left: 15px;
	top: 52%;
    }

    &::before{
        width: 10px;
	height: 2px;
	border-style: solid;
	border-width: 0 2px 2px;
    }

    &::after{
        width: 0;
	height: 0;
	margin-left: 3px;
	margin-top: -7px;
  
	border-style: solid;
	border-width: 4px 4px 0 4px;
	border-color: transparent;
	border-top-color: inherit;
	
	animation: downloadArrow 2s linear infinite;
	animation-play-state: paused;
    }

    &:hover:before{
        border-color: #4CC713;
    }

    &:hover:after{
        border-top-color: #4CC713;
	animation-play-state: running;
    }

    /* keyframes for the download icon anim */
@keyframes downloadArrow {
	/* 0% and 0.001% keyframes used as a hackish way of having the button frozen on a nice looking frame by default */
	0% {
		margin-top: -7px;
		opacity: 1;
	}
	
	0.001% {
		margin-top: -15px;
		opacity: 0;
	}
	
	50% {
		opacity: 1;
	}
	
	100% {
		margin-top: 0;
		opacity: 0;
	}
}
`;

export default MyResume; 