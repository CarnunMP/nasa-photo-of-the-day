import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    background: #070707;
    color: white;
    border: 1px solid white;
    border-radius: 2px;
    margin-top: 0.5%;

    &:nth-of-type(2) {
        margin-left: 8px;
        height: 1.3rem;
    }
`;

function DatePicker(props) {
    const {today, date, dateChanged} = props;

    return (
        <form>
            <StyledInput type="date" defaultValue={date} min="1995-06-16" max={today} onChange={dateChanged}/>
            {/* <StyledInput type="submit"/> */}
        </form>
    )
}

export default DatePicker;