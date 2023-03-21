import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar/Sidebar'
import { Text } from '../../styles/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import Effect from '../../components/effects/Effect'

const Header = () => {
    return (
        <Container className='container' id='home'>
            <Effect/>
            <div className="container-lg">
                <Sidebar section='home'/>
                <div className='image'>

                </div>
                <div className="text">
                    <h1>I'M MANUEL DIEZ DE OÑATE</h1>
                    <h2>FULL STACK DEVELOPER</h2>
                    <p>Crafting digital solutions with passion, precision, and a desire to make a difference in the world</p>
                    <ButtonCinco className='boton'>
                        <div className="icono">
                            <FontAwesomeIcon icon={faAngleDoubleRight}/>
                        </div>
                        <span className='buttonText'>MORE ABOUT ME</span>
                        <span className='buttonText buttonText--hidden'>GO</span>
                    </ButtonCinco>
                </div>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.section`
    padding: 5rem 10rem;
    position: relative;

    .container-lg{
        display: flex;
        flex-direction: row;
        justify-content: center; 
        align-items: center;
        gap: 10rem;

        .image{
            width: 100%;
            max-width: 400px;
            height: 400px;
            background-color: ${props => props.theme.gray};
        }

        .text{
            h1{
                ${Text({ size: '3rem', color: props => props.theme.yellow, weight: '700' })};
            }
            h2{
                margin-top: 1rem;
                margin-bottom: 3rem;
                ${Text({ size: '3rem', color: props => props.theme.white, weight: '700' })}
            }
            
            p{
                ${Text({ size: '1rem', color: props => props.theme.gray, weight: '300' })}
                width: 100%;
                max-width: 500px;
                line-height: 170%;
                margin-bottom: 3rem;
            }
            
        }
    }

    @media (max-width: 1400px) {
        .container-lg{
            .text{
                h1{
                    ${Text({ size: '2.5rem', color: props => props.theme.yellow, weight: '700' })};
                }
                h2{
                    ${Text({ size: '2.5rem', color: props => props.theme.white, weight: '700' })}
                }
                
                p{
                    ${Text({ size: '1rem', color: props => props.theme.gray, weight: '300' })}
                }
                
            }
        }
    }

    @media (max-width: 1100px) {
        .container-lg{
            gap: 5rem;
        }
    }
    
    @media (max-width: 900px) {
        .container-lg{
            gap: 3rem;
        }
    }
    
    @media (max-width: 850px) {
        .container-lg{
            gap: 5rem;
            flex-direction: column-reverse;
            .text{
                text-align: center
            }
        }
    }

    @media (max-width: 550px) {
        padding: 2rem;
        .container-lg{
            .text{
                h1{
                    ${Text({ size: '2rem', color: props => props.theme.yellow, weight: '700' })};
                }
                h2{
                    ${Text({ size: '2rem', color: props => props.theme.white, weight: '700' })}
                }
                
                p{
                    ${Text({ size: '1rem', color: props => props.theme.gray, weight: '300' })}
                }
                
                button{
                    ${Text({ size: '1rem', color: props => props.theme.dark, weight: '700' })};
                }
            }
        }
    }

`



const ButtonCinco = styled.button`

    display: inline-flex;
    height: 40px;
    width: 100%;
    max-width: 240px;
    background-color: ${props => props.theme.yellow};
    color: #fff;
    ${Text({ size: '1rem', color: props => props.theme.dark, weight: '700' })};
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: .3s ease all;
    border-radius: 30px;
    position: relative;
    overflow: hidden;

    span{
        z-index: 2;
        transition: .4s all ease-in-out;
        position: absolute!important;
        left: 50%!important;
        transform: translateX(-50%)
    }

    .buttonText--hidden{
        opacity: 0;
    }

    .icono{
        display: flex;
        align-items: center;
        position: absolute;
        z-index: 2;
        left: -40px;
        transition: .3s ease-in-out all;
        opacity: 0;
        svg{
            font-size: 1.5rem;
            color: ${props => props.theme.yellow};
        }
    }
    
    &:hover{

        background-color: ${props => props.theme.white};

        span{
            left: 40px!important;
            
        }

        .buttonText{
            opacity: 0;
        }
        .buttonText--hidden{
            opacity: 1;
        }

        .icono{
            left: calc(100% - 50px);
            opacity: 1;
        }
    }


`
