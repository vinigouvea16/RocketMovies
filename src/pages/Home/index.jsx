import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";
import { api } from "../../services/api";
import { Container, Content, NewMovie } from "./style";

export function Home(){
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState([]);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(()=>{
    async function fetchTags(){
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  },[]);

  
  useEffect(()=>{
    async function fecthNotes(){
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data)
    }

    fecthNotes();
  }, [tagsSelected, search]);

  return(
    <Container>
     <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header 
      setSearch={setSearch}
      onOpenMenu={() => setMenuIsOpen(true)}
      />
      <Content>
      <header>My Movies</header>
     <NewMovie to="/new">
      <FiPlus />
      Add New Movie
     </NewMovie>
        </Content>
      <Section>
      { 
        notes.map(note => ( 
        <Note 
          key={String(note.id)}
          data={note}
          onClick={()=> handleDetails(note.id)}
        />
        ))
        }
        </Section>

    </Container>
  );
}