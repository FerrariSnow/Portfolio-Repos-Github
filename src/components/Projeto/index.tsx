import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Calculadora-IMC-React</Titulo>
    <Paragrafo tipo="secundario">Calculadora de IMC feito com React</Paragrafo>
    <LinkBotao
      href="https://github.com/FerrariSnow/Calculadora-IMC-React"
      target="_blank"
    >
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
