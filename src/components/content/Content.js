import React from "react";
import Picture from "./Picture";
import Description from "./Description";

function Content(props) {
    const {pictureURL, description} = props;

    return (
        <div className="content">
            <Picture pictureURL={pictureURL}/>
            <Description description={description}/>
        </div>
    )
}

export default Content;