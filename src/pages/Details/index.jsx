/* eslint-disable react/no-unescaped-entities */
import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
// import { Button } from "../../components/Button";
// import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { FiArrowLeft } from "react-icons/fi";
import { MovieInfo } from "../../components/MovieInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export function Details(){
  const [data, setData] = useState();
  
  const params = useParams();

  const navigate = useNavigate();

  // function handleBack(){
  //   navigate(-1);
  // }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
      console.log(response.data)
    }
    fetchNote()
  }, [])

  return(
    <Container>
      <Header />
      {
        data &&
      
      <main>
        <Content>
         
        <header>
        <a href="/">
        <FiArrowLeft />
        Voltar
        </a>
      </header>
        {/* {data.title} */}
        <MovieInfo 
        data = {data}

          />
      <p>
        {data.description}

      </p>
      </Content>
      </main>
      }
    </Container>
  )
}