import styled from "styled-components";
import { useEffect , useState } from 'react';

const ScrollDown = (props) => {
    const [hide,setHide] = useState(false);

    useEffect( () => {
        document.addEventListener('scroll', ()=>{
            if(window.scrollY > 200){
                setHide(true);
            }else {
                setHide(false);
            }
        });
    },[]);

    return <Container hide={hide} id="aboutme">
            <FirstArrow />
            <SecondArrow />
            <ThirdArrow />
    </Container>

}

const Container = styled.div`

    visibility: ${props => props.hide ? "hidden" : "visible" };
    position: absolute;
    top: 87%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -11;
`;

const FirstArrow = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;

    @keyframes animate
{
    0%
  {
        opacity: 0;
        transform: rotate(45deg) translate(-20px,-20px);
    }
    50%
  {
        opacity: 1;
    }
    100%
  {
        opacity: 0;
        transform: rotate(45deg) translate(20px,20px);
    }
}
`;

const SecondArrow = styled(FirstArrow)`
    animation-delay: -0.2s;
`;

const ThirdArrow = styled(FirstArrow)`
     animation-delay: -0.4s;
`;

export default ScrollDown;