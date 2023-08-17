import { Container, Profile, Logout, Brand } from "./style";
import { Input } from '../../components/Input';
import { useAuth } from "../../hooks/auth";



export function Header(){
  const { logOut } = useAuth();
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
         <Logout
         
         onClick={logOut}>
          sair
         </Logout>
        </div>
      </Profile>
    </Container>
  )
}