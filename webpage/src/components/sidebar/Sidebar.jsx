import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFolder, faUser, faWrench, faComment } from '@fortawesome/free-solid-svg-icons'
import { useLocation, Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { themeContext } from '../../context/themeModeContext.js';
import { useContext } from 'react';


const Sidebar = ({ section }) => {

  let location = useLocation();
  const { themeToggler } = useContext(themeContext);



  return (
    <Container>
      <Fade right distance='100%'>

        <ul>
          <li>
            {
              location.pathname === '/' ? (

                <a href="#home" className={section === 'home' ? 'active' : ''} onClick={() => { themeToggler(1) }}><FontAwesomeIcon icon={faHouse} /></a>
              ) : (
                <Link to='/' onClick={() => { themeToggler(1) }}><FontAwesomeIcon icon={faHouse} /></Link>
              )
            }
          </li>
          {
            location.pathname === '/' && (

              <li>
                <a href="#projects" className={section === 'projects' ? 'active' : ''} onClick={() => { themeToggler(2) }}><FontAwesomeIcon icon={faFolder} /></a>
              </li>
            )
          }
          {
            location.pathname === '/' && (
              <li>
                <a href="#about" className={section === 'about' ? 'active' : ''} onClick={() => { themeToggler(3) }}><FontAwesomeIcon icon={faUser} /></a>
              </li>
            )
          }
          {
            location.pathname === '/' && (
              <li>
                <a href="#services" className={section === 'services' ? 'active' : ''} onClick={() => { themeToggler(4) }}><FontAwesomeIcon icon={faWrench} /></a>
              </li>
            )
          }
          <li>
            <a href="#contact" className={section === 'contact' ? 'active' : ''} onClick={() => { themeToggler(5) }}><FontAwesomeIcon icon={faComment} /></a>
          </li>
          <li>
            <button><span>CV</span></button>
          </li>
        </ul>
      </Fade>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -7rem;
  overflow: hidden;
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    li{
      &:nth-of-type(1){
        a{
          &::before{
            background-color: ${props => props.theme.colors.yellow};
          }
          &.active{
            background-color: ${props => props.theme.yellow};
          }
        }
      }
      &:nth-of-type(2){
        a{
          &::before{
            background-color: ${props => props.theme.colors.blue};
          }
          &.active{
            background-color: ${props => props.theme.blue};
          }
        }
      }
      &:nth-of-type(3){
        a{
          &::before{
            background-color: ${props => props.theme.colors.pink};
          }
        }
      }
      &:nth-of-type(4){
        a{
          &::before{
            background-color: ${props => props.theme.colors.green};
          }
        }
      }
      &:nth-of-type(5){
        a{
          &::before{
            background-color: ${props => props.theme.colors.red};
          }
        }
      }
      &:nth-of-type(6){
        button{
          &::before{
            background-color: ${props => props.theme.colors.blue};
          }
        }
      }
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
        overflow: hidden;
        position: relative;
        
        &:hover{
          svg{
            transform: rotateY(360deg);
          }  
          span{
            color: ${props => props.theme.dark};
          } 
          &::before{
            top: 0;
          }     
        }
        &.active{
          background-color: ${props => props.theme.primary};
        }
        
        
        &::before{
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: ${props => props.theme.white};
          transition: .5s;
          z-index: 2;
        }
  
        svg{
          transition: all ease-in-out .3s;
          position: relative;
          z-index: 3;
        }
        
        span{
          z-index: 3;
          position: relative;
        }
  
      }
  
  
      button{
        border: none;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 550px) {
    display: none
  }
`