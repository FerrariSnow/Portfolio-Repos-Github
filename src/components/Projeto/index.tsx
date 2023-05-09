import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Calculadora IMC React</Titulo>
    <Paragrafo tipo="secundario">Calculadora de IMC feito com React</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
