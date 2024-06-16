
import {createContext , useContext} from "react"

//context jab phele bar bane to usme kya kya value already fill ho 
export const ThemeContext = createContext({
    themeMode:"light",
    darktheme: ()=>{},
    lighttheme: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function  useTheme()
{
    return useContext(themeContext);
}