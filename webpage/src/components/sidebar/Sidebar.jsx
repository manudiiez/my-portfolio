import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFolder, faUser, faWrench, faComment } from '@fortawesome/free-solid-svg-icons'
import { useLocation, Link } from 'react-router-dom'

const Sidebar = ({ section }) => {

  let location = useLocation();

  return (
    <Container>
      <li>
        {
          location.pathname === '/' ? (
            
            <a href="#home" className={section === 'home' ? 'active' : ''}><FontAwesomeIcon icon={faHouse} /></a>
          ):(
            <Link to='/'><FontAwesomeIcon icon={faHouse} /></Link>
          )
        }
      </li>
      <li>
        {
          location.pathname === '/' ? (
            
            <a href="#projects" className={section === 'projects' ? 'active' : ''}><FontAwesomeIcon icon={faFolder} /></a>
          ):(
            <Link to='/#projects'><FontAwesomeIcon icon={faFolder} /></Link>
          )
        }
      </li>
      {/* {
        location.pathname === '/' && (
          <li>
            <a href="#projects" className={section === 'projects' ? 'active' : ''}><FontAwesomeIcon icon={faFolder} /></a>
          </li>
        )
      } */}
      {
        location.pathname === '/' && (
          <li>
            <a href="#about" className={section === 'about' ? 'active' : ''}><FontAwesomeIcon icon={faUser} /></a>
          </li>
        )
      }
      {
        location.pathname === '/' && (
          <li>
            <a href="#services" className={section === 'services' ? 'active' : ''}><FontAwesomeIcon icon={faWrench} /></a>
          </li>
        )
      }
      <li>
        <a href="#contact" className={section === 'contact' ? 'active' : ''}><FontAwesomeIcon icon={faComment} /></a>
      </li>
      <li>
        <button>CV</button>
      </li>
    </Container>
  )
}

export default Sidebar

const Container = styled.ul`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -7rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  li{
    a, button{
      background-color: ${props => props.theme.black};
      border-radius: 50%;
      font-size: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.white};
      text-decoration: none;
      height: 40px;
      width: 40px;
      transition: all ease-in-out .3s;
      
      &:hover{
        background-color: ${props => props.theme.yellow};
      }
      &.active{
        background-color: ${props => props.theme.yellow};
      }

    }


    button{
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 550px) {
    display: none
  }
`