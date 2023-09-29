import React from 'react'
import WhiteBasket from '../../assets/svg/whiteBasket.svg'
const Index = () => {
    return (
        <div className='w-full flex h-[100px] mt-10 bg-white save-button-shodow justify-center items-center'>
            <button className='w-[85%] py-3 flex justify-center items-center text-white bg-[#586E8E] rounded-md'>
                <img className='w-[6%] mr-3' src={WhiteBasket}/>
                <span className='font-semibold text-lg'>Sepete Ekle</span>
            </button>
        </div>
    )
}

export default Index
