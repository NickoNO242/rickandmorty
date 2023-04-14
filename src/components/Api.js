import { useEffect, useState } from "react";


// const [characters, setCharacteres] = useState([]);
// const initialUrl = "https://rickandmortyapi.com/api/character"
// const Api = (url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => setCharacteres(data.results))
//     .catch((error) => console.log(error));
// };

// useEffect(() => {
//   Api(initialUrl)
// }, []);
// export default characters
function Api() {
    const [characters, setCharacteres] = useState([]);
    const initialUrl = "https://rickandmortyapi.com/api/character"
    const fetchCharacters = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCharacteres(data.results))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      fetchCharacters(initialUrl)
    }, []);
    
    return (
        // {console.log(characters)}
        characters
    )
    
  }
export default Api