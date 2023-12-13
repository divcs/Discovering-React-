import React from 'react'
import { useState } from 'react'

export const UpdatingObjectValues = () => {
    const [movie, setMovie] = useState({
        title:"Equalizer 3",
        ratings:7,
    });

    const handleClick = () =>{
        // const copyMovie= {
        //     ...movie,
        //     ratings:5,
        // };
        // setMovie(copyMovie);

        
        setMovie({...movie, ratings:5});    //does the same thing as above
    };

  return (
    <>
    <h1>Title:{movie.title}</h1>
    <p>Ratings: {movie.ratings}</p>
    <button onClick={handleClick}>Change Ratings</button>
    </>
  )
}
