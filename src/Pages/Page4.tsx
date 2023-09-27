import React from 'react'
import Logo from '../Components/LogoUploadComp/Index'
import Counts from '../Components/Counts/Index'
import SaveBtn from '../Components/SaveSectionComp/Index'
const Page4 = () => {
  return (
    <div className='w-full'>
      <div className='w-full border-b-[1px] border-[#DBDBDB]'>
        <Logo LogoName={'Nakış Özeti'} />
      </div>
      <div className='w-full bg-white'>
        <Counts />
      </div>
      <div className='w-full'>
        <SaveBtn />
      </div>
    </div>
  )
}

export default Page4
