import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import React from 'react'
import styled from 'styled-components'
import { Text } from '../../styles/global'

const Footer = () => {
  return (
    <Container className='container'>
        <div className="container-lg">
            <h6>manudiiez</h6>
            <ul>
                <li>
                    <a href="!#">Home</a>
                </li>
                <li>
                    <a href="!#">Projects</a>
                </li>
                <li>
                    <a href="!#">About</a>
                </li>
                <li>
                    <a href="!#">Services</a>
                </li>
                <li>
                    <a href="!#">Contact</a>
                </li>
            </ul>
            <div>
                <a href="!#">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="!#">
                    <FontAwesomeIcon icon={faWhatsapp}/>
                </a>
                <a href="!#">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>

            </div>
        </div>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
    background-color: ${props => props.theme.black};
    padding: 5rem 10rem;

    @media (max-width: 550px) {
        padding: 5rem 2rem;
    }
    .container-lg{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        h6{
            ${Text({ size: '1.5rem', color: props => props.theme.yellow, weight: '400' })};
        }
        ul{
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            li{
                a{
                    text-decoration: none;
                    ${Text({ size: '1rem', color: props => props.theme.white, weight: '400' })};
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
        div{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 2rem;
            a{
                ${Text({ size: '1.5rem', color: props => props.theme.white, weight: '400' })};
                &:hover{
                    color: ${props => props.theme.yellow};
                }
            }
        }
    }

    @media (max-width: 950px) {
        .container-lg{
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 1fr);
            align-items: center;
            justify-items: center;
            gap: 3rem;

            div{
                align-items: center;
            }
        }
    }
    @media (max-width: 580px) {
        .container-lg{
            ul{
                flex-direction: column;
            }
        }
    }
`