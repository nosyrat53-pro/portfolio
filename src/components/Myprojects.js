import React, {useEffect} from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import youtubePhoto from '../assets/youtubeclone.png';
import viewIcon from '../assets/viewicon.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyProjects = (props) => {

    useEffect(() => { 
        Aos.init({
            duration: 500,
            // easing: 'ease-in-sine',
            // delay: 100,
        });
    },[]);


    return <Section>

        <Container>
        <Title data-aos="zoom-in">My Projects</Title>
        <Content>
        
        <Tilt className="Tilt" options={{ max : 35 }} >
        <ProjectName>
            <ProjectNameContent>
                <ProjectTitle>Youtube clone</ProjectTitle>
                <ViewButton>
                    View 
                    <img src={viewIcon} />
                </ViewButton>
            </ProjectNameContent>
        </ProjectName>
            <Project className="Tilt-inner"> 
                <img src={youtubePhoto}/>
            </Project>
        </Tilt>
        

        <Tilt className="Tilt" options={{ max : 35 }}  >
        <ProjectName>
            <ProjectNameContent>
                <ProjectTitle>Youtube clone</ProjectTitle>
                <ViewButton>
                    View 
                    <img src={viewIcon} />
                </ViewButton>
            </ProjectNameContent>
        </ProjectName>
            <Project className="Tilt-inner"> 
                <img src={youtubePhoto}/>
            </Project>
        </Tilt>

        <Tilt className="Tilt" options={{ max : 35 }}  >
        <ProjectName>
            <ProjectNameContent>
                <ProjectTitle>Youtube clone</ProjectTitle>
                <ViewButton>
                    View 
                    <img src={viewIcon} />
                </ViewButton>
            </ProjectNameContent>
        </ProjectName>
            <Project className="Tilt-inner"> 
                <img src={youtubePhoto}/>
            </Project>
        </Tilt>

        
        <Tilt className="Tilt" options={{ max : 35 }}  >
        <ProjectName>
            <ProjectNameContent>
                <ProjectTitle>Youtube clone</ProjectTitle>
                <ViewButton>
                    View 
                    <img src={viewIcon} />
                </ViewButton>
            </ProjectNameContent>
        </ProjectName>
            <Project className="Tilt-inner"> 
                <img src={youtubePhoto}/>
            </Project>
        </Tilt>
        </Content>


        </Container>

    </Section>
};

const Section = styled.section`
      width: 100%;
    /* background-color: rgba(0 0 0 / 40%); */
    position: relative;
    /* margin-top: 100px; */
    backdrop-filter: blur(8px);
    -webkit-box-shadow: 0px 0px 14px 10px #5bccf655; 
    box-shadow: 0px 0px 14px 10px #5bccf655;
    padding-bottom: 30px;
    padding-top: 25px;
    overflow-x: hidden;
`;

const ProjectName = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(10,10,10,.3);
    padding: 20px;
    backdrop-filter: blur(1px);
    border-radius: 10px;
    color: black;
    /* z-index: 1; */
    opacity: 0;
    transition: all 175ms linear;

    @media (max-width: 768px){
        padding: 12px;
    }
`;

const ProjectNameContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0px solid #5bccf6cc;
    border-radius: 10px;
    transition: all 200ms linear;
    backdrop-filter: blur(0px);
`;

const ProjectTitle = styled.h1`
    color: white;
    transition: all 175ms linear;
    transform: scale(0) translateY(50px);

    @media (max-width: 768px){
        font-size: .92em;
    }
`;

const ViewButton = styled.a`
    display: flex;
    background: wheat;
    padding: 5px 16px;
    border-radius: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: all 175ms linear;
    transform: scale(0) translateY(50px);

    @media (max-width: 768px){
        padding: 4px 12px;
        font-size: .85em ;
    }
    img{
        width: 20px;
        margin-left: 5px;

        @media (max-width: 768px){
            margin-left: 3px ;
            width: 15px;
        }
    }

    &:hover{
        background-color: #fcde67;
    }
`;

const Container = styled.div`
    color: white;
    width: 80%;
    margin: 0 auto;
    /* color: rgba(249,249,249,.8);
    backdrop-filter: blur(4px); */

    .Tilt{
        width: 45%;
        height: 250px;
        border: 2px dotted #5bccf6;
        border-radius: 10px;
        margin-bottom: 50px;
        position: relative;
        box-shadow: 0px 0px 10px 1px #5bccf666;
        -webkit-box-shadow: 0px 0px 10px 1px #5bccf666;
        -moz-box-shadow: 0px 0px 10px 1px #5bccf666;
        transition: all 175ms linear;
        &:hover{
            box-shadow: 0px 0px 15px 1px #5bccf6aa;
            -webkit-box-shadow: 0px 0px 15px 1px #5bccf6aa;
            -moz-box-shadow: 0px 0px 15px 1px #5bccf6aa;
            border: 2px solid #5bccf6;
            ${ProjectName} {
                opacity: 1;
            }
            ${ProjectNameContent} {
                border: 6px solid #5bccf6bb;
                backdrop-filter: blur(3px);

                @media (max-width: 768px){
                    border: 4px solid #5bccf6bb;
                }
            }
            ${ProjectTitle} {
                transform: scale(1) translateY(0px);
            }
            ${ViewButton}{
                transform: scale(1) translateY(0px);
            }
        }


        @media (max-width: 768px){
            width: 85%;
            height: 230px;
        }

        @media (max-width: 500px){
            width: 100%;
            height: 230px;
        }
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 45px;
    margin-bottom: 35px;
    ::first-letter {
        color: #fcde67;
    }

    @media (max-width: 768px){
        font-size: 25px;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
        @media (max-width: 768px){
            justify-content: center;
        }
`;

const Project = styled.div`
    width: 100%;
    height: 100%;
    /* border: 1px solid white;  */
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;



export default MyProjects;