import {useReducer, createContext} from 'react'

export const ActiveTabContext = createContext()

const initialState = {
  activeTab: 'home',
}
const activeTabReducer = (state, action) => {
  switch (action.type) {
    case 'home':
      return {activeTab: 'home'}
    case 'trending':
      return {activeTab: 'trending'}
    case 'gaming':
      return {activeTab: 'gaming'}
    case 'savedVideos':
      return {activeTab: 'savedVideos'}
    default:
      return state
  }
}

export function ActiveTabProvider(props) {
  const [state, dispatch] = useReducer(activeTabReducer, initialState)
  const {children} = props
  return (
    <ActiveTabContext.Provider value={{state, dispatch}}>
      {children}
    </ActiveTabContext.Provider>
  )
}
