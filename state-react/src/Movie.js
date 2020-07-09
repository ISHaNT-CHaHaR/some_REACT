import React, { useState, useContext } from 'react';
import Movielist from './Movielist';

import { MovieContext } from './MovieContext';
const Movie = () => {
   const [movies, setmovies] = useContext(MovieContext);
   return (
      <div>
        
         {movies.map((movie) => (
           <Movielist name={movie.name} price={movie.price} key={movie.id} />
         ))}
      </div>
   );
};
export default Movie;
