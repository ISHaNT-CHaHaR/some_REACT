import React from 'react';

import Tweet from './tweet';

function App() {
   /// this app.js is a component.
   // this is not actually HTML .. it is JSX.

   return (
      <div className="App">
         <h1>Hello World!</h1>
         <Tweet />
      </div>
   );
}
// WE add curly braces here because we want to render JS.
// If it is " " the it will be HTML JSX.

export default App;
