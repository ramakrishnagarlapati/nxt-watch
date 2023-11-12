import styled from 'styled-components'

export const TabsListContainer = styled.ul`
  flex-grow: 1;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: ${props => props.justifyContentValue};
`

export const TabItem = styled.li`
  background-color: ${props => {
    const {isActive, darkMode} = props
    if (darkMode) {
      return isActive ? '#444444' : 'inherit'
    }
    return isActive ? '#f0f0f0' : 'inherit'
  }};
`

export const TabText = styled.p`
  color: ${props => {
    const {isActive, darkMode} = props
    if (darkMode) {
      return isActive ? '#f1f1f1' : '#64748b'
    }
    return isActive ? '#181818' : '#475569'
  }};
  font-weight: ${props => (props.isActive ? 600 : 500)};
`
