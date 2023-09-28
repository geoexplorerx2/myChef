import React from 'react'
import add from '../../assets/svg/add.svg'
import { useDispatch } from 'react-redux';
import { setInfoAction } from '../../Slices/InfoSlice';
const Index = () => {
    const dispatch = useDispatch();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue:any = event?.target.value;
        dispatch(setInfoAction(inputValue))
    };
    return (
        <div className='w-full'>
            <div className='px-7 pt-6 text-base font-semibold'>Isim</div>
            <div className='w-full px-7 py-3'>
                <input onChange={handleChange} type='text' className='w-full h-12 rounded-md px-5 bg-[#E8E9EB] border-[1px] border-[#E8E9EB] text-[rgba(0,0,0,0.7)]' placeholder='İsim Yaz' />
            </div>
            <div className='w-full px-7 py-3'>
                <button className='w-full  flex justify-center items-center h-12 rounded-md px-5 border-[1px] border-[#E8E9EB] text-[rgba(0,0,0,0.7)]'>
                    <div className='flex'>
                        <span className='mx-2'><img src={add} /></span>
                        <span>Ek İsim Ekle</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Index
