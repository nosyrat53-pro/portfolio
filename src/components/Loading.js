import { React, useEffect} from 'react';
import styled from 'styled-components';
import { useSelector , useDispatch } from 'react-redux';
import { hideLoading } from '../features/animation/animationSlice';

const Loading = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.animation.loading);
    useEffect(() => {
        setTimeout(() => {
            dispatch(hideLoading());
        },2500);
    },[]);

    return <Container show={isLoading} onClick={() => dispatch(hideLoading())}>
                <CircleBorder>
                    <CircleCore />
                </CircleBorder>
                <Em>Loading...</Em>
            </Container>;
};

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 101vw;
    height: 101vh;
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    z-index: 100000;
    background: black;
    overflow-x: hidden;
`;

const CircleBorder = styled.div`
    width: 250px;
    height: 250px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(0deg, rgb(0 0 0 / 0%) 31%, #062e83 49% , #4566ad 50%);
    animation: spin .9s linear infinite;
    @keyframes spin {
    0%{
        transform: rotate(0deg);
    }
   100%{
        transform: rotate(360deg);
    }
}

@media (max-width: 768px){
    width: 120px;
    height: 120px;
    padding: 4px;
}
`;

const CircleCore = styled.div`
    width: 100%;
    height: 100%;
    background:  black;
    border-radius: 50%;
`;

const Em = styled.em`
    position: absolute;
    font-size: 22px;
    color: #fff;
    font-size: 25px;
`;

export default Loading;