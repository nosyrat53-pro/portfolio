import styled from 'styled-components';
import menuIcon from '../assets/menu.svg';
import projectsIcons from '../assets/projects.svg';
import aboutIcon from '../assets/about.svg';
import skillsIcon from '../assets/skills.png';
import resumeIcon from '../assets/resume.svg';
import contactIcon from '../assets/contact.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { toggle, close } from '../features/animation/animationSlice';
import {motion } from 'framer-motion';

const SideBar = (props) => {
    const isOpen = useSelector(state => state.animation.sidebaropened); 
    const isLoading = useSelector(state => state.animation.loading) ;
    const [changeStyle, setChangeStyle] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        // window.addEventListener('scroll' , () => {
        //     if(window.scrollY >= 100){
        //         if(!changeStyle){
        //             setChangeStyle(true);
        //         }  
               
        //     }
        //     if(window.scrollY < 100){
        //         if(changeStyle){
        //             setChangeStyle(false);
        //         }
        //     }
        // });
      
        return () => {
          //window.removeEventListener('scroll',handleChangeStyle(false));
        };
      }, []);

    return <Container open={isOpen} show={!isLoading}>

        <Content>
            <TopContent change={changeStyle} isMenu={true} onClick={() => dispatch(toggle())}>
                <MenuIcon src={menuIcon}  />
                {changeStyle && <OptionText>Menu</OptionText>}
            </TopContent>

            <MainContent change={changeStyle} >
                <Item firstItem={true} onClick={() => dispatch(close())} href="#myprojects">
                    <Icon src={projectsIcons}  />
                    <OptionText>My projects</OptionText>
                </Item>
                <Item onClick={() => dispatch(close())} href="#aboutme"> 
                    <Icon src={aboutIcon}  />
                    <OptionText>About me</OptionText>
                </Item>
                <Item  onClick={() => dispatch(close())} href="#myskills">
                    <Icon src={skillsIcon}  />
                    <OptionText>My skills</OptionText>
                </Item>
                <Item  onClick={() => dispatch(close())}>
                    <Icon src={resumeIcon}  />
                    <OptionText>Resume</OptionText>
                </Item>
                <Item lastItem={true}  onClick={() => dispatch(close())}>
                    <Icon src={contactIcon}  />
                    <OptionText>Contact me</OptionText>
                </Item>
            </MainContent>
        </Content>
     
    </Container>
;
};


const Container = styled.div`
    position: fixed;
    top: 0;
    /* right: ${props => props.open ? '0' : '-250px'}; */
    left: ${props => props.show ? '0px' : '-100px'};
    width: ${props => props.open ? '250px' : '50px'} ;
    height: 100%;
    overflow: hidden;
    transition: all .25s ease-in-out;
    z-index: 100;
`;

const Content = styled.div`
    width: 250px;
    height: 100%;
`;

const TopContent = styled.a`
    width: 100%;
    /* width: ${props =>  props.isMenu ? '50px' : '100%'}; */
    height: 66px;
    padding-left: 10px;
    background:  ${props => !props.change && props.isMenu ? 'transparent' : '#5bccf6'};
    border-bottom: ${props => props.change ? '2px solid #00aaff' : 'none'};
    border-right: ${props => props.change ? '2px solid #00aaff' : 'none'};

    border-bottom: ${props => props.isMenu && props.change ? '2px solid #00aaff' : 'none'};
    border-right: ${props => props.isMenu ? 'none' : 'none'};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: all .1s ease-in;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0 0 0 / 10%);
        transition: width .200s ease;
        z-index: -1;
    }
    &:hover  {
        /* &::before{
            width: 100%;
        } */
        transform: scale(1.02,1.02) translate(2.5px,0px);
    }

    &:hover{
       //background: ${props => props.isMenu && props.change ? '#0077ff' : 'transparent'};
    }
    @media (max-width: 768px){
        height:56px;
     
    }
`;

const MenuIcon = styled.img`
    width: 30px;
    height: 30px;
    transform: rotateZ(180deg);
    cursor:pointer;
    position: relative;
    margin-right: 10px;

    @media (max-width: 768px){
        margin-right: 12px;
    }
`;

const Icon = styled(MenuIcon)`
    transform: rotateZ(0deg);
`;

const OptionText = styled.a`
    margin-right: 10px;
    cursor: pointer;
    color: black;
    border-left: 1px solid black;
    padding-left: 10px;
    position: relative ;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: -10px;
        height: 0px;
        width: 0px;
        position: relative;
        border-top: solid 10px transparent;
        border-left: solid 2px black;
        border-bottom: solid 10px transparent;
    }   
    @media (max-width: 768px){
        font-size: .9em;
    }
`;

const MainContent = styled.div`
    width: 100%;
    height: 100%;
    //border-right: 2px solid #00aaff;
    /* box-shadow: -1px -2px 6px 1px #00aaff77 inset;
    -webkit-box-shadow: 2px 0px 6px 1px #00aaff77 inset;
    -moz-box-shadow: -1px -2px 6px 1px #00aaff77 inset; */
    //backdrop-filter: blur(4px);
    /* background-color: rgba(0 0 0 / 60%); */
    display: flex;
    flex-direction: column ;
    justify-content: center;
    margin-top: -40px;
    overflow: hidden;
`;

const Item = styled(TopContent)`
    /* margin-top: ${props => props.first ? '10px' : '0px'}; */
    border-top-right-radius: ${props => props.firstItem ? '7px' : '0px'};
    border-bottom-right-radius: ${props => props.lastItem ? '7px' : '0px'};
    transition: all .001s ease-in;
    &:hover{
        background: ${props => !props.isMenu ? '#0099ff' : '#0099ff'};
        transform: scale(1.02,1.02) translateX(1.5px);
    }

    border-bottom: 2px solid rgba(0 0 0 / 10%);
`;

export default SideBar;