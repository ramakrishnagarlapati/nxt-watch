import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  width: 90%;
  max-width: 350px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#fff')};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    padding: 64px 48px;
    gap: 30px;
  }
`

export const LoginFormLogo = styled.img`
  width: 150px;
  align-self: center;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CustomLabel = styled.label`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#94a3b8')};
  font-size: 12px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const CustomInput = styled.input`
  border: 1px solid #94a3b8;
  border-radius: 4px;
  padding: 8px 16px;
  height: 40px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
`

export const CheckboxLabel = styled.label`
  font-size: 16px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#94a3b8')};
`

export const LoginButton = styled.button`
  height: 40px;
  background-color: #3b82f6;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #ff0b37;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
