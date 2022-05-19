import styled from 'styled-components';
import waveBg from '../assets/wave.svg';
import menuIcon from '../assets/menu.svg';
import blueMenuIcon from '../assets/bluemenu.svg';
import { useEffect , useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { open, hideLoading } from '../features/animation/animationSlice';
import { motion } from 'framer-motion';

const NavBar = (props) => {
    const [changeStyle , setChangeStyle] = useState(false);
    const isOpen = useSelector(state => state.animation.sidebaropened); 
    const isLoading = useSelector(state => state.animation.loading) ;
    const dispatch = useDispatch();

    const handleChangeStyle = (change) => {
        setChangeStyle(change);
    };

    useEffect(() => {

    //   window.addEventListener('scroll' , ()=>{
    //       if(window.scrollY >= 100){
    //           if(!changeStyle){
    //               setChangeStyle(true);
    //           }  
             
    //       }
    //       if(window.scrollY < 100) {
    //           if(changeStyle){
    //               setChangeStyle(false);
    //           }
    //       }
    //   });
    
      return () => {
        //window.removeEventListener('scroll',handleChangeStyle(false));
      };
    }, []);
    
    return <MainContainer> 

        <motion.div
        animate={{y: !isLoading ? 200 : 0}}
        >
    <Container change={changeStyle}>

        <WaveImage change={changeStyle} src={waveBg} />
    
        <MenuIcon onClick={() => dispatch(open())}>
            <img src={ changeStyle ? blueMenuIcon : menuIcon} />
        </MenuIcon>

        <Logo changeColor={changeStyle}>Mohammed AL-Nosyrat</Logo>
    </Container>
    </motion.div>
    </MainContainer>;
}

const MainContainer = styled.div`
    transform: translateY(-200px);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
`;

const Logo = styled.a`
    font-size: 24px;
    color: black;
    letter-spacing: 1px;
    color: ${props => props.changeColor ? 'white' : 'black'};

    @media (max-width: 768px){
        font-size: 20px;
    }

    @media (max-width: 570px){
        font-size: 18px;
    }

    @media (max-width: 370px){
        font-size: 16px;
    }
`;

const Container = styled.div`
    width: 100vw;
    padding: 15px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    position: fixed;
    transition: .15s ease-in;
    background-color: ${props => props.change ? 'rgba(0 0 0 / 60%)' : 'transparent'};
    backdrop-filter: ${props => props.change ? 'blur(5px)' : 'blur(0px)'};
    border-bottom: ${props => props.change ? '2px solid #0099ff' : 'none'};
    box-shadow: ${ props => props.change ? '1px 4px 23px -8px #00aaff66' : 'none'};
    -webkit-box-shadow: ${props => props.change ? '1px 4px 23px -8px #00aaff66' : 'none'};
    -moz-box-shadow: ${props => props.change ? '1px 4px 23px -8px #00aaff66' : 'none'};
    /* overflow-x: hidden; */
    @media (max-width: 1042px){
        padding: 20px 30px;
    }
    @media (max-width: 768px){
        padding: 15px 30px;
    }

    @media (max-width: 500px){
        padding: 10px 20px;
    }
    @media (max-width: 370px){
        padding: 8px 20px;
    }
`;

const WaveImage = styled.img`
       opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
        margin-top: -80px;
        animation: ${props => props.change ? 'fadeout .15s ease-in forwards' : 'fadein .15s ease-in forwards'};
        display: ${props => props.change ? 'none' : 'inline-block'};
        // preventing drag or slect behaviour
        user-drag: none;  
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;   

        @media (max-width: 1142px){
            margin-top: -50px;
            width: 105%;
        }

        @media (max-width: 1042px){
            margin-top: -30px;
            width: 105%;
        }

        @media (max-width: 768px){
            margin-top: -10px;
            width: 100%;
        }
        @media (max-width: 570px){
            width: 110%;

        }

        @media (max-width: 500px){
            width: 130%;
        }
        @media (max-width: 370px){
            width: 150%;
        }

        @keyframes fadeout {
            from{
                opacity: 1;
    
            }
            to{
                opacity: 0;

            }
        }

        @keyframes fadein {
            from{
                opacity: 0;

            }
            to{
                opacity: 1;
     
            }
        }
`;

const MenuIcon = styled.div`
    width: 30px;
    height: 30px;
    cursor:pointer;
    position: relative;
    img {
        position: initial;
        top: initial;
        margin-top: initial;
        width: 0%;
        height: 0%;
    }

    @media (max-width: 768px){
        margin-right: 7px;
    }

`;

export default NavBar ;