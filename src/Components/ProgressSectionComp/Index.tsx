import React from 'react'
import WhiteTik from '../../assets/svg/whiteCheck.svg'
import { useSelector } from 'react-redux'
const Index = () => {
    let pageValue = useSelector((state: any) => state.InfoSlice?.page)
    pageValue = typeof pageValue === 'object' ? (pageValue.payload) : pageValue
    console.log('pageValue', pageValue)
    return (
        <div className='w-full'>
            <div className='w-full mt-8 flex justify-center'>
                <div className='w-[87%] flex'>
                    <div className='flex w-full translate-x-[25px]'>
                        {/* ---------------------------------------------------------------------------- */}
                        <div className='w-[10%] relative'>
                            <div className={`w-[35px] h-[35px] ${pageValue >= 1 ? 'bg-[#4C6486]' : null} rounded-full flex justify-center items-center`}>
                                {pageValue <= 1 ?
                                    <span className='text-sm text-white'>1</span> :
                                    <span className='w-full flex justify-center items-center'>
                                        <img className='w-[30%]' src={WhiteTik} />
                                    </span>}
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full flex items-end translate-y-8'>
                                <span className='text-black text-sm'>İsim</span>
                            </div>
                        </div>
                        {/* ---------------------------------------------------------------------------- */}
                        <div className='w-[15%] flex items-center'>
                            <div className='w-full border-[1px] border-dashed border-[#4C6486]'></div>
                        </div>
                        {/* ---------------------------------------------------------------------------- */}
                        <div className='w-[10%] relative'>
                            <div className={`w-[35px] h-[35px] ${pageValue >= 2 ? 'bg-[#4C6486]' : 'bg-[#fff]'} rounded-full flex justify-center items-center border-[1px] border-[rgba(0,0,0,0.3)]`}>
                                {pageValue <= 2 ? <span className={`text-sm ${pageValue < 2 ? 'text-black' : 'text-white'}`}>2</span> : null}
                                {pageValue > 2 ? <span className='w-full flex justify-center items-center'>
                                    <img className='w-[30%]' src={WhiteTik} />
                                </span> : null}
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full flex items-end translate-y-8 -translate-x-5'>
                                <span className='text-black text-sm'>Logo/Marka</span>
                            </div>
                        </div>
                        {/* ---------------------------------------------------------------------------- */}
                        <div className='w-[15%] flex items-center'>
                            <div className='w-full border-[1px] border-dashed border-[#4C6486]'></div>
                        </div>
                        {/* ---------------------------------------------------------------------------- */}
                        <div className='w-[10%] relative'>
                            <div className={`w-[35px] h-[35px] ${pageValue >= 3 ? 'bg-[#4C6486]' : 'bg-[#fff]'} rounded-full flex justify-center items-center border-[1px] border-[rgba(0,0,0,0.3)]`}>
                                {pageValue <= 3 ? <span className={`text-sm ${pageValue < 3 ? 'text-black' : 'text-white'}`}>3</span> : null}
                                {pageValue > 3 ? <span className='w-full flex justify-center items-center'>
                                    <img className='w-[30%]' src={WhiteTik} />
                                </span> : null}
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full flex items-end translate-y-8'>
                                <span className='text-black text-sm'>Bayrak</span>
                            </div>
                        </div>
                        {/* ---------------------------------------------------------------------------- */}
                        <div className='w-[15%] flex items-center'>
                            <div className='w-full border-[1px] border-dashed border-[#4C6486]'></div>
                        </div>
                        {/* ---------------------------------------------------------------------------- */}
                        <div className='w-[10%] relative'>
                            <div className='w-[35px] h-[35px] bg-[#fff] rounded-full flex justify-center items-center border-[1px] border-[rgba(0,0,0,0.3)]'>
                                <span className='text-sm text-black'>4</span>
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full flex items-end translate-y-8 translate-x-1'>
                                <span className='text-black text-sm'>Özet</span>
                            </div>
                        </div>
                        {/* ---------------------------------------------------------------------------- */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
