import React from 'react'

const Index = () => {
    return (
        <div className='w-full'>
            <div className='px-7 text-base font-semibold pb-1'>Renk</div>
            <div className='w-full px-7 py-3'>
                <div className='shodow-Box-color-box w-full border-[1px] border-[rgba(0,0,0,0.3)] rounded-lg'>
                    <div className='border-b-[1px] border-[rgba(0,0,0,0.3)]'>
                        <div className='px-5 py-1'><span className='font-semibold text-base'>Seçili Renk</span> :<span className='mx-1 text-[#F08A12] font-semibold text-base'>Orman Turuncusu</span></div>
                    </div>
                    <div className='w-full flex items-center justify-between px-5 py-6'>
                        <div className='w-[35px] h-[35px] rounded-full bg-[#1694BA]'>

                        </div>
                        <div className='w-[35px] h-[35px] rounded-full bg-[#F08A12]'>

                        </div>
                        <div className='w-[35px] h-[35px] rounded-full bg-[#7FA538]'>

                        </div>
                        <div className='w-[35px] h-[35px] rounded-full bg-[#EF54D1]'>

                        </div>
                        <div className='w-[35px] h-[35px] rounded-full bg-[#333333]'>

                        </div>
                        <div className='w-[35px] h-[35px] rounded-full bg-[#ffffff] border-[1px] border-[#E3E3E3]'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
