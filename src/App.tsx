import React from 'react';
import useWindowSize from './Hooks/useWindowSize';
import { MagnifierComponentFram } from './Components/MagnifierComponent/Index';
function App() {
  /** Destructure the values returned by the 'useWindowSize()' hook into 'width' and 'height' variables. */
  const { width, height } = useWindowSize()
  return (
    <main className="w-full min-h-screen bg-slate-800">
      <MagnifierComponentFram/>
    </main>
  );
}

export default App;
