import React from 'react'
import styled from 'styled-components'
import FormContainer from '../../components/form/FormContainer'
import Title from '../../components/title/Title'
import { Text } from '../../styles/global'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import Sidebar from '../../components/sidebar/Sidebar'



const Contact = () => {
  return (
    <Container className='container' id='contact'>
        <div className="container-lg">
            <Title titulo='GET IN TOUCH' backTitulo='CONTACT' />
            <div className="content">
                <Sidebar section='contact'/>
                <FormContainer/>
                <div className="medias">
                    <p>Info</p>
                    <ul>
                        <li>
                            <a href="!#">
                                <FontAwesomeIcon icon={faEnvelope}/>
                                {/* <h6>manudiiez123@gmail.com</h6> */}
                            </a>
                        </li>
                        <li>
                            <a href="!#">
                                <FontAwesomeIcon icon={faWhatsapp}/>
                                {/* <h6>2615398384</h6> */}
                            </a>
                        </li>
                        <li>
                            <a href="!#">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                                {/* <h6>Manuel Diez de Oñate</h6> */}
                            </a>
                        </li>
                        <li>
                            <a href="!#">
                                <FontAwesomeIcon icon={faGithub}/>
                                {/* <h6>manudiiez</h6> */}
                            </a>
                        </li>
                        <li>
                            <button>CV</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Contact

const Container = styled.section`
    
    .container-lg{
        .content{
            width: 100%;
            margin-top: 10rem;
            display: grid;
            grid-template-columns: calc(60% - 2.5rem) calc(40% - 2.5rem);
            gap: 5rem;
            position: relative;
            .medias{
                background-color: ${props => props.theme.black};
                padding: 3rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: relative;
                
                &:before{
                    content: '';
                    position: absolute;
                    top: -20px;
                    left: -20px;

                    width: 40px;
                    height: 40px;
                    background-color: ${props => props.theme.yellow};
                }

                &:after{
                    content: '';
                    position: absolute;
                    top: -5%;
                    right: 3rem;
                    z-index: -1;

                    width: 20%;
                    height: 110%;
                    background-color: ${props => props.theme.yellow};
                }


                p{
                    ${Text({ size: '2rem', color: props => props.theme.white, weight: '700' })};
                    margin-bottom: 3rem;
                    text-align: center;
                }
                ul{
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 1rem;
                    li{
                        a{
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 3rem;
                            padding: 1rem 0;
                            svg{
                                ${Text({ size: '1.6rem', color: props => props.theme.white, weight: '400' })};
                            }
                            h6{
                                ${Text({ size: '1.3rem', color: props => props.theme.white, weight: '400' })};
                            }
                            
                            &:hover{
                                background-color: ${props => props.theme.dark};
                                svg{
                                    color: ${props => props.theme.yellow};
                                }
                            }
                        }
                        
                        button{
                            background-color: ${props => props.theme.dark};
                            border: 0;
                            ${Text({ size: '1rem', color: props => props.theme.white, weight: '300' })};
                            width: 100%;
                            padding: 1rem;
                            cursor: pointer;
                            &:hover{
                                color: ${props => props.theme.yellow};
                            }
                        }
                    }
                }

            }
        }

        @media (max-width: 950px) {
            .content{
                grid-template-columns: 1fr;
                grid-template-rows: repeat(2, 1fr);
            }
        } 

        @media (max-width: 550px) {
            .content{
                grid-template-columns: 1fr;
                grid-template-rows: repeat(2, 1fr);
                .medias{
                    p{
                        ${Text({ size: '1.5rem', color: props => props.theme.white, weight: '700' })};
                        margin-bottom: 2rem;
                    }
                }
            }
        } 
    }


`