import React from 'react'
import add from '../../assets/svg/add.svg'
const Upload = () => {
  return (
    <div className='w-full h-[140px] flex justify-center mb-8'>
      <div className='w-[90%] h-full border-[1px] border-dashed border-[rgba(0,0,0,0.8)] rounded-md'>
        <div className='w-full flex justify-center pt-5'>
        <label className='w-[8%] cursor-pointer' htmlFor="upload">
            <img src={add} alt="Add" />
          </label>
          <input type='file' id='upload' hidden />
        </div>
        <div className='w-full flex justify-center pt-3'>
          <span className='text-sm font-bold'>Logo Yükle</span>
        </div>
        <div className='w-full flex justify-center pt-3'>
          <span className='text-xs text-[rgba(0,0,0,0.5)]'>Şeffaf arka plana sahip PNG görüntüleri olarak yükleyin</span>
        </div>
        <div className='w-full flex justify-center mt-4'>
          <div className='h-[5px] rounded-md bg-[green] w-[90%]'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
