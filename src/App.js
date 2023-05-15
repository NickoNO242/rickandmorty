import "./App.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import DirectorySelector from "./components/Form";

function App() {
  const [characters, setCharacteres] = useState([]);
  const [info, setInfo] = useState({});
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacteres(characters.concat(data.results));
        setInfo(data.info);
      })

      .catch((error) => console.log(error));
  };

  const paginaAnterior = () => {
    fetchCharacters(info.prev);
  };
  const paginaSiguiente = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <div>
      <Navbar brand="Rick and Morty App" />
      {/* <div className="b-w">
        <Wave />
      </div> */}
      <div className="container mt-4">
        <Pagination
          prev={info.prev}
          next={info.next}
          onAnterior={paginaAnterior}
          onSiguiente={paginaSiguiente}
        />
        {console.log(characters)}
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onAnterior={paginaAnterior}
          onSiguiente={paginaSiguiente}
        />
      {/* <div className="pt-4">
      <DirectorySelector />
      </div> */}
      </div>
      {/* <div className="b-w1">
        <Wave1 />
      </div> */}
    </div>
  );
}

export default App;
