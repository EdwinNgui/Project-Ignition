// src/app/dashboard/page.tsx
'use client'; //Specific to Next.js (files are server componanets, but react hooks are client

import React from 'react';
import Counter from "@/components/task1/task1-counter";
import Stopwatch from "@/components/task1/task1-stopwatch";
import Tabs from "@/components/task1/task1-tabs";

export default function DashboardPage() {
    return (
      <div className="p-8 w-screen">
        <h1 className="text-2xl font-bold">Task 1 - Easy</h1>
        
        {/* Tracker */}
        <h2 className="text-xl ">Easy</h2>

        {/* Each component needs to import it's own item */}
        <li>Counter</li>
        <Counter />

        <li>Stopwatch</li>
        <Stopwatch/>

        <li className='line-through'>Like Button</li>
        <li className='line-through'>Star Rating</li>
        
        <li>Tabs (using MUI)</li>
        <Tabs />

        <li>Accordion</li>
        <li>Traffic Lights</li>
        <li>Progress Bars</li>
        <li>Holy Grail Layout</li>

      </div>
    )
  }
  