import React from "react";
import Picture from "./Picture";
import Description from "./Description";
import styled from "styled-components";

const StyledContent = styled.div`
    height: 85%; /*No idea why, but 90% creates whitespace at the bottom of the page! */
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Content(props) {
    const {pictureURL, description} = props;

    return (
        <StyledContent>
            <Picture pictureURL={pictureURL}/>
            <Description description={description}/>
        </StyledContent>
    )
}

export default Content;