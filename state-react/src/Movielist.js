import React from 'react';

const Movielist = ({ name, price }) => {
   return (
      <div class="div">
         <div className="Movie">
            <h2>{name}</h2>
            <p>${price}</p>
         </div>
      </div>
   );
};

export default Movielist;
