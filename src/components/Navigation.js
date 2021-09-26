import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <nav className='lateral'>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>
        </nav>
    )
}
export default Navigation