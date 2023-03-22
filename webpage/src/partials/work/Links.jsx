import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Text } from '../../styles/global'
/* ------------------------------ REACT-REVEAL ------------------------------ */
import Fade from 'react-reveal/Fade';

const Links = ({links}) => {
    return (
        <Container>
            <div className="container-lg">
                <h3>LINKS TO THE PROJECT</h3>
                <div>
                    {
                        links.github && (<Fade top><a href={links.github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></Fade>)
                    }
                    {
                        links.figma && (<Fade top><a href={links.figma} target="_blank"><FontAwesomeIcon icon={faFigma} /></a></Fade>)
                    }
                    {
                        links.demo && (<Fade top><a href={links.demo} target="_blank">DEMO</a></Fade>)
                    }
                </div>
            </div>
        </Container>
    )
}

export default Links


const Container = styled.section`
    padding: 0 10rem;
    padding-bottom: 10rem;

    .container-lg{
        h3{
            ${Text({ size: '2rem', color: props => props.theme.white, weight: '700' })};
            margin-bottom: 3rem;
        }
        
        div{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            a{
                display: flex;
                justify-content: center;
                align-items: center;

                text-decoration: none;

                ${Text({ size: '2rem', color: props => props.theme.white, weight: '400' })};
                width: 100%;
                height: 60px;
                background-color: ${props => props.theme.black};
                border: 0;
                letter-spacing: 0.5rem;
                &:hover{
                    color: ${props => props.theme.yellow};
                }
            }
        }
    }

    @media (max-width: 550px) {
        padding: 0rem 2rem;
        padding-bottom: 5rem;

        .container-lg{
            h3{
                ${Text({ size: '1.5rem', color: props => props.theme.white, weight: '700' })};
                text-align: center;
            }

            div{
                a{
                    ${Text({ size: '1.5rem', color: props => props.theme.white, weight: '400' })};
                }
            }
        }
    }

`