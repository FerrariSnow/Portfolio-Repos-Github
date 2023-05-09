import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Mateus Ferrari</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        FerrariSnow
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Full-Stack Dev em formação
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
