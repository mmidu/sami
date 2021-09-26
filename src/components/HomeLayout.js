import React from 'react'
import Header from './Header'

const HomeLayout = ({isLandingVisible, children}) => {
    return (
        <React.Fragment>
            <div className='sideSx'>
                <Header isLandingVisible={isLandingVisible}/>
            </div>
            <main>{children}</main>
        </React.Fragment>
    )
}
export default HomeLayout