import { ThemeProvider } from 'styled-components'

import Header from '../components/Molecules/Header'
import Footer from '../components/Molecules/Footer'
import Container from '../components/Atoms/Container'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
