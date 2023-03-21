import React from 'react'
import styled from 'styled-components';
import { Text } from '../../styles/global';

const Technologies = ({ data }) => {
    return (
        <Container>
            <div className='container-lg'>

                <h2>TECHNOLOGIES</h2>
                <ul>
                    {
                        data.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Container>
    )
}

export default Technologies

const Container = styled.section`
    padding: 0 10rem;
    padding-bottom: 10rem;
    
    h2{
        ${Text({ size: '2rem', color: props => props.theme.white, weight: '700' })};
    }
    
    
    ul{
        margin-top: 3rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        li{
            ${Text({ size: '1.5rem', color: props => props.theme.yellow, weight: '400' })};
        }
    }

    @media (max-width: 550px) {
        padding: 0rem 2rem;
        padding-bottom: 5rem;

        h2{
            ${Text({ size: '1.5rem', color: props => props.theme.white, weight: '700' })};
            text-align: center;
        }

        ul{
            align-items: center;
            li{
                font-size: 1.1rem;
            }
        }
    }

`