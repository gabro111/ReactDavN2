import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Evolution</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}


function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
