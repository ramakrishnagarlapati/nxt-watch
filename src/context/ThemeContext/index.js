import {useReducer, createContext} from 'react'

export const ThemeContext = createContext()

const initialState = {
  darkMode: false,
}
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHTMODE':
      return {darkMode: false}
    case 'DARKMODE':
      return {darkMode: true}
    default:
      return state
  }
}

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  const {children} = props
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}
