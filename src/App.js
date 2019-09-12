import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
  const [content, setContent] = useState({
    pictureURL: "",
    description: "",
  });

  useEffect(() => {
    axios.get("https://lambda-github-api-server.herokuapp.com/")
      .then(response => {
        setContent({
          pictureURL: response.data.url,
          description: response.data.explanation,
        });
      })
      .catch(error => {
        debugger
      });
  }, []);

  return (
    <div className="App">
      <Header title="PIC OF THE DAY"/>
      <Content pictureURL={content.pictureURL} description={content.description}/>
    </div>
  );
}

export default App;
