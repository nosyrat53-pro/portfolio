import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Myphoto from '../assets/My_IMG.jpg';

const AboutMe = (props) => {
    useEffect(() => { 
        Aos.init({
            duration: 500,
            // easing: 'ease-in-sine',
            // delay: 100,
        });
    },[]);
    return <Section >
                <Container>
                        <Content>
                            <MyPhoto src={Myphoto} data-aos="fade-right">
                                <DropBG></DropBG>
                            </MyPhoto>
                            <About >
                                <Title data-aos="fade-left">
                                    About Me
                                </Title>
                                <Infos data-aos="fade-left">
                                I'm Mohammed Al-Nosyrat front-end developer have 2 years experience with front-end development.
                                I can work from scratch and update existing systems.
                                </Infos>
                                <MyAdvantage data-aos="fade-left">
                                    <AdvTitle data-aos="fade-left">
                                        My Advantages 👇
                                    </AdvTitle>

                                    <OrderedList start="1" data-aos="fade-left">
                                        <ListItem>Quiet.</ListItem>
                                        <ListItem>Communication skills.</ListItem>
                                        <ListItem>Problem solving.</ListItem>
                                        <ListItem>Fast learner.</ListItem>
                                    </OrderedList>
                                </MyAdvantage>

                                <MyHighSkills data-aos="fade-left">
                                    <HSTitle data-aos="fade-left">
                                        My High Skills 👇
                                    </HSTitle>

                                    <OrderedList start="1" data-aos="fade-left">
                                        <ListItem>HTML</ListItem>
                                        <ListItem>CSS</ListItem>
                                        <ListItem>Javascript</ListItem>
                                        <ListItem>React.js</ListItem>
                                    </OrderedList>
                                </MyHighSkills>
                            </About>

                        
                        </Content>
                        <PersonalDetails >
                            <PerTitle data-aos="fade-left">
                                Personal Inforamtions 👇
                            </PerTitle>
                            <Informations>

                                <LeftInfo data-aos="fade-left">
                                <InfoItem >
                                    <InfoTitle>
                                        - Name :
                                        <InfoContent> Muhammed Al-Nosyrat</InfoContent>
                                    </InfoTitle>
                                </InfoItem>

                                <InfoItem>
                                    <InfoTitle>
                                        - Age :
                                        <InfoContent> 23 years old</InfoContent>
                                    </InfoTitle>
                                </InfoItem>

                                <InfoItem>
                                    <InfoTitle>
                                        - Adress :
                                        <InfoContent> Syria/Damascus</InfoContent>
                                    </InfoTitle>
                                </InfoItem>
                                </LeftInfo>

                                <RightInfo data-aos="fade-left">
                                <InfoItem>
                                    <InfoTitle>
                                        - Phone : 
                                        <InfoContent> (+963)968271525</InfoContent>
                                    </InfoTitle>
                                </InfoItem>

                   

                                <InfoItem id="myskills">
                                    <InfoTitle>
                                        - Email :
                                        <InfoContent> alnsyrat582@gmail.com</InfoContent>
                                    </InfoTitle>
                                </InfoItem>

                                </RightInfo>

                            </Informations>
                        </PersonalDetails>
                </Container>
            </Section> ;
};

const Section = styled.section`
    width: 100%;
    /* background-color: rgba(0 0 0 / 40%); */
    position: relative;
    margin-top: 100px;
    backdrop-filter: blur(8px);
    -webkit-box-shadow: 0px 0px 14px 10px #5bccf655; 
    box-shadow: 0px 0px 14px 10px #5bccf655;
    padding-bottom: 30px;
    overflow-x: hidden;
    @media (max-width: 768px){
        margin-top: 0px;
    }
`;

const DropBG = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: rgba(0,0,0,0.55); */
  /* backdrop-filter: hue-rotate(180deg); */
  /* backdrop-filter: grayscale(); */
  border-radius: 30px;
`;

const Container = styled.div`
    color: white;
    width: 80%;
    margin: 0 auto;
    /* color: rgba(249,249,249,.8);
    backdrop-filter: blur(4px); */
`;

const Content = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px){
        flex-direction: column ;
    }
`;

const MyPhoto = styled.div`
    width: 100%;
    /* height: 300px; */
    margin-right: 15px;
    margin-top: 20px;
    border-radius: 30px;
    position: relative;
    /* border: 5px solid white; */
    background: linear-gradient(0deg, rgba(91,204,246,1) 0%, rgba(0,52,255,1) 31%, rgba(91,204,246,1) 64%, rgba(0,153,255,1) 100%);
    background-image: ${props => `url(${props.src})`};
    background-size: 150%;
    background-position: top center;
    background-repeat: no-repeat;
    @media (max-width: 768px){
    /* margin-right: 10px !important; */
        width: 100%;
        height: 300px;
        /* padding-left: 20px; */
        border-radius: 20px;
    }
`;

const About = styled.div`
    @media (max-width: 768px){
        width: 100%;
        margin-left: 20px;
    }
`;  

const Title = styled.h1`
    font-size: 45px;
    color: #eee;
    font-weight: 200;
    ::first-letter {
        color: #fcde67;
    }
    @media (max-width: 768px){
        font-size: 28px;
    }

`;

const Infos = styled.p`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0%;
        width: 60%;
        border-bottom: 5px dashed #fcde67;
        @media (max-width: 768px){
            border-bottom: 2px dashed #fcde67;
        }
    }
    @media (max-width: 768px){
        font-size: 16px;
    }
`;

const MyAdvantage = styled.div`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0%;
        width: 60%;
        border-bottom: 5px dashed #fcde67;
        @media (max-width: 768px){
            border-bottom: 2px dashed #fcde67;
        }
    }
`;

const AdvTitle = styled.h1`
    margin: 20px 0px ;
    margin-bottom: 7px;
    color: #eee;
    font-size: 30px;
    letter-spacing: 1.1px;
    font-weight: 200;
    ::first-letter {
        color: #fcde67;
    }
    @media (max-width: 768px){
        font-size: 28px;
    }
`;

const OrderedList = styled.ol`
    margin-left: 25px;
    /* border-bottom: 1px solid white;
   border-top: 1px solid white; */
    /* width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    @media (max-width: 768px){
        font-size: 16px;
    }
`;

const ListItem = styled.li`
    @media (max-width: 768px){
        font-size: 16px;
    }
`;

const MyHighSkills = styled(MyAdvantage)`
        &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0%;
        width: 0%;
    }
`;

const HSTitle = styled(AdvTitle)``;

const PersonalDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    @media (max-width: 768px){
        margin-left: 20px;
    }
`;

const PerTitle = styled(AdvTitle)`
    font-size: 35px;
    margin-bottom: 20px;

    @media(max-width: 768px){
        font-size: 28px;
        align-self: flex-start;
        margin-left: 20px;
    }
`;

const Informations = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 768px){
        margin-left: 20px;
    }
`;

const InfoItem = styled.div`
/* width: 100%;
    margin-top: 8px;
    margin-bottom: 8px; */
    margin: 10px 0px;
    @media (max-width: 768px){
        margin: 7px 0px;
        width: 100%;
    }
`;

const LeftInfo = styled.div`
    @media (max-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

const RightInfo = styled.div`
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    width: 100%;
}

`;

const InfoTitle = styled.p`
    color: #eeeeeebb;
    @media (max-width: 768px){
        font-size: 16px;
    }
`;

const InfoContent = styled.span`
    display: inline-block;
    color: #eee;
    font-weight: 100;
    padding-left: 10px;

    @media (max-width: 768px){
        font-size: 16px;
    }
`;

export default AboutMe ;