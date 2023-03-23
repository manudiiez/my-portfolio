import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar/Sidebar'
import Title from '../../components/title/Title'
import { Text } from '../../styles/global'
/* ------------------------------ REACT-REVEAL ------------------------------ */
import Zoom from 'react-reveal/Zoom';

const Services = () => {
    return (
        <Container className='container' id='services'>
            <div className="container-lg">
                <Title titulo='SERVICES' backTitulo='BENEFIT' />
                <div className="listServices">
                    <Sidebar section='services' />
                    <Zoom top opposite>
                        <div className='item'>
                            <h4>Responsive website design and development</h4>
                            <h5>Design and development of a custom and attractive website that meets your needs and business objectives.</h5>
                        </div>
                    </Zoom>
                    <Zoom top opposite>
                        <div className='item'>
                            <h4>Web Application Development</h4>
                            <h5>Development of a custom web application to meet your unique needs and provide you with the functionality you need.</h5>
                        </div>
                    </Zoom>
                    <Zoom bottom opposite>
                        <div className='item'>
                            <h4>Website Maintenance</h4>
                            <h5>Maintenance services to ensure your website is up-to-date and running smoothly.</h5>
                        </div>
                    </Zoom>
                    <Zoom bottom opposite>
                        <div className='item'>
                            <h4>Copywriting service</h4>
                            <h5>We create persuasive and effective content that connects with your audience and increases visits and sale s of your products or servicesl.</h5>
                        </div>
                    </Zoom>
                </div>
            </div>
        </Container>
    )
}

export default Services

const Container = styled.section`

    .listServices{
        position: relative;
        margin-top: 10rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 4rem;

        .item{
            background-color: ${props => props.theme.black};
            padding: 2rem;
            h4{
                ${Text({ size: '1.5rem', color: props => props.theme.primary, weight: '400' })};
                margin-bottom: 2rem;
                line-height: 164.02%;
                transition: color .15s linear;
            }
            h5{
                ${Text({ size: '1rem', color: props => props.theme.white, weight: '300' })};
                line-height: 164.02%;
            }
        }
    }

    @media (max-width: 1100px) {
        .listServices{
            gap: 3rem;
        }
    }

    @media (max-width: 950px) {
        .listServices{
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr);
        }
    }


    @media (max-width: 550px) {
        .listServices{
            .item{
                h4{
                    ${Text({ size: '1rem', color: props => props.theme.primary, weight: '400' })};
                    margin-bottom: 2rem;
                }
                h5{
                    ${Text({ size: '.8rem', color: props => props.theme.white, weight: '300' })};
                }
            }
        }
    }

`