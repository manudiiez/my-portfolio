import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from '../../styles/global';

const SliderWork = ({ project }) => {

    const [state, setState] = useState(false);

    return (
        <Container >
            <img className='desktop' onClick={() => { setState(!state) }} src={project.img} alt="" />
            <img className='mobile' onClick={() => { setState(!state) }} src={project.img2} alt="" />
            <div className={`text ${state ? 'active' : ''}`}>
                <div className='title'>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                </div>
                <div>
                    <ul>
                        {
                            project.technologies.map((tech, index) => (
                                <li key={`c-${index}`}>{tech}</li>
                            ))
                        }
                    </ul>
                    <ButtonA href={`/${project.id}`}><span>More about this</span></ButtonA>
                </div>
            </div>
        </Container>
    )
}

export default SliderWork

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img{
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;

        &.mobile{
            display: none;
        }
    }

    .text{
        position: absolute;
        bottom: -40%;
        left: 0;
        background-color: rgba(17, 17, 17, 0.85);
        width: 100%;
        height: 40%;
        transition: bottom .4s ease-in-out;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h3{
                ${Text({ size: '2rem', color: props => props.theme.white, weight: '400' })};
            }
            p{
                ${Text({ size: '1.3rem', color: props => props.theme.yellow, weight: '400' })};
            }
            
            ul{
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                li{
                    ${Text({ size: '.8rem', color: props => props.theme.yellow, weight: '400' })};
                }
            }
            
        }


        &.active{
            bottom: 0;
        }
    }


    @media (max-width: 850px) {
        
        img{
            &.mobile{
                display: block;
            }
            
            &.desktop{
                display: none;
            }
        }
        
        .text{
            height: 50%;
            gap: 1rem;
            bottom: -50%;
            div{
                flex-direction: column;
                gap: 1rem;
            }
        }
    }

`

const ButtonA = styled.a`
    
    position: relative;
    overflow: hidden;
    text-decoration:none;
    padding: .5rem 1rem;
    border-bottom: 1px solid ${props => props.theme.white};
    border-right: 1px solid ${props => props.theme.white};
    border-radius: 2px;

    transition: all .4s ease-in-out;

    ${Text({ size: '1rem', color: props => props.theme.white, weight: '400' })};

    span{
        position: relative;
        z-index: 2;
    }

    &::after{
        content: '';
        width: calc(100% + 80px);
        position: absolute;
        z-index: 1;
        top: 0;
        left: calc(-100% - 105px);
        border-right: 80px solid transparent;
        border-bottom: 80px solid ${props => props.theme.yellow};
        transition: .4s ease-in-out all;

    }

    &:hover{
        border-bottom: 1px solid ${props => props.theme.yellow};
        border-right: 1px solid ${props => props.theme.yellow};
        &::after{
            left: 0;
        }
    }
`