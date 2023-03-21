import { createGlobalStyle, css } from "styled-components"


export const theme = {
    white: "#FDFDFD",
    gray: "#F0F2F4",
    yellow: "#FAB700",
    black: "#292B29",
    dark: "#111111"
}

export const GlobalStyles = createGlobalStyle`
    .container{
        padding:10rem;
        
        @media (max-width: 550px) {
            padding: 5rem 2rem;
        }
    }
    
    .container-lg{
        position: relative;
        max-width: 1400px;
        width: 100%;
        margin: auto;
    }
`

export const Text = ({ size, color, weight }) => css`
    color: ${color};
    font-size: ${size};
    font-weight: ${weight};
`