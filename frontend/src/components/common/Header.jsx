import React from 'react';
import styled from 'styled-components';

// import Logo from '@/assets/images/logo.png'; 
//추후 로고 첨부 예정


const HeaderContainer = styled.header`
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    color: white; 
    font-weight: bold;
    font-size: 1.2em;
    
  

    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center;
`;

const Header = ({ title }) => {
    return (
        <HeaderContainer>
            {title}
        </HeaderContainer>
    );
};

export default Header;