import React, { useState } from 'react'
import ActiveButton from '../../assets/svg/activebtn.svg'
import { useDispatch } from 'react-redux'
import { setDirectionAction } from '../../Slices/InfoSlice'
const Index = () => {
    const dispatch = useDispatch()
    const [activeStatus, setActiveStatus] = useState(1)
    const handleDirection = (data: any) => {
        dispatch(setDirectionAction(data))
        setActiveStatus(data)
    }
    return (
        <div className='w-full'>
            <div className='text-black font-semibold text-base px-7 py-3'>Pozisyon</div>
            <div className='w-full px-7 flex justify-center items-center mt-1 mb-10'>
                <button onClick={() => handleDirection(1)} className={`w-[49%] border-[1px] border-[#586E8E83] mr-3 rounded-lg ${activeStatus === 1 ? 'bg-[#AF8B681A]' : null} flex justify-center py-3`}>
                    <span>
                        {activeStatus === 1 ? <img src={ActiveButton} /> : <div className='w-[20px] h-[20px] rounded-full cursor-pointer border-[1px] border-[rgba(0,0,0,0.6)]'></div>}
                    </span>
                    <span className='mx-2'>Sol Göğüs</span>
                </button>
                <button onClick={() => handleDirection(0)} className={`w-[49%] cursor-pointer border-[1px] border-[rgba(0,0,0,0.2)] ${activeStatus === 0 ? 'bg-[#AF8B681A]' : null} rounded-lg flex justify-center items-center py-3`}>
                    <span className='mx-2'>
                        {activeStatus === 0 ? <img src={ActiveButton} /> : <div className='w-[20px] h-[20px] rounded-full cursor-pointer border-[1px] border-[rgba(0,0,0,0.6)]'></div>}
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
