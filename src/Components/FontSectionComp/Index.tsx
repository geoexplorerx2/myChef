import React from 'react'

const Index = () => {
    return (
        <>
            <div className='w-full'>
                <div className='px-7 pb-6 text-base font-semibold'>Font</div>
            </div>
            <div className='w-full px-7 flex justify-center items-center mb-3'>
                <button className='w-[49%] border-[1px] border-[#586E8E83] mr-3 rounded-lg flex justify-center py-3'>
                    <span></span>
                    <span className='mx-2'>Your Name</span>
                </button>
                <button className='w-[49%] cursor-pointer border-[1px] border-[rgba(0,0,0,0.2)] rounded-lg flex justify-center items-center py-3'>
                    <span>
                        Your Name
                    </span>
                </button>
            </div>
            <div className='w-full px-7 flex justify-center items-center mt-1 mb-6'>
                <button className='w-[49%] border-[1px] border-[#586E8E83] mr-3 rounded-lg bg-[#AF8B681A] flex justify-center py-3'>
                    <span className='mx-2'>Your Name</span>
                </button>
                <button className='w-[49%] cursor-pointer border-[1px] border-[rgba(0,0,0,0.2)] rounded-lg flex justify-center items-center py-3'>
                    <span>
                        Your Name
                    </span>
                </button>
            </div>
        </>
    )
}

export default Index
