import React from 'react'
import styled from 'styled-components'
import Title from '../../components/title/Title'
import Sidebar from '../../components/sidebar/Sidebar'
import { Text } from '../../styles/global'
/* ------------------------------ REACT-REVEAL ------------------------------ */
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <Container className='container' id='about'>
            <div className="container-lg">
                <Title titulo='ABOUT ME' backTitulo='README' />
                <div className="content">
                    <Sidebar section='about' />
                    <div className="info">
                        <Fade left distance='10%'>
                            <div className="img"></div>
                        </Fade>
                        <Fade right distance='10%'>
                            <div className="text">
                                <h3>I'm a full stack developer with a passion for coding and a strong desire to learn. I may not have years of experience, but I have a willingness to learn and a drive to succeed. I'm excited to take on new challenges and to continue growing as a developer.</h3>
                                <div>
                                    <p>Summary of soft skills</p>
                                    <ul>
                                        <li>
                                            <h3>Problem-solving</h3>
                                        </li>
                                        <li>
                                            <h3>Teamwork</h3>
                                        </li>
                                        <li>
                                            <h3>Communication</h3>
                                        </li>
                                        <li>
                                            <h3>Time management</h3>
                                        </li>
                                        <li>
                                            <h3>Adaptability</h3>
                                        </li>
                                    </ul>
                                </div>
                                <h3>I am always eager to learn new technologies and trends, and I am committed to using my skills and experience to help businesses achieve their goals through effective website development. </h3>
                                <h3>In my free time, I like to go to the gym to stay in shape, read science fiction books, and watch movies at the cinema. These hobbies help me maintain a creative and fresh mindset for my projects.</h3>
                            </div>
                        </Fade>
                    </div>
                    <Fade bottom distance='10%'>

                        <div className="skills">
                            <ul>
                                <li>
                                    <h4>HTML</h4>
                                </li>
                                <li>
                                    <h4>JavaScript</h4>
                                </li>
                                <li>
                                    <h4>CSS</h4>
                                </li>
                                <li>
                                    <h4>SASS</h4>
                                </li>
                                <li>
                                    <h4>ReactJs</h4>
                                </li>
                                <li>
                                    <h4>NodeJs</h4>
                                </li>
                                <li>
                                    <h4>MongoDB</h4>
                                </li>
                                <li>
                                    <h4>MySQL</h4>
                                </li>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </div>
        </Container>
    )
}

export default About

const Container = styled.div`

.container-lg{
        display: flex;
        flex-direction: column;
        gap: 10rem;
        
        .content{
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 10rem;

        }
        .info{
            position: relative;
            display: flex;
            justify-content: end;
            align-items: center;
            padding: 5rem 0;
            .img{
                z-index: 1;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 57%;
                
                background: ${props => props.theme.black};
                background: linear-gradient(90deg, ${props => props.theme.black} 0%, ${props => props.theme.dark} 100%); 
                z-index: 1;
            }
            .text{
                position: relative;
                z-index: 2;
                width: 64%;
                line-height: 164.02%;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                gap: 2rem;

                h3{
                    ${Text({ size: '1rem', color: props => props.theme.white, weight: '300' })};
                }
                
                div{
                    padding: 2rem 0;
                    width: 100%;
                    p{
                        ${Text({ size: '1rem', color: props => props.theme.white, weight: '300' })};
                    }
                    ul{
                        margin-top: 2rem;
                        width: 100%;
                        list-style: none;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 1rem;
                        flex-wrap: wrap;
                        li{
                            h3{
                                transition: color .15s linear;
                                ${Text({ size: '1rem', color: props => props.theme.primary, weight: '700' })};
                            }
                        }

                    }
                }
            }
        }

        .skills{
            ul{
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                li{
                    padding: 1rem 0;
                    border-bottom: 2px solid ${props => props.theme.primary};
                    transition: border .15s linear;
                    h4{
                        ${Text({ size: '1rem', color: props => props.theme.white, weight: '300' })};
                    }
                }
            }
        }
        @media (max-width: 850px) {
            .info{
                .img{
                    z-index: 1;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 27%;
                    width: 100%;
                    
                    background: ${props => props.theme.black};
                    background: linear-gradient(180deg, rgba(41,43,41,1) 0%, rgba(17,17,17,1) 100%); 
                    z-index: 1;
                }
                .text{
                    margin-top: 15rem;
                    width: 100%;
                    text-align: center;
                }
            }
            
        }

        @media (max-width: 550px) {
            .info{
                .text{
                    div{
                        ul{
                            flex-direction: column;
                        }
                    }
                }
            }

            .content{
                gap: 0rem;
            }

            .skills{
                margin-top: 5rem;

                ul{
                    li{
                        text-align: center;
                    }
                }
            }
        }
    }


`