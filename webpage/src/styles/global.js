import { createGlobalStyle, css } from "styled-components"

export const themeYellow = {
    white: "#FDFDFD",
    gray: "#F0F2F4",
    primary: "#FAB700",
    black: "#292B29",
    dark: "#111111",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    }
}
export const themeBlue = {
    white: "#FDFDFD",
    gray: "#F0F2F4",
    primary: "#46B1C9",
    black: "#292B29",
    dark: "#111111",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    }
}
export const themePink = {
    white: "#FDFDFD",
    gray: "#F0F2F4",
    primary: "#FF99C9",
    black: "#292B29",
    dark: "#111111",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    }
}
export const themeGreen = {
    white: "#FDFDFD",
    gray: "#F0F2F4",
    primary: "#6EEB83",
    black: "#292B29",
    dark: "#111111",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    }
}
export const themeRed = {
    white: "#FDFDFD",
    gray: "#F0F2F4",
    primary: "#EC4E20",
    black: "#292B29",
    dark: "#111111",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    }
}



export const GlobalStyles = createGlobalStyle`

    body{
        background-color: #111111;
    }
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

    .transition{
        transition: color .15s linear, background-color .15s linear;
    }
`

export const Text = ({ size, color, weight }) => css`
    color: ${color};
    font-size: ${size};
    font-weight: ${weight};
`