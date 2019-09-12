import React from "react";
import styled from "styled-components";

const StyledPicture = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5%;

    img {
        height: 100%;
    }
`;

function Picture(props) {
    const {pictureURL} = props;

    return (
        <StyledPicture>
            <img src={pictureURL} alt=""/>
        </StyledPicture>
    )
}

export default Picture;