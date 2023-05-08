import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  font-size: ${(props) => props.fontSize || '16px'};
  background-color: ${(props) => (props.principal ? '#666' : '#000')};
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
`

function Teste() {
  return (
    <>
      <Botao principal fontSize="20px">
        Clique
      </Botao>
      <Botao principal={false} as="a">
        <span>Aqui</span>
      </Botao>
    </>
  )
}

export default Teste
