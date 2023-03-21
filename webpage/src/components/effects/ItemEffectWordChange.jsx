import React from 'react'
import styled from 'styled-components'

const ItemEffectWordChange = () => {
    return (
        <Container>
            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">
                        Hello
                    </p>

                    <ul className="content__container__list">
                        <li className="content__container__list__item">world !</li>
                        <li className="content__container__list__item">bob !</li>
                        <li className="content__container__list__item">users !</li>
                        <li className="content__container__list__item">everybody !</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default ItemEffectWordChange

const Container = styled.div`
    @media (max-width: 850px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content {
        position: relative;
        width: fit-content;
        font-size: 1.5rem;
        line-height: 40px;
        color: #ecf0f1;
        margin-bottom: 2rem;
        padding: 0 1rem;


    
        &__container {
            font-weight: 700;
            overflow: hidden;
            height: 40px;
            padding: 0 1rem;

            &:before {
                content: '[';
                left: 0;
            }

            &:after {
                content: ']';
                position: absolute;
                right: 0;
            }

            &:after, &:before {
                position: absolute;
                top: 0;
            
                color: ${props => props.theme.yellow};
                font-size: 2rem;

                line-height: 40px;
                
                animation-name: opacity;
                animation-duration: 2s;
                animation-iteration-count: infinite;
            }

            &__text {
                display: inline;
                float: left;
                margin: 0;
                font-weight: 700;
            }

            &__list {
                margin-top: 0;
                padding-left: 5rem;
                text-align: left;
                list-style: none;
                
                animation-name: change;
                animation-duration: 10s;
                animation-iteration-count: infinite;

                &__item {
                    line-height:40px;
                    margin:0;
                }
            }
        }
    }

    @keyframes opacity {
        0%, 100% {opacity:0;}
        50% {opacity:1;}
    }

    @keyframes change {
        0%, 12.66%, 100% {transform:translate3d(0,0,0);}
        16.66%, 29.32% {transform:translate3d(0,-25%,0);}
        33.32%,45.98% {transform:translate3d(0,-50%,0);}
        49.98%,62.64% {transform:translate3d(0,-75%,0);}
        66.64%,79.3% {transform:translate3d(0,-50%,0);}
        83.3%,95.96% {transform:translate3d(0,-25%,0);}
    }

`