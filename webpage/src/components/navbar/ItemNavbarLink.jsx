import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const ItemNavbarLink = ({icon, selected, click}) => {
  return (
    <Container className={`${selected ? 'active' : ''}`} onClick={() => {click(-25)}}>
        <a href="#"><FontAwesomeIcon icon={icon}/></a>
    </Container>
  )
}

export default ItemNavbarLink

const Container = styled.li`
    font-size: 1.3rem;
    height: 50px;
    width: 50px;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a{
        color: #fff;
    }
    
    &.active{
        bottom: 1rem;
        background-color:  ${props => props.theme.primary};
        border-radius: 50%;
    }

`