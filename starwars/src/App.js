import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import StarWars from "./components/StarWars";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [state, setState] = useState({});

  const getData = async url => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData("https://swapi.co/api/people/").then(data => setState(data));
  }, []);

  const characters = state.results || [];

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWars characters={characters} />
    </div>
  );
};

export default App;
