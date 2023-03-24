import { faAngleLeft, faBars, faComment, faFolder, faHouse, faUser, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { themeContext } from '../../context/themeModeContext'
import { Text } from '../../styles/global'

const Navbar = () => {

    const [itemSelected, setItemSelected] = useState(0);
    const [menuState, setMenuState] = useState(false);
    const { themeToggler } = useContext(themeContext);


    const effect = useRef(null)
    const lista = useRef(null)

    const clickButton = (position, selected) => {
        themeToggler(selected+1)
        removeStyle(itemSelected)
        addStyled(selected)
        console.log(lista.current.children[0]);



        effect.current.style.transition = `.4s ease-out all`;
        effect.current.style.transform = `translateX(${position}px)`
    }

    const addStyled = (i) => {
        setItemSelected(i)
        const elemento = lista.current.children[i]
        elemento.className = 'active'
        elemento.style.bottom = '1rem'
        // elemento.style.background = '#FAB700'
    }
    
    const removeStyle = (i) => {
        const elemento = lista.current.children[i]
        elemento.className = ''
        elemento.style.bottom = '0'
        // elemento.style.background = 'transparent'
    }

    useEffect(() => {
        addStyled(itemSelected)

    }, [])



    return (
        <Container>
            <menu className={`${menuState ? 'active': ''}`}>
                <div className='bars' onClick={() => {setMenuState(!menuState)}}>
                    {
                        menuState ? (
                            <FontAwesomeIcon icon={faAngleLeft} />
                        ):(
                            <FontAwesomeIcon icon={faBars} />
                        )
                    }
                </div>
                <ul ref={lista}>
                    <li className={`${itemSelected === 'home' ? 'active' : ''}`}>
                        <a href="#home" onClick={() => { clickButton(0, 0) }}><FontAwesomeIcon icon={faHouse} /></a>
                    </li>
                    <li className={`${itemSelected === 'works' ? 'active' : ''}`} >
                        <a href="#projects" onClick={() => { clickButton(50, 1) }} ><FontAwesomeIcon icon={faFolder} /></a>
                    </li>
                    <li className={`${itemSelected === 'about' ? 'active' : ''}`} >
                        <a href="#about" onClick={() => { clickButton(100, 2) }}><FontAwesomeIcon icon={faUser} /></a>
                    </li>
                    <li className={`${itemSelected === 'services' ? 'active' : ''}`}>
                        <a href="#services" onClick={() => { clickButton(150, 3) }}><FontAwesomeIcon icon={faWrench} /></a>
                    </li>
                    <li className={`${itemSelected === 'contact' ? 'active' : ''}`}>
                        <a href="#contact" onClick={() => { clickButton(200, 4) }}><FontAwesomeIcon icon={faComment} /></a>
                    </li>
                    <div className="effectContainer" ref={effect}></div>
                </ul>
            </menu>
        </Container>
    )
}

export default Navbar

const Container = styled.header`
    menu{
        background-color: ${props => props.theme.black};
        position: fixed;
        z-index: 100;
        bottom: 0;
        left: -100%;
        width: 100%;
        padding: 1rem 0;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: left .4s ease-out;

        &.active{
            left: 0;
            .bars{
                height: 100%;
                border-radius: 0;
                display: flex;
                justify-content: center; align-items: center;
                right: 0;
                top: 50%;
                padding: 0;
                padding: 0 .5rem;
                background-color: ${props => props.theme.primaryShadow};
            }

        }

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

        .bars{
            transition: all .4s ease-in-out;
            position: absolute;
            z-index: 200;
            right: -4.5rem;
            top: 30%;
            transform: translateY(-50%);
            background-color: ${props => props.theme.black};
            padding: 1rem;
            border-radius: 50%;
            svg{
                ${Text({ size: '2rem', color: props => props.theme.primary, weight: '400' })};
            }
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
                
                &.active{
                    /* bottom: 1rem; */
                    background-color:  ${props => props.theme.primary};
                }
            }
        }
    }

    @media (min-width: 550px) {
        display: none;
    }

`