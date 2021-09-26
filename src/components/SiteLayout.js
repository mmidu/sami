import React from 'react'
import Header from './Header'
import Navigation from './Navigation'

const SiteLayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='sideSx'>
                <Header />
                <Navigation />
            </div>
            <div className='sideDx'>
                <main>{children}</main>
            </div>
        </React.Fragment>
    )
}
export default SiteLayout