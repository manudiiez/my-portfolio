import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/sidebar/Sidebar'
import Title from '../../components/title/Title'
import { Text } from '../../styles/global'


const Header = ({ data }) => {


    return (
        <Container className='container'>
            <Title titulo={data.title} backTitulo={data.backtitle} />
            <div className="container-lg">
                <h1>{data.description}</h1>
                <Sidebar/>

                <div>
                    <img className='desktop' src={data.desktop} alt="" />
                    <img className='mobile' src={data.mobile} alt="" />
                </div>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.section`

    .container-lg{
        display: flex;
        flex-direction: column;
        gap: 10rem;
        margin-top: 10rem;
        position: relative;
        h1{
            text-align: center;
            line-height: 170%;
            ${Text({ size: '1.3rem', color: props => props.theme.white, weight: '400' })};
            @media (max-width: 550px) {
                font-size: 1rem;
            }
        }

        div{
            width: 100%;
            height: 100%;
            max-height: 700px;
            overflow-y: scroll;
            /* position: relative; */

            
            &::-webkit-scrollbar {
            width: 10px;
            }

            /* Track */
            &::-webkit-scrollbar-track {
            background: #292B29;
            }

            /* Handle */
            &::-webkit-scrollbar-thumb {
            background: #000000;
            }

            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
            background: #555;
            }
                        
            img{
                width: 100%;

                &.mobile{
                    display: none;
                }
                
                
            }
            @media (max-width: 650px) {
                
                max-height: 600px;

                img{
                    &.mobile{
                        display: block;
                    }
        
                    &.desktop{
                        display: none;
                    }
                }
            }
        }
    }
    

`