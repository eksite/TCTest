import React from 'react';
import Styled from 'styled-components';

const StyledHeader=Styled.header`
    display:flex;
    width:100%;
    height:74px;
    background-color: #121839;
`;

const StyledParagraph=Styled.p`
    width: 262px;
    height: 26px;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
    margin-left:108px;
    margin-top:32px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledParagraph>SPACE-X LAUNCHES 2020</StyledParagraph>
        </StyledHeader>

    );
};

export default Header;