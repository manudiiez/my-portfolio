import React from 'react'
import styled from 'styled-components'

const ItemTextHover = () => {
  return (
    <Container>
        <h1>Hover Me</h1>
    </Container>
  )
}

export default ItemTextHover

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h1{

        position: relative;
        font-size: 5rem;
        
        &::before{
            content: " ";

            transform: scaleX(0);
            transform-origin: bottom right;

            display: block;
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            inset: 0 0 0 0;
            background: hsl(200 100% 80%);
            z-index: -1;
            transition: transform .3s ease;
        }
        
        &:hover{
            &::before{
                transform: scaleX(1);
                transform-origin: bottom left;
            }

        }
    }

`