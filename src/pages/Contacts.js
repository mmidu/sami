import React, { Component } from 'react'
import Footer from '../components/Footer'
import TextLayout from '../components/TextLayout'

class Contacts extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <TextLayout>
                <div className="txtContacts">
                    GOT QUESTIONS?
                    <span>Let's talk</span>
                    <ul>
                        <li>Email:<a href="mailto:samischinaia@gmail.com">samischinaia@gmail.com</a></li>
                        <li>IG: <a target="_blank" href="https://www.instagram.com/alwaysthesam/" rel="noreferrer">Alwaysthesam</a></li>
                    </ul>
                    <span>Partner and creative director</span>
                    <ul>
                        <li><a href="https://hipcool.studio/" target="_blank" rel="noreferrer">@ hipcool.studio</a></li>
                    </ul>
                    <span>Films i like</span>
                    <ul>
                        <li><a href="https://www.instagram.com/bestindependentfilms/" target="_blank" rel="noreferrer">@ bestindependentfilms</a></li>
                    </ul>
                </div>
            </TextLayout>
        )
    }
}

export default Contacts