import { GoSignOut, GoX } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Button, Container, Header, Nav, Title } from './style';

// eslint-disable-next-line react/prop-types
export function SideMenu({ menuIsOpen, onCloseMenu }){
  const navigate = useNavigate()
  const {logOut} = useAuth();
  function handleLogOut(){
     navigate("/")
     logOut();
   }
  function handleNewMovie(){
    navigate(`/new`)
  }
  return(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>RocketMovies</Title>
        {menuIsOpen && (
        <Button onClick={onCloseMenu}>
        <GoX />
        </Button>
        )}
      </Header>
      <Nav >
        <span onClick={handleNewMovie}>New Movie</span>
        <span onClick={handleLogOut}><GoSignOut/>LogOut</span>
      </Nav>
    </Container>
  )
}