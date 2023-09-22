import React from 'react'
import ActiveButton from '../../assets/svg/activebtn.svg'
const Index = () => {
    return (
        <div className='w-full'>
            <div className='text-black font-semibold text-base px-7 py-3'>Pozisyon</div>
            <div className='w-full px-7 flex justify-center items-center mt-1 mb-10'>
                <button className='w-[49%] border-[1px] border-[#586E8E83] mr-3 rounded-lg bg-[#AF8B681A] flex justify-center py-3'>
                    <span><img src={ActiveButton} /></span>
                    <span className='mx-2'>Sol Göğüs</span>
                </button>
                <button className='w-[49%] cursor-pointer border-[1px] border-[rgba(0,0,0,0.2)] rounded-lg flex justify-center items-center py-3'>
                    <span className='mx-2'>
                        <div className='w-[20px] h-[20px] rounded-full cursor-pointer border-[1px] border-[rgba(0,0,0,0.6)]'>

                        </div>
                    </span>
                    <span>
                        Sağ Göğüs
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Index
