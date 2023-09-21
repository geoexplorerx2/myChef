import React, { FC } from 'react'
import CustomeSectionPhone from './CustomeSectionPhone'
interface CustomeSectionPartial {
    windowSize?: any
}
const CustomeSectionPartial: FC<CustomeSectionPartial> = ({ windowSize }) => {
    let DocumentObjectModel = null;
    if (windowSize <= 375) { DocumentObjectModel = <CustomeSectionPhone /> }
    return (
        <section className='w-full'>
            <div className='w-full flex justify-center pt-5 text-2xl font-semibold'>
                <div className='w-[80%] text-center leading-10'>MyChef, Custom Made For You</div>
            </div>
            <div className='w-full'>
                <div className='w-full mt-2 flex justify-center'>
                    <div className='w-[90%] text-center opacity-[.5]'>
                        With low minimums starting at 25 aprons and lead times starting at 2 weeks,
                        there’s no reason not to go custom. We’ll guide you through every step of the process.
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full mt-8 flex justify-center'>
                    <div className='w-[99%] flex'>
                        <div className='flex w-full translate-x-[25px]'>
                            {/* ---------------------------------------------------------------------------- */}
                            <div className='w-[10%] relative'>
                                <div className='w-[35px] h-[35px] bg-[#4C6486] rounded-full flex justify-center items-center'>
                                    <span className='text-sm text-white'>1</span>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------- */}
                            <div className='w-[15%] flex items-center'>
                                <div className='w-full border-[1px] border-dashed border-[#4C6486]'></div>
                            </div>
                            {/* ---------------------------------------------------------------------------- */}
                            <div className='w-[10%] relative'>
                                <div className='w-[35px] h-[35px] bg-[#fff] rounded-full flex justify-center items-center border-[1px] border-[rgba(0,0,0,0.3)]'>
                                    <span className='text-sm text-black'>2</span>
                                </div>
                            </div>
                            {/* ---------------------------------------------------------------------------- */}
                            <div className='w-[15%] flex items-center'>
                                <div className='w-full border-[1px] border-dashed border-[#4C6486]'></div>
                            </div>
                            {/* ---------------------------------------------------------------------------- */}
                            <div className='w-[10%] relative'>
                                <div className='w-[35px] h-[35px] bg-[#fff] rounded-full flex justify-center items-center border-[1px] border-[rgba(0,0,0,0.3)]'>
                                    <span className='text-sm text-black'>3</span>
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
                            </div>
                            {/* ---------------------------------------------------------------------------- */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomeSectionPartial
