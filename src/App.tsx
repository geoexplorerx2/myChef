import React from 'react';
import Store from './store';
import { Provider } from 'react-redux';
import useWindowSize from './Hooks/useWindowSize';
import NavBar from './Components/NavBarComp/Index';
import CustomeSection from './Components/CustomeSectionComp/Index';
import MagnifierComp from './Components/MagnifierComp/Index';
import ProgressComp from './Components/ProgressSectionComp/Index';
import NameComp from './Components/NameSectionComp/Index';
import PositionComp from './Components/PositionSectionComp/Index';
function App() {
  /** Destructure the values returned by the 'useWindowSize()' hook into 'width' and 'height' variables. */
  const { width, height } = useWindowSize()
  return (
    <Provider store={Store}>
      {/* <Frame/> */}
      <main className="w-full min-h-screen relative bg-white">
        <NavBar />
        <CustomeSection />
        <section className='sticky top-0 w-full bg-white'>
          <div className='w-full relative'>
            <div className='sticky top-0'>
              <div className='w-full pt-1'>
                <ProgressComp />
              </div>
              <div className='w-full flex justify-center'>
                <div className='w-[90%] border-2 mt-14 rounded-2xl p-1'>
                  <MagnifierComp
                    width={"100%"}
                    src="https://chefworks.liquifire.com/chefworks?set=previewSize[large],scaleFactor[3],prodID[JLCV],prodColor[BLU],prodView[front],textPosition[],flag1[],flag1Position[],flag2[],flag2Position[],seed[001]&call=url[file:main]&sink=format[jpg]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='w-full'>
          <NameComp />
        </div>
        <div className='w-full'>
          <PositionComp/>
        </div>
      </main>
    </Provider>
  );
}

export default App;
