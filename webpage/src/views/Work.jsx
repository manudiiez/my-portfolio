import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import Header from '../partials/work/Header'
import Links from '../partials/work/Links'
import Technologies from '../partials/work/Technologies'
import Contact from '../partials/index/Contact'
import Footer from '../components/footer/Footer'

/* ----------------------------------- IMG ---------------------------------- */

// RUCA TEXTIL
import rucaTextil1 from '../img/work-ruca-textil.png'
import rucaTextil2 from '../img/work-ruca-textil2.png'
import rucaTextilDesktop from '../img/work-ruca-textil-desktop.png'
import rucaTextilMobile from '../img/work-ruca-textil-mobile.png'

// CIVITA
import civita1 from '../img/work-civita.png'
import civita2 from '../img/work-civita2.png'
import civitaDesktop from '../img/work-ruca-textil-desktop.png'
import civitaMobile from '../img/work-ruca-textil-mobile.png'

const items = [
    {
        id: 1,
        cover: rucaTextil1,
        cover2: rucaTextil2,
        desktop: rucaTextilDesktop,
        mobile: rucaTextilMobile,
        links: {
            github: 'https://github.com/manudiiez/ruca-textil',
            demo: 'https://manudiiez.github.io/ruca-textil/',
            figma: 'https://www.figma.com/file/vl8dW1EkJUI6w1pokz0Fr9/Ruca-Textil?node-id=1%3A7&t=glhJVCJCbqVnvkEw-1',
        },
        title: 'Ruca Textil',
        backtitle: 'Website',
        category: 'Business websites',
        technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'Framer Motion'],
        description : "The project was to develop a website with a team focused on meeting client expectations. The main objective was to create an attractive, easy-to-use platform that offered a satisfactory user experience. The team worked collaboratively to design and develop the website, ensuring that it met the client's requirements and needs."
    },
    {
        id: 2,
        cover: civita1,
        cover2: civita2,
        desktop: civitaDesktop,
        mobile: civitaMobile,
        links: {
            github: 'https://github.com/manudiiez/civita',
            demo: 'http://civita.com.ar/',
            figma: 'https://www.figma.com/file/wLoOy5in3GshFgV9xiAtZu/civita?node-id=0%3A1&t=glhJVCJCbqVnvkEw-1',
        },
        title: 'Civita',
        backtitle: 'Website',
        category: 'Business websites',
        technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Swiperjs'],
        description : "The project was to develop a website with a team focused on meeting client expectations. The main objective was to create an attractive, easy-to-use platform that offered a satisfactory user experience. The team worked collaboratively to design and develop the website, ensuring that it met the client's requirements and needs."
    },
]

const Work = () => {

    const { id } = useParams()
    return (
        <Container>
            <Header data={items[id-1]} />
            <Technologies data={items[id-1].technologies} />
            <Links links={items[id-1].links} />
            <Contact />
            <Footer />
        </Container>
    )
}

export default Work

const Container = styled.div`
  display: flex;
  flex-direction: column;
`