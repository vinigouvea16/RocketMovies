/* eslint-disable react/no-unescaped-entities */
import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { MovieInfo } from "../../components/MovieInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as React from 'react';

export function Details(){
  const [data, setData] = useState();
  
  const params = useParams();

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
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
          <button
          onClick={handleBack}
          >
        <FiArrowLeft />
            Back
          </button>
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