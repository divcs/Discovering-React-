import { useState } from "react";

function UpdatingArraysOfObjects(){
    const [movies, setMovies] = useState([
        {
            id:1,
            title:"Equalizer 3",
            ratings:7,
        },
        {
            id:2,
            title:"Superman",
            ratings:8,
        }
    ]);

    const handleClick=() =>{
        setMovies(
            movies.map((movie) => (movie.id === 1 ? {...movies, title:"John Wick 4"}:movie))
            );
    };

    return(
        <>
        {movies.map((movie) => (
            <li key = {Math.random()}>{movie.title}</li>
        ))}
        <button onClick={handleClick}>Change Title</button>
        </>
    )
}
export default UpdatingArraysOfObjects;