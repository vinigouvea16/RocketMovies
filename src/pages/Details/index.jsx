/* eslint-disable react/no-unescaped-entities */
import { Container, Content } from "./styles";

import * as React from 'react';
import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { MovieInfo } from "../../components/MovieInfo";
import { SideMenu } from "../../components/SideMenu";
import { api } from "../../services/api";

export function Details(){
  const [menuIsOpen, setMenuIsOpen] = useState(false)
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
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header 
       onOpenMenu={() => setMenuIsOpen(true)}
       />
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