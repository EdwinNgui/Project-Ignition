'use client'; //Specific to Next.js (files are server componanets, but react hooks are client

import React, { useState } from 'react';

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0); //count is the state, setCount modifies it, starts at 0

  const increment = () => {
    setCount(count + 1);
  }
  
  const decrement = () => {
    setCount(count - 1);
  }

  // Return the counter parts
  return (
    <div className='bg-blue-300 w-full px-12 py-2 my-4'>
        <div className='flex flex-col items-center py-4 text-xl font-bold'>
            <p>Count: {count}</p>
        </div>
        <div className='flex justify-evenly'>
            <button className="text-red-400" onClick={decrement}>
                Decrement
            </button>
            <button className="text-green-600" onClick={increment}>
                Increment
            </button>
        </div>
    </div>
  );
}

export default Counter;