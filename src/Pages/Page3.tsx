import React from 'react'
import Logo from '../Components/LogoUploadComp/Index'
import FlagSection from '../Components/FlagsSectionComp/Index'
const Page3 = () => {
  return (
    <div className='w-full'>
      <div className='w-full border-b-[1px] border-[#DBDBDB] shodow-Box'>
        <Logo LogoName={'Bayrak Seçimi'} />
      </div>
      <div className='w-full'>
        <FlagSection/>
      </div>
    </div>
  )
}

export default Page3
