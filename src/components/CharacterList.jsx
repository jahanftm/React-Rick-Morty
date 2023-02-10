import {useEffect, useState} from "react";
import {Character} from "./Character";


export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(res => {
                console.log(res.results)
                setCharacters(res.results);
                setLoading(false)
            })
    }, []);

    return (
        <div className='wrapper'>

            {
                characters?.length > 0 && characters.map((character) => (
                    <Character key={character.id} {...character}/>
                ))
            }
        </div>
    )
}