
import { Container, Content, NewMovie} from "./style";
import { FiPlus } from "react-icons/fi"
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home(){
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
      // const response = await api.get(`/notes?title=${search}&tags=${search}`);
      setNotes(response.data)
    }

    fecthNotes();
  }, [tagsSelected, search]);

  return(
    <Container>
      <Header 
      setSearch={setSearch}
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