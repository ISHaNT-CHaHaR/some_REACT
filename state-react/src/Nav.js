import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
const Nav = () => {
   const [movies, setmovies] = useContext(MovieContext);
   return (
      <div className="Nav">
         <h2>Nevermind List</h2>
         <p>List of Movies: {movies.length}</p>
      </div>
   );
};

export default Nav;
