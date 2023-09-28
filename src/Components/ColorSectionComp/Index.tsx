import React, { useState } from 'react'
import whiteTick from '../../assets/svg/whiteCheck.svg'
import { useDispatch } from 'react-redux'
import { setColorAction } from '../../Slices/InfoSlice'
const Index = () => {
    const dispatch = useDispatch()
    const [elem, setElem] = useState('#333333')
    const [textColor, setTextColor] = useState('#333333')
    const elements = [
        {
            color: 'bg-[#1694BA]',
            data: '#1694BA',
            el: <img className='w-[40%]' src={whiteTick} />
        },
        {
            color: 'bg-[#F08A12]',
            data: '#F08A12',
            el: <img className='w-[40%]' src={whiteTick} />
        },
        {
            color: 'bg-[#7FA538]',
            data: '#7FA538',
            el: <img className='w-[40%]' src={whiteTick} />
        },
        {
            color: 'bg-[#EF54D1]',
            data: '#EF54D1',
            el: <img className='w-[40%]' src={whiteTick} />
        },
        {
            color: 'bg-[#333333]',
            data: '#333333',
            el: <img className='w-[40%]' src={whiteTick} />
        },
    ]
    const handleColor = (color: any) => {
        setElem(color.data)
        setTextColor(color.data)
        dispatch(setColorAction(color.data))
    }
    return (
        <div className='w-full'>
            <div className='px-7 text-base font-semibold pb-1'>Renk</div>
            <div className='w-full px-7 py-3'>
                <div className='shodow-Box-color-box w-full border-[1px] border-[rgba(0,0,0,0.3)] rounded-lg'>
                    <div className='border-b-[1px] border-[rgba(0,0,0,0.3)]'>
                        <div className='px-5 py-1'><span className='font-semibold text-base'>Seçili Renk</span> :<span style={{ color: textColor }} className={`mx-1 font-semibold text-base`}>Orman Turuncusu</span></div>
                    </div>
                    <div className='w-full flex items-center justify-between px-5 py-6'>
                        {
                            elements.map((item: any, index: any) => {
                                return (
                                    <>
                                        <div key={index} onClick={() => handleColor(item)} className={`w-[35px] h-[35px] rounded-full ${item.color} flex justify-center items-center`}>
                                            {(elem == item.data ? item.el : null)}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
