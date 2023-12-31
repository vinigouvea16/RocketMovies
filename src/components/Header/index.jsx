import { GoFilter } from 'react-icons/go';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Input } from '../../components/Input';
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Brand, Container, Logout, Menu, Profile } from "./style";
// import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Header({setSearch, onOpenMenu}){
  const {logOut, user} = useAuth();
  const navigate = useNavigate();

  function handleLogOut(){
    navigate("/")
    logOut();
  }

  function handleProfile(){
    navigate(`/profile`);
  }

  function handleHome(){
    navigate("/");
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  return(
    <Container>
      <Menu onClick={onOpenMenu}>
        <GoFilter />
      </Menu>
      
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

      <Profile
      >
        <img
        onClick={handleProfile}
          src={avatarUrl}
          alt={user.name}
        />

        <div>
          <strong
          
          >{user.name}</strong>
         <Logout
         onClick={handleLogOut}>
          Log out
         </Logout>
        </div>
      </Profile>
    </Container>
  )
}