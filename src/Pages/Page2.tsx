import React from 'react'
import Logo from '../Components/LogoUploadComp/Index'
import UploadComp from '../Components/UploadSection/Index'
import DescriptionComp from '../Components/DescriptionComp/Index'
import SaveButton from '../Components/SaveSectionComp/Index'
const Page2 = () => {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <Logo />
            </div>
            <div className='w-full'>
                <UploadComp />
            </div>
            <div className='w-full'>
                <DescriptionComp />
            </div>
            <div className='w-full'>
                <SaveButton />
            </div>
        </div>
    )
}

export default Page2
