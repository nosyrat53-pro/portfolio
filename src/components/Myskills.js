import React, {useEffect} from 'react';
import styled from 'styled-components';
import htmlPhoto from '../assets/html.svg';
import cssPhoto from '../assets/css.svg';
import jsPhoto from '../assets/js.svg';
import bablePhoto from '../assets/babel.svg';
import reactPhoto from '../assets/react.svg';
import tsPhoto from '../assets/typescript.svg';
import reduxPhoto from '../assets/redux.svg';
import jqueryPhoto from '../assets/jquery.svg';
import gitPhoto from '../assets/git.svg';
import sassPhoto from '../assets/sass.svg';
import jestPhoto from '../assets/jest.svg';
import muiPhoto from '../assets/mui.svg';
import tailwindPhoto from '../assets/tailwind.svg';
import nextPhoto from '../assets/next.svg';
import npmPhoto from '../assets/npm.svg';
import styledPhoto from '../assets/styled.svg';
import d3Photo from '../assets/d3.svg';
import bootstrapPhoto from '../assets/bootstrap.svg';
import firebasePhoto from '../assets/firebase.svg';
import pwaPhoto  from '../assets/pwa.svg';
import lighthousePhoto from '../assets/lighthouse.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MySkills = (props) => {

    useEffect(() => { 
        Aos.init({
            duration: 500,
            // easing: 'ease-in-sine',
            // delay: 100,
        });
    },[]);

    return <Section>
            <Container>
            <MainTitle data-aos="zoom-in">My technical skills</MainTitle>
                <Skills>
                    <SkillsRow data-aos="zoom-out">


                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={htmlPhoto} />
                            <Title>HTML<span>&amp;</span>HTML5</Title>
                            </Skill>
                        </SkillContainer>
                        
                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={cssPhoto} />
                            <Title>CSS<span>&amp;</span>CSS3</Title>
                            </Skill>
                        </SkillContainer>

                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={jsPhoto} />
                            <Title>Javascript</Title>
                            </Skill>
                        </SkillContainer>

                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={bablePhoto} />
                            <Title>ECMAscript</Title>
                            </Skill>
                        </SkillContainer>

                    {/* </SkillsRow> */}

                    {/* <SkillsRow data-aos="zoom-in"> */}
                        
                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={reactPhoto} />
                            <Title>React.js</Title>
                            </Skill>
                        </SkillContainer>
                        
                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={tsPhoto} />
                            <Title>Typescript</Title>
                            </Skill>
                        </SkillContainer>
                        
                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={reduxPhoto} />
                            <Title>react redux</Title>
                            </Skill>
                        </SkillContainer>
                

                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={gitPhoto} />
                            <Title>git<span>&amp;</span>github</Title>
                            </Skill>
                        </SkillContainer>
               

                    {/* </SkillsRow> */}

                        {/* <SkillsRow data-aos="zoom-out"> */}
                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={sassPhoto} />
                            <Title>sass</Title>
                            </Skill>
                        </SkillContainer>
                     

                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={jestPhoto} />
                            <Title>Testing</Title>
                            </Skill>
                        </SkillContainer>
               

                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={muiPhoto} />
                            <Title>Material ui</Title>
                            </Skill>
                        </SkillContainer>
                   

                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={tailwindPhoto} />
                            <Title>Tailwind css</Title>
                            </Skill>
                        </SkillContainer>
            

                    {/* </SkillsRow> */}
{/*                     
                        <SkillsRow data-aos="zoom-in"> */}

                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={nextPhoto} />
                            <Title>Next.js</Title>
                            </Skill>
                        </SkillContainer>
                   

                        <SkillContainer>
                        <Skill data-aos="zoom-out">
                         <img src={npmPhoto} />
                         <Title>node.js packages</Title>
                        </Skill>
                        </SkillContainer>
               

                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={styledPhoto} />
                            <Title>styled components</Title>
                            </Skill>
                        </SkillContainer>
      

                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={bootstrapPhoto} />
                            <Title>react-bootstrap</Title>
                            </Skill>
                        </SkillContainer>
                  

                    {/* </SkillsRow> */}

                        {/* <SkillsRow data-aos="zoom-out"> */}

                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={d3Photo} />
                            <Title>D3 library</Title>
                            </Skill>
                        </SkillContainer>
                   

                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={firebasePhoto} />
                            <Title>firebase</Title>
                            </Skill>
                        </SkillContainer>
          

                        <SkillContainer>
                            <Skill data-aos="zoom-in">
                            <img src={pwaPhoto} />
                            <Title>Progressive Web Apps</Title>
                            </Skill>
                        </SkillContainer>
             

                        <SkillContainer>
                            <Skill data-aos="zoom-out">
                            <img src={lighthousePhoto} id="myprojects"/>
                            <Title>Lighthouse devtools extentions</Title>
                            </Skill>
                        </SkillContainer>
                      

                    </SkillsRow>
                </Skills>
            </Container>

    </Section>;
};

const SkillContainer = styled.div`
   margin: 25px;
   transition: all .185s ease;
    &:hover{
        transform: scale(1.25);
    }
`;

const Section = styled.section`
    width: 100%;
    /* background-color: rgba(0 0 0 / 40%); */
    position: relative;
    /* margin-top: 50px; */
    backdrop-filter: blur(8px);
    -webkit-box-shadow: 0px 0px 14px 10px #5bccf655; 
    box-shadow: 0px 0px 14px 10px #5bccf655;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #5bccf655;
    /* overflow-x: hidden; */
`;

const Container = styled.div`
    color: white;
    width: 80%;
    margin: 0 auto;
`;

const MainTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    font-size: 45px;
    ::first-letter {
        color: #fcde67;
    }

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const Skills = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SkillsRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 25px 0px;
    flex-wrap: wrap;
`;

const Title = styled.div`
    position: absolute;
    top:-3px;
    background-color: #544;
    color: #eee;
    padding: 2px;
    border-radius: 2px;
    font-size: 9px;
    display: none;
    white-space: nowrap;
`;

const Skill = styled.div`
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: all .3s ease;
    position: relative;
 
    /* @media (max-width: 768px){
        width: 45px;
        height: 45px;
    } */
    img{
        width: 100%;
        height: 100%;
    }
    span{
        color: #9302;
    }

    &:hover{
        /* width: 70px;
        height: 70px; */
        transform: scale(2);
        ${Title}{
            display: block;
        }
    }
`;



export default MySkills;