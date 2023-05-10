import { ThemeProvider } from 'styled-components'
import ResetCSS, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [temaDarkOn, setTemaDarkOn] = useState(true)

  function trocaTema() {
    setTemaDarkOn(!temaDarkOn)
  }

  return (
    <ThemeProvider theme={temaDarkOn ? temaDark : temaLight}>
      <ResetCSS />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
