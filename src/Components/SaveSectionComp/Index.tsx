import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageAction } from '../../Slices/InfoSlice'
const Index = () => {
    const dispatch = useDispatch()
    const Page = useSelector((state: any) => state.InfoSlice?.page)
    const handlePage = () => {
        dispatch(setPageAction(typeof Page === 'object' ? (Page.payload + 1) : Page + 1))
    }

    return (
        <div className='w-full flex h-[100px] mt-10 bg-white save-button-shodow justify-center items-center'>
            <button onClick={handlePage} className='w-[85%] py-3 flex justify-center items-center text-white bg-[#586E8E] rounded-md'>
                <span className='font-semibold text-lg'>Devam</span>
            </button>
        </div>
    )
}

export default Index
