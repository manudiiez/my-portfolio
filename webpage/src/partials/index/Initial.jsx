import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'


const Initial = () => {

    const [state, setState] = useState(false);

    const elementHeader = useRef(null)

    const handleScroll = (event) => {
        const header = elementHeader.current;
        header.classList.toggle('sticky', window.scrollY > 0)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <Container className='container'>
            <header ref={elementHeader} className='container-lg'>
                <a href="#!" className='logo'>Brand.</a>
                <nav>
                    <FontAwesomeIcon icon={faLanguage} className='icon'/>
                    <ul>
                        <li><a href="#!">Spanish</a></li>
                        <li><a href="#!">English</a></li>
                    </ul>
                </nav>
            </header>
        </Container>
    )
}

export default Initial

const Container = styled.div`
    padding-bottom: 0!important;
    padding-top: 0!important;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.dark};
  
    header{
        box-sizing: border-box;
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 80vh;
        background-color: ${props => props.theme.dark};
        display: flex;
        justify-content: flex-end;
        align-items: center;
        transition: 1s;
        
        &.sticky{
            height: 80px;
            
            .logo{
                box-sizing: border-box;
                position: absolute;
                font-size: 2em;
                left: 0;
                transform: translate(0, -50%)
            }

            .icon{
                transform: translateX(0);
                opacity: 1;
                transition-delay: 0.75s;
            }
            nav{
                ul{
                transform: translateX(0);
                opacity: 1;
                transition-delay: 0.75s;
                }
            }
        }

        .logo{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 15vw;
            color: ${props => props.theme.white};
            font-weight: 700;
            transition: 1s;
            text-decoration: none;
            z-index: 1;
        }

        nav{
            position: relative;
            display: flex;
            z-index: 1;
            .icon{
                display: none;
                opacity: 0;
                transition: 0.25s;
                transform: translateX(-100px);
            }
            ul{
                position: relative;
                display: flex;
                transition: 0.25s;
                transform: translateX(-100px);
                opacity: 0;
                li{
                    list-style: none;
                    a{
                        color: #fff;
                        display: inline-block;
                        padding: 10px 15px;
                        font-size: 1.2em;
                        text-decoration: none;

                        &:hover{
                            color: ${props => props.theme.primary};
                        }

                    }
                }
            }

            @media (max-width: 400px) {
                .icon{
                    display: block;
                    position: relative;
                    color: ${props => props.theme.white};
                    font-size: 2rem;
                }
                ul{
                    display: none;
                }
            }
        }

    }


`