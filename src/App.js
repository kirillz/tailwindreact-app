import React from 'react';
import { useState } from 'react';

import Navigation from './components/Navigation';
import Picture from './img/Picture.svg'; // Tell webpack this JS file uses this image

function App() {
  const [count, setCount] = useState(0);

  return (
   
    <div>
      <div className="flex mb-4">
        <div className="w-full bg-gray-500 h-12">
          <Navigation />
          <div className="flex flex-col justify-around items-center my-5">
            <button
              className="bg-blue-800 hover:bg-indigo-600 transition-colors ease-linear duration-300 .object-center text-gray-100 h-10 px-4 py-2 m-6 rounded"
              onClick={() => setCount(count + 1)}>
              Нажми меня
            </button>
            <p>
              Вы нажали <b>{count}</b> раз
            </p>
            <img
              className="transition-all ease-linear duration-600"
              src={Picture}
              alt="Camping"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
