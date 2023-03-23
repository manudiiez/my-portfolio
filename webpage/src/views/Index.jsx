import React from 'react'
import styled from 'styled-components'
/* -------------------------------- SECTIONS -------------------------------- */
import Footer from '../components/footer/Footer'
import About from '../partials/index/About'
import Contact from '../partials/index/Contact'
import Header from '../partials/index/Header'
import Initial from '../partials/index/Initial'
import Projects from '../partials/index/Projects'
import Services from '../partials/index/Services'

const Index = () => {
  return (
    <Container className='scrollbar'>
      <Initial/>
      <Header/>
      <Projects/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </Container>
  )
}

export default Index

const Container = styled.div`
  display: flex;
  flex-direction: column;
`