import React from 'react'
import styled from 'styled-components'
import { Text } from '../../styles/global'

const Title = ({titulo, backTitulo, letter}) => {
  return (
    <Container>
        <p className='title'>{titulo}</p>
        <p className='back'>{backTitulo}</p>
    </Container>
  )
}

export default Title

const Container = styled.section`

    position: relative;
    text-align: center;

    .title{
        ${Text({ size: '3rem', color: props => props.theme.white, weight: '800' })};
        position: relative;
        z-index: 1;
        text-transform: uppercase;
    }
    .back{
        ${Text({ size: '6rem', color: props => props.theme.black, weight: '800' })};
        letter-spacing:.8rem;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    @media (max-width: 1400px) {
        .title{
            ${Text({ size: '2.5rem', color: props => props.theme.white, weight: '800' })};
        }
        .back{
            ${Text({ size: '5rem', color: props => props.theme.black, weight: '800' })};
        }
    }
    
    @media (max-width: 550px) {
        .title{
            ${Text({ size: '1.7rem', color: props => props.theme.white, weight: '800' })};
        }
        .back{
            letter-spacing:.5rem;
            ${Text({ size: '3.5rem', color: props => props.theme.black, weight: '800' })};
        }
    }
`