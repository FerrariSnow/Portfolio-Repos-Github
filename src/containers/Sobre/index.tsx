import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt error
      reprehenderit dignissimos totam possimus, culpa magni similique at aut
      saepe ullam excepturi? Aspernatur autem animi quas sequi praesentium quis
      quos? Voluptates sapiente veritatis nobis eius? Commodi ipsum voluptas
      placeat tempore delectus ipsa optio, doloribus aliquid et illo! Laborum
      sunt eveniet nam quo molestias, ipsa ad quidem ipsum ducimus repellendus
      perspiciatis.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=FerrariSnow&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FerrariSnow&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
