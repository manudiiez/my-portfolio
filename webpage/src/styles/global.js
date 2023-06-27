import { createGlobalStyle, css } from "styled-components"

// export const themeYellow = {
//     white: "#FDFDFD",
//     gray: "#F0F2F4",
//     primary: "#FAB700",
//     black: "#292B29",
//     dark: "#111111",
//     colors: {
//         yellow: "#FAB700",
//         blue: '#46B1C9',
//         pink: '#FF99C9',
//         green: '#6EEB83',
//         red: '#EC4E20',
//     },
//     primaryShadow: '#fab70044',
//     secondaryShadow: '#292b2944'
// }
export const themeYellow = {
    white: "#111111",
    gray: "#292B29",
    primary: "#FAB700",
    black: "#F0F2F4",
    dark: "#FDFDFD",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    },
    primaryShadow: '#fab70044',
    secondaryShadow: '#292b2944'
}
export const themeBlue = {
    white: "#111111",
    gray: "#292B29",
    primary: "#46B1C9",
    black: "#F0F2F4",
    dark: "#FDFDFD",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    },
    primaryShadow: '#46b1c944',
    secondaryShadow: '#292b2944'
}
export const themePink = {
    white: "#111111",
    gray: "#292B29",
    primary: "#FF99C9",
    black: "#F0F2F4",
    dark: "#FDFDFD",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    },
    primaryShadow: '#ff99c944',
    secondaryShadow: '#292b2944'
}
export const themeGreen = {
    white: "#111111",
    gray: "#292B29",
    primary: "#6EEB83",
    black: "#F0F2F4",
    dark: "#FDFDFD",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    },
    primaryShadow: '#6eeb8344',
    secondaryShadow: '#292b2944'
}
export const themeRed = {
    white: "#111111",
    gray: "#292B29",
    primary: "#EC4E20",
    black: "#F0F2F4",
    dark: "#FDFDFD",
    colors: {
        yellow: "#FAB700",
        blue: '#46B1C9',
        pink: '#FF99C9',
        green: '#6EEB83',
        red: '#EC4E20',
    },
    primaryShadow: '#ec502044',
    secondaryShadow: '#292b2944'
}



export const GlobalStyles = createGlobalStyle`

    body{
        background-color: #FDFDFD;
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