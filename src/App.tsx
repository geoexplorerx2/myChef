import React from 'react';
import Store from './store';
import { Provider } from 'react-redux';
import useWindowSize from './Hooks/useWindowSize';
import { MagnifierComponentFram } from './Components/MagnifierComponent/Index';
import { NavBarComponent } from './Components/NavBarComponent';
function App() {
  /** Destructure the values returned by the 'useWindowSize()' hook into 'width' and 'height' variables. */
  const { width, height } = useWindowSize()
  return (
    <Provider store={Store}>
      <main className="w-full min-h-screen relative">
        <NavBarComponent windowSize={width} />
        {/* <MagnifierComponentFram
          width={"500px"}
          src="https://chefworks.liquifire.com/chefworks?set=previewSize[large],scaleFactor[3],prodID[JLCV],prodColor[BLU],prodView[front],textPosition[],flag1[],flag1Position[],flag2[],flag2Position[],seed[001]&call=url[file:main]&sink=format[jpg]"
        /> */}
      </main>
    </Provider>
  );
}

export default App;
