import React from 'react';
import useWindowSize from './Hooks/useWindowSize';
function App() {
  /** Destructure the values returned by the 'useWindowSize()' hook into 'width' and 'height' variables. */
  const { width, height } = useWindowSize()
  return (
    <main className="w-full min-h-screen bg-slate-800">
      <section className='w-full h-full text-white'>{width}</section>
    </main>
  );
}

export default App;
