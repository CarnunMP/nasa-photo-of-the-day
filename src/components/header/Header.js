import React from "react";
import Logo from "./Logo";

function Header(props) {
    const {title} = props;

    return (
        <header>
            <Logo/>
            <div className="title-div">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Header;