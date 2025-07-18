import { createContext, useContext } from "react";

export const Themecontext = createContext({
    themeMode:"light",
    lightTheme : ()=>{},
    darkTheme : ()=>{},
})

export const ThemeProvider = Themecontext.Provider

// personal hook
export default function useTheme(){
    return useContext(Themecontext)
}