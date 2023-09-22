import React from 'react'
import NameComp from '../Components/NameSectionComp/Index'
import PositionComp from '../Components/PositionSectionComp/Index'
import FontComp from '../Components/FontSectionComp/Index'
import ColorComp from '../Components/ColorSectionComp/Index'
import SaveButton from '../Components/SaveSectionComp/Index'
const Page1 = () => {
    return (
        <>
            <div className='w-full'>
                <NameComp />
            </div>
            <div className='w-full'>
                <PositionComp />
            </div>
            <div className='w-full'>
                <FontComp />
            </div>
            <div className='w-full'>
                <ColorComp />
            </div>
            <div>
                <SaveButton />
            </div>
        </>
    )
}

export default Page1
