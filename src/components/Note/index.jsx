/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Container, Stars } from "./styles";
import { AiFillStar, AiOutlineStar} from "react-icons/ai"
import { Tag } from "../Tag";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


// eslint-disable-next-line react/prop-types
export function Note({ data, ...rest }){
  return(
    <Container {...rest}>
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
      <p>
        {data.description}
      </p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}