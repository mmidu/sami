import React, { Component } from 'react'
import {
    Route,
    BrowserRouter,
    Switch
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Works from './pages/Works'
import Work from './pages/Work'
import SiteLayout from './components/SiteLayout'
import TextLayout from './components/TextLayout'
import './Main.css'

class Main extends Component {
    render() {
        return (
            <BrowserRouter basename={'/cs/sami/'}>
                <Switch>
                    <Route path={['/about', '/works', '/contacts']}>
                            <Switch>
                                    <Route path='/works/:name' component={Work} />
                                    <Route exact path='/works' component={Works} />
                                    <Route path='/about' component={About} />
                                    <Route path='/contacts' component={Contacts} />
                            </Switch>
                    </Route>

                    <Route path={['/']}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                        </Switch>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Main
