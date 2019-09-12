import React from "react";
import Logo from "./Logo";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    height: 10%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0 1rem 0;

    h1 {
        color: white;
    }
`;

function Header(props) {
    const {title} = props;

    return (
        <StyledHeader>
            <Logo/>
            <div>
                <h1>{title}</h1>
            </div>
        </StyledHeader>
    )
}

export default Header;