import React from 'react';
import styled from 'styled-components';
import Wave from '../assets/wave.svg';

const ContactMe = (props) => {
    return <Section>
        <img src={Wave} />
        </Section>;
};

const Section = styled.section`
    width: 100%;
    /* background-color: rgba(0 0 0 / 40%); */
    position: relative;
    /* backdrop-filter: blur(8px); */
    /* -webkit-box-shadow: 0px 0px 14px 10px #5bccf655; 
    box-shadow: 0px 0px 14px 10px #5bccf655; */
    padding-bottom: 0px;
    img{
        width: 100%;
        transform: rotate(180deg);
    }
`;

export default ContactMe;