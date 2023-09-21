import React from 'react';
import Store from './store';
import { Provider } from 'react-redux';
import useWindowSize from './Hooks/useWindowSize';
import { MagnifierComponentFram } from './Components/MagnifierComponent/Index';
import { NavBarComponent } from './Components/NavBarComponent';
import { CustomeSectionComponent } from './Components/CustomeSectionComponet';
function App() {
  /** Destructure the values returned by the 'useWindowSize()' hook into 'width' and 'height' variables. */
  const { width, height } = useWindowSize()
  return (
    <Provider store={Store}>
      <main className="w-full min-h-screen relative">
        <NavBarComponent windowSize={width} />
        <CustomeSectionComponent windowSize={width} />
        <div className='w-full flex justify-center'>
          <div className='w-[90%] border-2 mt-20 rounded-2xl p-5'>
            <MagnifierComponentFram
              width={"100%"}
              src="https://chefworks.liquifire.com/chefworks?set=previewSize[large],scaleFactor[3],prodID[JLCV],prodColor[BLU],prodView[front],textPosition[],flag1[],flag1Position[],flag2[],flag2Position[],seed[001]&call=url[file:main]&sink=format[jpg]"
            />
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;
