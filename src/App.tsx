import React, { useEffect, useState } from 'react';
import useWindowSize from './Hooks/useWindowSize';
import NavBar from './Components/NavBarComp/Index';
import CustomeSection from './Components/CustomeSectionComp/Index';
import MagnifierComp from './Components/MagnifierComp/Index';
import ProgressComp from './Components/ProgressSectionComp/Index';
import MarkLogo from './assets/png/MarkGroup.png'
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import { useSelector } from 'react-redux';
const Mobile = (page: any, template: any) => {
  return (
    <>
      {/* <Frame/> */}
      <main className="w-full min-h-screen relative bg-white">
        <NavBar />
        <CustomeSection />
        <div className='w-full pt-1'>
          <ProgressComp />
        </div>
        <section className='sticky top-0 w-full bg-white z-50'>
          <div className='w-full relative'>
            <div className='sticky top-0'>
              <div className='w-full flex justify-center'>
                <div className='w-[80%] mt-8 rounded-2xl'>
                  <MagnifierComp
                    width={"100%"}
                    src={MarkLogo}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='w-full'>
          {template}
        </div>
      </main>
    </>
  )
}
function App() {
  const getPage = useSelector((state: any) => state.InfoSlice?.page)
  const page = typeof getPage === 'object' ? (getPage.payload) : getPage
  /** Destructure the values returned by the 'useWindowSize()' hook into 'width' and 'height' variables. */
  const { width, height } = useWindowSize()
  const [template, setTemplate] = useState<any>(<Page1 />)
  useEffect(() => {
    switch (page) {
      case 1:
        setTemplate(<Page1 />)
        break;
      case 2:
        setTemplate(<Page2 />)
        break;
      case 3:
        setTemplate(<Page3 />)
        break;
      case 4:
        setTemplate(<Page4 />)
        break;
      default:
        setTemplate(<Page1 />)
    }
  }, [page])
  return (
    <>
      {width <= 428 ? Mobile(page, template) : null}
    </>
  );
}

export default App;
