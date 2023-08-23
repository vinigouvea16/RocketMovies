/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Container, Stars } from "./styles";
import { FiClock } from "react-icons/fi"
import { TagDetails } from "../TagDetails";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";
// eslint-disable-next-line react/prop-types
export function MovieInfo({ data, ...rest }){
  const {user} = useAuth();
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container {...rest}>
      <header>

      <h1>{data.title}</h1>
      <Stars>
      <Stack spacing={1}>
      <Rating 
      name="half-rating-read" 
      defaultValue={data.rating} 
      precision={0.5} 
      size="small" 
      style={{color:"#FF859B"}}
      readOnly 
      />
    </Stack>
      </Stars>
      </header>
    <div className="footer">
         <img
          src={avatarUrl}
          alt={user.name}
        />
        <h2>Por {user.name} </h2>
        <span>
     <FiClock />
        </span>
      <h3>{data.created_at}</h3>
      </div>   
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <TagDetails key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}