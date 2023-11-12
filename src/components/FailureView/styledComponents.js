import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`

export const FailureViewImage = styled.img`
  width: 250px;
  height: 200px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 350px;
  }
`

export const FailureViewHeading = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.darkMode ? '#f9f9f9' : ' #1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const FailureViewDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${props => (props.darkMode ? '#616e7c' : ' #616e7c')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const FailureViewRetryButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: #4f46e5;
  padding: 12px 26px;
  color: #f9f9f9;
  font-size: 14px;
  font-family: inherit;
  font-weight: 500;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`
