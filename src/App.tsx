import React from 'react';
import Store from './store';
import { Provider } from 'react-redux';
import useWindowSize from './Hooks/useWindowSize';
import { MagnifierComponentFram } from './Components/MagnifierComponent/Index';
function App() {
  /** Destructure the values returned by the 'useWindowSize()' hook into 'width' and 'height' variables. */
  const { width, height } = useWindowSize()
  return (
    <Provider store={Store}>
      <main className="w-full min-h-screen bg-slate-800 relative">
        <MagnifierComponentFram />
      </main>
    </Provider>
  );
}

export default App;
