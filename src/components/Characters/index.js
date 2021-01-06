import { useState, useEffect } from "react";
import Api from "./api";

function Characters() {
  const [characters, setCharacters] = useState([]);

  async function loadCharacters() {
    const data = await Api.getCharacters();
    console.log(data);

    setCharacters(data);
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div>
      <h3>Rick and Morty Characters</h3>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
