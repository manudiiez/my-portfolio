import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar/Sidebar'
import Slider from '../../components/slider/Slider'
import Title from '../../components/title/Title'
import SliderWork from '../../components/slider/SliderWork'
/* ----------------------------------- img ---------------------------------- */
import civita1 from '../../img/work-civita.png'
import civita2 from '../../img/work-civita2.png'
import rucaTextil1 from '../../img/work-ruca-textil.png'
import rucaTextil2 from '../../img/work-ruca-textil2.png'
import incienso1 from '../../img/work-incienso.png'
import incienso2 from '../../img/work-incienso2.png'

const items = [
  [
    {
      id: 1,
      img: rucaTextil1,
      img2: rucaTextil2,
      title: 'Ruca Textil',
      category: 'Business websites',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Swiperjs'],
    },
    {
      id: 1,
      img: rucaTextil1,
      img2: rucaTextil2,
      title: 'Ruca Textil',
      category: 'Business websites',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Swiperjs'],
    },
  ],
  [
    {
      id: 2,
      img: civita1,
      img2: civita2,
      title: 'Civita',
      category: 'Business websites',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Swiperjs'],
    },
    {
      id: 2,
      img: civita1,
      img2: civita2,
      title: 'Civita',
      category: 'Business websites',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Swiperjs'],
    },
  ],
  [
    {
      id: 3,
      img: incienso1,
      img2: incienso2,
      title: 'Incineso',
      category: 'Business websites',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Swiperjs'],
    },
    {
      id: 3,
      img: incienso1,
      img2: incienso2,
      title: 'Incineso',
      category: 'Business websites',
      technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'Swiperjs'],
    },
  ],
]

const Projects = () => {
  return (
    <Container className='container' id='projects'>
      <div className="container-lg">
        <Title titulo='SELECTED PROJECTS' backTitulo='WORKS' />
        <Sidebar section={'projects'} />
        <Slider items={items} >
          {
            items.map((slide, index) => (
              <SliderItem key={`a-${index}`}>
                {
                  slide.map((project, index2) => (
                    <SliderWork project={project} key={`b-${index2}`} />
                  ))
                }
              </SliderItem>
            ))
          }
        </Slider>
      </div>
    </Container>
  )
}

export default Projects

const Container = styled.section`
  .container-lg{
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }

`

const SliderItem = styled.div`
    width: 100%;  
    height: 100%;
    display: grid;
    grid-template-rows: repeat(2, 400px);
    gap: 70px;
    .item{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;

            &.mobile{
                display: none;
            }
        }

        .text{
            position: absolute;
            bottom: -40%;
            left: 0;
            background-color: rgba(17, 17, 17, 0.8);
            width: 100%;
            height: 40%;
            transition: bottom .4s ease-in-out;
            &.active{
                bottom: 0;
            }
        }

    }

    @media (max-width: 850px) {
        .item{
            img{
                &.mobile{
                    display: block;
                }
                
                &.desktop{
                    display: none;
                }
            }
        }
    }
`
