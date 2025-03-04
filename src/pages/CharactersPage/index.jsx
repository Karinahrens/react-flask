import { useState, useEffect } from "react";
import { CharacterGallery, Form } from "../../components";

const baseUrl = "https://flask-project-3ttz.onrender.com/characters";

function CharactersPage() {
    const [name, setName] = useState('');
    const [searchString, setSearchString] = useState('');
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    const handleChange = e => {
        setName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchString(name)
    }

    const findCharacter = () => {
    const lowerCaseName = searchString.toLowerCase(); 
    if (lowerCaseName === "") {
        setFilteredCharacters(characters);
    } else {
        setFilteredCharacters(
            characters.filter(char => char.name.toLowerCase().includes(lowerCaseName))
        );
    }
}


    const fetchCharacters = async () => {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setCharacters(data.characters)
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

    useEffect(() => {
        findCharacter()
    }, [characters, searchString, name])

    return (
        <main>
            <h1>Search through your favourite characters</h1>
            <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
            <CharacterGallery filteredCharacters={filteredCharacters}/>
        </main>
    )
}

export default CharactersPage;
