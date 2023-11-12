import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from './context/ThemeContext'
import {ActiveTabProvider} from './context/ActiveTabContext'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ActiveTabProvider>
          <App />
        </ActiveTabProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)