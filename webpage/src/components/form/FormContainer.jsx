import React from 'react'
import styled from 'styled-components'
import { Text } from '../../styles/global'

const FormContainer = () => {
    return (
        <Container>
            <p>Feel free to contact me any time.  I will get back to you as soon as I can</p>

            <div className="form">
                <div>
                    <input type="text" name='name' placeholder=' ' />
                    <label htmlFor="name">Name</label>
                </div>
                <div>
                    <input type="email" name='email' placeholder=' ' />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <textarea name="message" placeholder=' '></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <button type='submit'>SEND</button>
            </div>
        </Container>
    )
}

export default FormContainer

const Container = styled.div`
    p{
        ${Text({ size: '1.5rem', color: props => props.theme.white, weight: '400' })};
        width: 100%;
        line-height: 164.02%;
        margin-bottom: 5rem;
    }
    .form{
        div{
            position: relative;
            padding: 15px 0 0;
            margin-top: 10px;
            width: 100%;

            input, textarea{
                position: relative;
                z-index: 2;
                width: 100%;
                height: 50px;
                border: none;
                border-bottom: 1px solid ${props => props.theme.white};
                outline: 0;
                ${Text({ size: '1rem', color: props => props.theme.white, weight: '300' })};
                background: transparent;
                transition: border-color 0.2s;

                &::placeholder{
                    color: transparent;
                }

                &:not(:placeholder-shown){
                    ~ label{
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        transition: 0.2s;
                        ${Text({ size: '1rem', color: props => props.theme.white, weight: '300' })};
                    }
                }

                &:focus{
                    border-bottom: 1px solid ${props => props.theme.yellow};

                    ~ label{
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        transition: 0.2s;
                        ${Text({ size: '1rem', color: props => props.theme.yellow, weight: '300' })};
                    }

                }


                &:required,&:invalid { box-shadow:none; }
            }

            textarea{
                &:focus{
                    top: 10px;
                }
            }

            label{
                z-index: 1;
                position: absolute;
                top: 25px;
                left: 1rem;
                display: block;
                transition: 0.2s;
                ${Text({ size: '1.3rem', color: props => props.theme.white, weight: '400' })};

            }
        }

        button{
            width: 100%;
            margin-top: 3rem;
            height: 4rem;
            background-color: ${props => props.theme.black};
            border: 0;
            ${Text({ size: '1.3rem', color: props => props.theme.white, weight: '300' })};
            letter-spacing: 0.5rem;
            cursor: pointer;
        }
    }

    @media (max-width: 550px) {
        p{
            ${Text({ size: '1.3rem', color: props => props.theme.white, weight: '400' })};
            text-align: center;
        }

`