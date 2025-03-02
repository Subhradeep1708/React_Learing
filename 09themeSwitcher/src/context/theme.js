import { useContext } from "react";
import { createContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})


export const ThemeProvider = ThemeContext.Provider

// creating custom hook

export default function useTheme() { // usetheme will give data and functions by just using it
    return useContext(ThemeContext)
}