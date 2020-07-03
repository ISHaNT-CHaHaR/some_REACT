import React from 'react';

function Hello() {
   const sayHello = () => {
      console.log('Hello');
   };
   return (
      <div>
         <h1>This is a Hello component</h1>
         <button onClick={sayHello}>Say Hello</button>
      </div>
   );
}

export default Hello;
