import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    const [className, setClassName] = useState('')

    const elements = [
        'works',
        'about',
        'contacts'
    ]

    useEffect(() => {
        setClassName('shown')
        // return () => console.log('unmount')
    }, [])

    return (
        <nav className='lateral'>
            <ul>
                {
                    elements.map((elem, index) => {
                        return <li key={index} className={elements[index]  + ' ' + className}><Link to={'/' + elem}>{elem.charAt(0).toUpperCase() + elem.slice(1)}</Link></li>
                    })
                }
            </ul>
        </nav>
    )
}
export default Navigation