import React from 'react'
import styled from 'styled-components'

const ItemButtonSubmit = () => {
  return (
    <Container>
        <button class="btn"><span>Submit</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62"/></button>
    </Container>
  )
}

export default ItemButtonSubmit

const Container= styled.div`
    position: absolute;
    width: 610px;
    height: 10px;
    left: 50%;
    top: 50%;
    margin: -100px 0 0 -300px;

    input, button, submit {
        border: none
    }

    button {
        border-width: 1px;
        width: 600px;
        height: 200px;
        border-radius: 100px;
        background: #fff;
        position: absolute;
        border: 5px solid #6fb07f;

        &:focus{
            animation: extend 1s ease-in-out;
            animation-fill-mode: forwards;
            span {
                animation: disappear 1s ease-in-out;
                animation-fill-mode: forwards;
            }

            img {
                animation: appear 1s ease-in-out;
                animation-fill-mode: forwards
            }
        }

        span {
            font-size: 48px;
            color: #6fb07f;
        }

        img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
            opacity: 0;
        }
    }

    @keyframes appear {
        0% {
            opacity: 0;
        } 70% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }

    @keyframes disappear {
        0% {
            opacity: 1;
        } 20% {
            color: #fff;
        } 100% {
            opacity: 0;
        }
    }

    @keyframes extend {
        0% {
            width: 600px;
            height: 200px;
            border-radius: 100px;
        } 10% {
            width: 610px;
            height: 210px;
            background: #fff;
            margin-left: - 5px;
            margin-top: - 5px;
        } 20% {
            width: 600px;
            height: 200px;
            background: #6fb07f;
            margin-left: 0px;
            margin-top: 0px;
        } 100% {
            width: 200px;
            height: 200px;
            border-radius: 100px;
            margin-left: 190px;
            background: #6fb07f;
        }
    }
    
`