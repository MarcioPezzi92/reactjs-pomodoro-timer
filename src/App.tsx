import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

// STYLES
import { defaultTheme } from './styles/themes/default.theme'
import { GlobalStyles } from './styles/global.styles'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}
