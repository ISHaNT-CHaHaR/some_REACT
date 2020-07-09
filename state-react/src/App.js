import React from 'react';
import Nav from './Nav';
import './App.css';
import Movie from './Movie';
import AddMovie from './addMovie';
import { Provider } from './MovieContext';

function App() {
   return (
      <Provider>
         <div className="App">
            <Nav />
            <AddMovie />
            <Movie />
         </div>
      </Provider>
   );
}

export default App;
