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

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Ks7LSrUexdOdY7bTVHTN66ZCpLGqiwbwTCmAz34o")
      .then(response => {
        setContent({
          pictureURL: response.data.url,
          description: response.data.explanation,
        });
      })
      .catch(error => {
        //
      });
  }, []);

  return (
    <StyledApp>
      <Header title="PIC OF THE DAY"/>
      <Content pictureURL={content.pictureURL} description={content.description}/>
    </StyledApp >
  );
}

export default App;
