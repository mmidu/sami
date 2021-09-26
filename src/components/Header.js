import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    // console.log(props)
    return (
        <div className={`logo ${props.isLandingVisible ? '' : 'visible'}`}>
            <h1><Link to='/'>Sami</Link></h1>
        </div>
    )
}
export default Header