import React, { FC } from 'react'
import NavBarPhone from './NavBarPhone'
interface NavBarProps {
    windowSize?: any,
}
const NavBar: FC<NavBarProps> = ({ windowSize }) => {
    let DocumentObjectModel = null
    if (windowSize <= 375) { DocumentObjectModel = <NavBarPhone /> }
    return (
        <>
            {DocumentObjectModel}
        </>
    )
}

export default NavBar
