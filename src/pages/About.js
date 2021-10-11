import React, { Component } from 'react'
import Footer from '../components/Footer'
import TextLayout from '../components/TextLayout'

class Stuff extends Component {
    render() {
        return (
            <TextLayout>
                <div className="txtAbout">
                    <p><b>Sami Schinaia</b>, born in 1989 and based in Milan. In <b>2009</b>, together with Ludovico Amen Galletti, he founded <a href="https://www.samendirector.com/" target="_blank" rel="noreferrer">SÄMEN</a>, an internationally successful film duo. The two began their career directing music videos: a path that led them to collaborate with some of the mainstream labels, such as Sony, Emi Music and Universal. <a href="https://www.samendirector.com/" target="_blank" rel="noreferrer">SÄMEN</a> duo quickly became a point of reference for the Italian and international advertising industry, working for brands such as IKEA, Nike, Bmw, Lamborghini, Vodafone, Greenpeace,
            and with prominent testimonials like Usain Bolt, Bebe Vio and Gianluigi Buffon. While maintaining the focus on advertising, since <b>2015</b> Sami has started to give more space to his passion for the world of cinema, directing several short films like <a href="https://vimeo.com/289057775" target="_blank" rel="noreferrer">RUMORI</a>, starring Matilda De Angelis and Andrea Arcangeli. <b>2021</b> marks an important milestone for Sami, splitting from the duo SÄMEN and pursue a more personal aesthetic.</p>
                </div>
                <Footer></Footer>
            </TextLayout>

        )
    }
}

export default Stuff