import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Text } from '../../styles/global'


const Slider = ({ items, children }) => {

    const slideShows = useRef(null)
    const [pages, setPages] = useState(1);
    const [changing, setChanging] = useState(false);

    const siguiente = () => {
        setChanging(true)
        if (pages < items.length) {
            setPages(pages + 1)
        } else {
            setPages(1)
        }
        const primerElemento = slideShows.current.children[0]
        slideShows.current.style.transition = `.4s ease-out all`;
        slideShows.current.style.transform = `translateX(-${primerElemento.offsetWidth}px)`
        const transicion = () => {
            slideShows.current.style.transition = 'none';
            slideShows.current.style.transform = `translateX(0)`;
            slideShows.current.appendChild(primerElemento);
            slideShows.current.removeEventListener('transitionend', transicion);
        }
        slideShows.current.addEventListener('transitionend', transicion);
        setTimeout(() => {
            setChanging(false)
        }, 400);
    }

    const anterior = () => {
        setChanging(true)
        if (pages > 1) {
            setPages(pages - 1)
        } else {
            setPages(items.length)
        }
        const index = slideShows.current.children.length - 1;
        const ultimoElemento = slideShows.current.children[index];
        slideShows.current.insertBefore(ultimoElemento, slideShows.current.firstChild);

        slideShows.current.style.transition = 'none';
        const tamañoSlide = slideShows.current.children[0].offsetWidth;
        slideShows.current.style.transform = `translateX(-${tamañoSlide}px)`;

        setTimeout(() => {
            slideShows.current.style.transition = `.4s ease-out all`;
            slideShows.current.style.transform = `translateX(0)`;
        }, 30);
        setTimeout(() => {
            setChanging(false)
        }, 400);
    }

    return (
        <Container>
            <div className="sliderShows" ref={slideShows}>
                {children}
            </div>
            <Pagination>
                <button onClick={anterior} disabled={changing}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <div>
                    {
                        items.map((slide, index) => (
                            <button key={`c-${index}`} className={index + 1 === pages ? 'active' : ''}>{index + 1}</button>
                        ))
                    }
                </div>
                <button onClick={siguiente} disabled={changing}><FontAwesomeIcon icon={faChevronRight} /></button>
            </Pagination>
        </Container>
    )
}

export default Slider

const Container = styled.div`
    width: 100%;  
    overflow: hidden;
    .sliderShows{
        width: 300%;
        height: 870px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
    }
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem ;
    gap: 1rem;
    
    
    button{
        position: relative;
        background-color: ${props => props.theme.black};
        border: none;
        padding: .4rem .6rem;
        cursor: pointer;
        ${Text({ size: '1rem', color: props => props.theme.white, weight: '400' })};
        transition: background-color .2s ease-in-out;
        &.active{
            background-color: ${props => props.theme.white};

            ${Text({ size: '1rem', color: props => props.theme.black, weight: '400' })};
        }
        
        &:hover{
            background-color: ${props => props.theme.yellow};
        }
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .7rem; 
        button{
            cursor: default;
            &:hover{
                background-color: ${props => props.theme.black};
            }
        }
    }

`