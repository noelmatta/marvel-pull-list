import { useState, useEffect } from 'react';


function Search() {
  const [ query, setQuery ] = useState({
    charOrTitle: ''
  });

  
  const [ characterList, setCharacterList ] = useState([]);

  const marvelEndpoint = new URL('http://gateway.marvel.com/v1/public/characters');
  
  async function getCharacters(searchQuery) {
    const ts = new Date().getTime();
    const characters = [];

    marvelEndpoint.search = new URLSearchParams({
      apikey: '',
      nameStartsWith: searchQuery,
    })

    const res = await fetch(marvelEndpoint);
    const marvelData = await res.json();

    marvelData.data.results.map((partialMatch) => {
      characters.push(partialMatch.name);
    })
    setCharacterList(characters);
    
  }

  useEffect(() => {
    getCharacters('wol');
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    setQuery({
      charOrTitle: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
  }

  return (
    <form method="post" onSubmit={ handleSubmit }>
      <h2>Search</h2>
      
      <label htmlFor="searchQuery">Search for a character or comic series</label>
      <input
        type="text"
        name="searchQuery"
        value={ query.charOrTitle }
        onChange={ handleChange }
      />
      <button type="submit" value="submit">Search</button>
    </form>
  )
}

export default Search;