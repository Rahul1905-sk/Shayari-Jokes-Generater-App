import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Typewriter from "typewriter-effect";

function App() {
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState("");
  const [generatedShayari, setGeneratedShayari] = useState("");
const [flag,setFlag] = useState(false)
const handleChange = () => {
  let a = true;
}

  const generateShayari = async () => {
    // Send a request to the backend API with user preferences
    setFlag(true)
    let obj = {};
    if (genre) {
      obj.option = `tell me a ${keyword} about ${genre} in hinglish`;
    } else {
      obj.option = `tell me a ${keyword} in hinglish`;
    }

    console.log(obj);
    axios
      // .post("https://crimson-salamander-gown.cyclic.app/shayri", obj)
      .post("https://long-puce-rabbit-slip.cyclic.app/generateShayri", obj)
      .then((response) => {
        // Handle the response here
        setGeneratedShayari(response.data);
        setFlag(false)
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };

  return (
    <div className="App">
      <h1>
        {" "}
        <Typewriter options={{loop:true}}
          onInit={(typewriter) => {
            typewriter
              .typeString("Shayari Generater")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Jokes Generater")
              .start();
               
          }}
        />{" "}
        
      </h1>

      <select value={keyword} onChange={(e) => setKeyword(e.target.value)}>
        <option value="">Select type</option>
        <option value="Shayari">Shayari</option>
        <option value="Joke">Jokes</option>
        {/* Add more genre options */}
      </select>
      {keyword === "Shayari" && (
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Select Genre</option>
          <option value="love">Love</option>
          <option value="nature">Nature</option>
          <option value="friendship">Friendship</option>
          <option value="life">Life</option>
          {/* Add more genre options */}
        </select>
      )}
      <button disabled={flag}  onClick={generateShayari}>Generate</button>

      {generatedShayari ? (
        <textarea
          style={{ width: "80%", height: "25vh" }}
          value={generatedShayari ? generatedShayari : ""}
          onChange={handleChange}
        ></textarea>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
