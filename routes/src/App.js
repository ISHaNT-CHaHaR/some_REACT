import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import About from './about';
import Shop from './shop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
   // EVERY thing between router is gonna have ability to routing./
   // Applying the path="/" the Home page will always appear. so here comes the switch!

   return (
      <Router>
         <div className="App">
            <Nav />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/about" component={About} />

               <Route path="/shop" component={Shop} />
            </Switch>
         </div>
      </Router>
   );
}

const Home = () => (
   // WE can also make a router like this too!
   <div>
      <h1>Home Page</h1>
   </div>
);

export default App;
