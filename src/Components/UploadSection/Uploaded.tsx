import React from 'react'
import add from '../../assets/svg/add.svg'
const Uploaded = () => {
  return (
    <div className='w-full h-[140px] flex justify-center mb-8'>
      <div className='w-[90%] h-full border-[1px] border-[#586E8E86] rounded-md bg-[#F7F3EF]'>
        <div className='w-full flex justify-center items-center h-[60px]'>
          <div className='w-[30px] h-[30px] rounded-full bg-[#5577A8]'></div>
          <div className='text-[#5577A8] text-sm mx-3'>Logo Yüklendi</div>
        </div>
      </div>
    </div>
  )
}

export default Uploaded
