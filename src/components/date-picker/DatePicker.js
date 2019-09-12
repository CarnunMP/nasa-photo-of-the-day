import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    background: #070707;
    color: white;
    border: 1px solid white;
    border-radius: 2px;
    margin-top: 0.5%;
`;

function DatePicker() {
    console.log(todayString);
    return (
        <StyledInput type="date" defaultValue={todayString} min="1995-06-16" max={todayString}/>
    )
}

const today = new Date();
const todayString = `${today.getFullYear()}-${normalise(today.getMonth() + 1)}-${normalise(today.getDate())}`;

function normalise(number) {
    if (number.toString().length === 1) {
        return `0${number}`
    }
    return number; 
}

export default DatePicker;