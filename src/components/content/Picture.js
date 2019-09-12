import React from "react";

function Picture(props) {
    const {pictureURL} = props;

    return (
        <div className="picture">
            <img src={pictureURL} alt=""/>
        </div>
    )
}

export default Picture;