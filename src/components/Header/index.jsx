import { Container, Profile, Logout, Brand } from "./style";
import { Input } from '../../components/Input';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header(){
  const {logOut, user} = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Brand to="/">
      RocketMovies
      </Brand>
      <Input placeholder="Search for movie title"/>

      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <strong>Vinicius Gouvea</strong>
         <Logout
         
         onClick={logOut}>
          Log out
         </Logout>
        </div>
      </Profile>
    </Container>
  )
}