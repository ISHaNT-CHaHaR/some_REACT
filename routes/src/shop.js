import React, { useState, useEffect } from 'react';

import './App.css';

function Shop() {
   useEffect(async () => {
      const data = await fetch('https://dog.ceo/api/breeds/list/all');
      const item = await data.json();
      console.log(Object.keys(item));
      const res = Object.keys(item.message);
      setItems(res);
   }, []);

   const [items, setItems] = useState([]);

   // const fetchItems = async () => {
   //    const data = await fetch(
   //       'https://fortnite-api.theapinetwork.com/upcoming/get'
   //    );
   //    const item = await data.json();
   //    console.log(item.data);

   //    setItems(item.data);
   // };

   return (
      <div className="App">
         <ul className="list">
            {items.map((item) => (
               <li key={item}>
                  <h3>{item}</h3>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Shop;
