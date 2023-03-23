import { faBars, faFolder, faHouse, faUser, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Navbar = () => {

    const [itemSelected, setItemSelected] = useState(0);

    const effect = useRef(null)
    const lista = useRef(null)

    const clickButton = (position, selected) => {
        removeStyle(itemSelected)
        addStyled(selected)
        console.log(lista.current.children[0]);

        

        effect.current.style.transition = `.4s ease-out all`;
        effect.current.style.transform = `translateX(${position}px)`
    }

    const addStyled = (i) => {
        setItemSelected(i)
        const elemento = lista.current.children[i]
        elemento.style.bottom = '1rem'
        elemento.style.background = '#FAB700'
    }

    const removeStyle = (i) => {
        const elemento = lista.current.children[i]
        elemento.style.bottom = '0'
        elemento.style.background = 'transparent'
    }

    useEffect(() => {
        addStyled(itemSelected) 
        
    }, [])



    return (
        <Container>
           <menu>
                <ul ref={lista}>
                    <li className={`${itemSelected === 'bars' ? 'active' : ''}`} onClick={() => {clickButton(0, 0)}}>
                        <a href="#"><FontAwesomeIcon icon={faBars}/></a>
                    </li>
                    <li className={`${itemSelected === 'home' ? 'active' : ''}`} onClick={() => {clickButton(50, 1)}}>
                        <a href="#"><FontAwesomeIcon icon={faHouse}/></a>
                    </li>
                    <li className={`${itemSelected === 'works' ? 'active' : ''}`} onClick={() => {clickButton(100, 2)}}>
                        <a href="#"><FontAwesomeIcon icon={faFolder}/></a>
                    </li>
                    <li className={`${itemSelected === 'about' ? 'active' : ''}`} onClick={() => {clickButton(150, 3)}}>
                        <a href="#"><FontAwesomeIcon icon={faUser}/></a>
                    </li>
                    <li className={`${itemSelected === 'services' ? 'active' : ''}`} onClick={() => {clickButton(200, 4)}}>
                        <a href="#"><FontAwesomeIcon icon={faWrench}/></a>
                    </li>
                    <div className="effectContainer" ref={effect}></div>
                </ul>
           </menu>
        </Container>
    )
}

export default Navbar

const Container = styled.header`
    background-color: ${props => props.theme.primary};
    height: 100vh;
    width: 100%;
    
    menu{
        background-color: ${props => props.theme.black};
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem 0;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        .effectContainer{
            position: absolute;
            background-color: ${props => props.theme.black};
            width: 100px;
            height: 50px;
            z-index: 2;
            left: -25px;
            top: -1.7rem;
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
        }
        
        ul{
            box-sizing: border-box;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;

            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            
            li{
                font-size: 1.3rem;
                /* padding: 1rem; */
                height: 50px;
                width: 50px;
                position: relative;
                z-index: 3;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                transition: bottom .3s ease-out, background-color .5s ease-out;
                
                a{
                    color: #fff;
                }
                
                /* &.active{
                    bottom: 1rem;
                    background-color:  ${props => props.theme.yellow};
                } */
            }
        }
    }

`