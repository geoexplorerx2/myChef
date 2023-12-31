import React from 'react'
import Logo from '../Components/LogoUploadComp/Index'
import Counts from '../Components/Counts/Index'
import PaymentInfo from '../Components/PaymentFeature/Index'
import Sum from '../Components/SumComponent/Index'
import AddToBasket from '../Components/AddToBasketComp/Index'
const Page4 = () => {
  return (
    <div className='w-full'>
      <div className='w-full border-b-[1px] border-[#DBDBDB]'>
        <Logo LogoName={'Nakış Özeti'} />
      </div>
      <div className='w-full bg-white'>
        <Counts />
      </div>
      <div className='w-full bg-white'>
        <PaymentInfo />
      </div>
      <div className='w-full bg-white'>
        <Sum />
      </div>
      <div className='w-full'>
        <AddToBasket />
      </div>
    </div>
  )
}

export default Page4
