import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

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
      {/* <Header/> */}
    </div>
  );
}

export default App;
