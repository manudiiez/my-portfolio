import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

const ItemSocialLinks = () => {
  return (
    <Container>
        <ul>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
              </li>
          </ul>
    </Container>
  )
}

export default ItemSocialLinks

const Container = styled.div`
    ul {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        li{
            list-style: none;
            a{
                width: 80px;
                height: 80px;
                background-color: #fff;
                text-align: center;
                line-height: 80px;
                font-size: 35px;
                margin: 0 10px;
                display: block;
                border-radius: 50%;
                position: relative;
                overflow: hidden;
                border: 3px solid #fff;
                z-index: 1;

                &:hover{
                    svg{
                        color: #fff;
                        transform: rotateY(360deg);
                    }

                    &::before{
                        top: 0;
                    }
                }

                &::before{
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #f00;
                    transition: .5s;
                    z-index: 2;
                }

                svg{
                    position: relative;
                    color: #262626;
                    transition: .5s;
                    z-index: 3;
                }
            }
        }

    }

`