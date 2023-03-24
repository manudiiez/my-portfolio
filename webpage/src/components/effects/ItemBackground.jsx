import React from 'react'
import styled from 'styled-components'

const ItemBackground = () => {
    return (
        <Container>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 28 }}></span>

        </Container>
    )
}

export default ItemBackground

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: fit-content;
    height: 100vh;

    display: flex;
    overflow: hidden;
    span{
        position: relative;
        width: 10px;
        height: 10px;
        background-color: ${props => props.theme.primary};
        margin: 0 4px;
        border-radius: 50%;
        box-shadow: 0 0 0 10px ${props => props.theme.primaryShadow}, 0 0 50px ${props => props.theme.primary}, 0 0 100px ${props => props.theme.primary};
        animation: animate 15s linear infinite;
        animation-duration: calc(200s / var(--i));
        &:nth-of-type(even){
            background-color: ${props => props.theme.black};
            box-shadow: 0 0 0 10px ${props => props.theme.secondaryShadow}, 0 0 50px ${props => props.theme.black}, 0 0 100px ${props => props.theme.black};
        }
    }

    @keyframes animate {
        0%{
            transform: translateY(100vh) scale(0);
        }
        100%{
            transform: translateY(-10vh) scale(1);
        }
    }
    /* @keyframes animate {
        0%{
            transform: translateY(100vh) scale(0);
        }
        50%{
            transform: translateY(45vh) scale(1);
        }
        100%{
            transform: translateY(-10vh) scale(0);
        }
    } */

`