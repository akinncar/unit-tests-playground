import axios from "axios";

async function getCharacters() {
  const { data } = await axios.get(
    "https://rickandmortyapi.com/api/character/?page=1"
  );

  return data.results;
}

export { getCharacters };
