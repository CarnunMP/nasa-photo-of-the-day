import React from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
    background: #070707;
    color: white;
    height: 90%;
    width: 40%;
    overflow: hidden;
    padding: 1rem;
`;

function Description(props) {
    const {description} = props;

    return (
        <StyledDescription>
            <p>{description}</p>
        </StyledDescription>
    )
}

export default Description;