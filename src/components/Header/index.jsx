import { Container, Profile, Logout, Brand } from "./style";
import { Input } from '../../components/Input';
export function Header(){

  return(
    <Container>
      <Brand to="/">
      RocketMovies
      </Brand>
      <Input placeholder="Pesquisar pelo título"/>

      <Profile to="/profile">
        <img
          src="https://github.com/vinigouvea16.png"
          alt="foto do usuário"
        />

        <div>
          <strong>Vinicius Gouvea</strong>
         <Logout>
          sair
         </Logout>
        </div>
      </Profile>
    </Container>
  )
}