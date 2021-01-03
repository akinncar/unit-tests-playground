import { useState, useEffect } from "react";
import { getCharacters } from "./api";

function Characters() {
  const [characters, setCharacters] = useState([]);

  async function loadCharacters() {
    const data = await getCharacters();
    setCharacters(data);
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div>
      <h3>Rick and Morty Characters</h3>
      <ul>
        {characters?.map((character) => (
          <li>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;
