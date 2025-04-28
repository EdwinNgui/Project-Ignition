'use client'

import React, { useState, useRef } from 'react'

const Stopwatch = () => {
    const timeInterval = useRef<NodeJS.Timeout | null>(null);
    // Stores the time
  const [time, setTime] = useState(0);

  // Check if still running or not;
  const [isRunning, setIsRunning] = useState(false);

  // Managing the 3 button clicks possible
  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true); //Not running, make it run
    timeInterval.current = setInterval(() => {
        setTime((prev => prev + 1));
    }, 10);
  }

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    if (timeInterval.current){
        clearInterval(timeInterval.current);
    }
  }

  const handleReset = () => {
    setIsRunning(false);
    if (timeInterval.current){
        clearInterval(timeInterval.current);
    }
    setTime(0);
  }

    // Format the time into MM:SS:MS (minutes:seconds:milliseconds)
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 6000);
        const seconds = Math.floor((time % 6000) / 100);
        const milliseconds = time % 100;
    
        const pad = (num: number) => String(num).padStart(2, '0');
    
        return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
      }

    return (
    <div className='bg-gray-300 py-2 my-4'>
        <div className='flex flex-col items-center'>
            <div className="flex flex-col items-center mb-4">
            <h1 className="text-3xl">{formatTime(time)}</h1>
        </div>
        </div>
        <div className='flex justify-evenly'>
            <button onClick={handleStart} className="text-green-400">
                Start
            </button>
            <button onClick={handlePause} className="text-red-400">
                Pause
            </button>
            <button onClick={handleReset} className="text-orange-400">
                Reset
            </button>
        </div>
    </div>
  )
}

export default Stopwatch;
