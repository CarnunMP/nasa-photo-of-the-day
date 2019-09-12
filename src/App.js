import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import styled from "styled-components";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;

function App() {
  const [content, setContent] = useState({
    pictureURL: "",
    description: "",
  });

  const [date, setDate] = useState(todayString);

  const dateChanged = (event) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Ks7LSrUexdOdY7bTVHTN66ZCpLGqiwbwTCmAz34o&date=${date}`)
      .then(response => {
        setContent({
          pictureURL: response.data.url,
          description: response.data.explanation,
        });
      })
      .catch(error => {
        //
      });
  }, [date]);

  return (
    <StyledApp>
      <Header title="PIC OF THE DAY" today={todayString} date={date} dateChanged={dateChanged}/>
      <Content pictureURL={content.pictureURL} description={content.description}/>
    </StyledApp>
  );
}

const today = new Date();
const todayString = `${today.getFullYear()}-${normalise(today.getMonth() + 1)}-${normalise(today.getDate())}`;

function normalise(number) {
    if (number.toString().length === 1) {
        return `0${number}`
    }
    return number; 
}

export default App;
