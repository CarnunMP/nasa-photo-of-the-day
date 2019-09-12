import React from "react";
import nasaLogo from "../../images/nasa-logo.png";
import styled from "styled-components";

const StyledLogo = styled.div`
    height: 100%;
    padding-right: 1rem;

    img {
        height: 100%;
    }
`;

function Logo() {
    return (
        <StyledLogo>
            <img src={nasaLogo} alt=""/>
        </StyledLogo>
    )
}

export default Logo;