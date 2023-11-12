import {useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {ThemeContext} from '../../context/ThemeContext'

import {
  LoginFormContainer,
  FormContainer,
  LoginFormLogo,
  InputContainer,
  CustomLabel,
  CustomInput,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

function Login(props) {
  const theme = useContext(ThemeContext)
  const {darkMode} = theme.state
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [errorMessageText, setErrorMessageText] = useState('')

  const onSubmitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 7})
    history.replace('/')
  }
  const onSubmitFailure = errorMessage => {
    setErrorMessageText(errorMessage)
    setShowErrorMessage(true)
  }
  const onFormSubmit = async e => {
    e.preventDefault()
    const userDetails = {username: usernameInput, password: passwordInput}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken) {
    return <Redirect to="/" />
  }
  return (
    <LoginFormContainer darkMode={darkMode}>
      <FormContainer onSubmit={onFormSubmit} darkMode={darkMode}>
        <LoginFormLogo
          src={
            darkMode
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="logo"
        />
        <InputContainer>
          <CustomLabel htmlFor="username" darkMode={darkMode}>
            USERNAME
          </CustomLabel>
          <CustomInput
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={usernameInput}
            onChange={e => setUsernameInput(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <CustomLabel htmlFor="password" darkMode={darkMode}>
            PASSWORD
          </CustomLabel>
          <CustomInput
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
          />
        </InputContainer>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          <CheckboxLabel htmlFor="checkbox" darkMode={darkMode}>
            Show Password
          </CheckboxLabel>
        </CheckboxContainer>
        <LoginButton type="submit">Login</LoginButton>
        {showErrorMessage && <ErrorMessage>*{errorMessageText}</ErrorMessage>}
      </FormContainer>
    </LoginFormContainer>
  )
}
export default Login
