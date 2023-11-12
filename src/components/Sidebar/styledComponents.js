import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#231f20' : '#fff')};
  height: 100%;
  width: 250px;
  position: fixed;
  top: 100px;
  left: 0;
  overflow-x: hidden;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
