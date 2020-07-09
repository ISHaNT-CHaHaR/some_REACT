import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
import './App.css';

const AddMovie = () => {
   const [name, setname] = useState('');
   const [price, setPrice] = useState('');
   const [movies, setmovies] = useContext(MovieContext);

   const updateName = (e) => {
      setname(e.target.value);
   };

   const updatePrice = (e) => {
      setPrice(e.target.value);
   };

   const addMovie = (e) => {
      e.preventDefault();
      setmovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
   };

   return (
      <form onSubmit={addMovie}>
         <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={updateName}
            required
            className="input"
         />
         <input
            type="text"
            name="name"
            placeholder='price'
            value={price}
            onChange={updatePrice}
            required
            className="input"
         />
         <button className="submit">Submit</button>
      </form>
   );
};

export default AddMovie;
