import React from 'react';

import Tweet from './tweet';

function App() {
   /// this app.js is a component.
   // this is not actually HTML .. it is JSX.

   return (
      <div className="App">
         <Tweet name="ISHANT" message="Nevermind!" />
         <Tweet name="SENKU" message="I m 1 Billion % sure!" />
         <Tweet name="MUICHIRO" message="what was that cloud shape again?" />
         <Tweet name="KANROJI" message="Kawai!" />
      </div>
   );
}
// WE add curly braces here because we want to render JS.
// If it is " " the it will be HTML JSX.

export default App;
