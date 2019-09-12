import React from "react";
import { directive } from "@babel/types";

function Description(props) {
    const {description} = props;

    return (
        <div className="description">
            <p>{description}</p>
        </div>
    )
}

export default Description;