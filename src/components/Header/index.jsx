import { Container, Profile, Logout, Brand } from "./style";
import { Input } from '../../components/Input';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
// import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export function Header({search, setSearch}){
  const {logOut, user} = useAuth();
  const navigate = useNavigate();

  function handleLogOut(){
    navigate("/")
    logOut();
  }

  function handleHome(){
    navigate("/");
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  return(
    <Container>
      <Brand
      onClick={handleHome}
      >
      RocketMovies
      </Brand>
      <Input 
      placeholder="Search for movie title"
      onChange={(e)=>setSearch(e.target.value)}
      icon={FiSearch}
      />

      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <strong>{user.name}</strong>
         <Logout
         onClick={handleLogOut}>
          Log out
         </Logout>
        </div>
      </Profile>
    </Container>
  )
}