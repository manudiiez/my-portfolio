import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeYellow, themeBlue, themeGreen, themePink, themeRed } from "../styles/global.js";

const themeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(themeYellow);

    const themeToggler = (mode) => {
        ThemeModeReducer(mode)
    }

    const ThemeModeReducer = (action) => {
        console.log(action);
        switch (action) {
            case 1: {
                setTheme(themeYellow)
                return
            }
            case 2: {
                setTheme(themeBlue)
                return
            }
            case 3: {
                setTheme(themePink)
                return
            }
            case 4: {
                setTheme(themeGreen)
                return
            }
            case 5: {
                setTheme(themeRed)
                return
            }
            default:
                setTheme(themeYellow)
                return
        }
    };

    useEffect(() => {
        console.log(theme);
    }, [theme])
    

    return (
        <themeContext.Provider value={{themeToggler}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    );
}

export {themeContext, ThemeContextProvider}

// const DarkModeReducer = (state, action) => {
//     switch (action) {
//         case 1: {
//             const result = theme
//             console.log(result);
//             result.primary = result.colors.yellow
//             return result
//         }
//         default:
//             return theme;
//     }
// };

// export const ThemeModeContext = createContext(INITIAL_STATE);

// export const ThemeModeContextProvider = ({ children }) => {
//     const [state2, dispatch] = useReducer(DarkModeReducer, theme);
//     console.log(state2);
//     dispatch(1)

//     const [state, setState] = useState(1);

//     return (
//         <ThemeModeContext.Provider value={{ theme: theme, dispatch }}>
//             {children}
//         </ThemeModeContext.Provider>
//     );
// };