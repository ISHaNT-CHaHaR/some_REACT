import React, { useState } from 'react';

import Tweet from './tweet';

function App() {
   /// this app.js is a component.
   // this is not actually HTML .. it is JSX.
   // const [isRed, setRed] = useState(false);
   // const [count, setCount] = useState(0);

   // const increment = () => {
   //    setCount(count + 1);
   //    setRed(true);
   // };

   // const decrement = () => {
   //    if (count > 0) {
   //       setCount(count - 1);
   //       setRed(!isRed);
   //    }
   // };

   const [users, setUsers] = useState([
      { name: 'ISHANT', message: 'Hello There!' },
      { name: 'Zenitsu!', message: 'Nezuko channnnnnn! nezuko nezuko!' },
   ]);

   return (
      <div className="App">
         {users.map((user) => {
            return <Tweet name={user.name} message={user.message} />;
         })}
      </div>
   );
}
// WE add curly braces here because we want to render JS.
// If it is " " the it will be HTML JSX.

export default App;
