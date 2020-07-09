import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const Provider = (props) => {
   const [movies, setmovies] = useState([
      {
         name: 'Mugen Train',
         price: '$10',
         id: 23124,
      },
      {
         name: 'Weathering with you',
         price: '$289',
         id: 32324,
      },
      {
         name: 'Your Name',
         price: '$30',
         id: 67464,
      },
   ]);
   return (
      <MovieContext.Provider value={[movies, setmovies]}>
         {props.children}
      </MovieContext.Provider>
   );
};
