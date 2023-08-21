
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
      setNotes(response.data)
    }
    fecthNotes();
  }, [search]);

  return(
    <Container>
      <Header />
      <Content>
      <header>My Movies</header>
     <NewMovie to="New">
      <FiPlus />
      Add New Movie
     </NewMovie>
        </Content>
      <Section>
        <Note 
        to="/details/29" 
        onClick={()=>handleDetails()}
        data= {{
          title: 'Interstellar', 
          tags: [
            {id: '1', name: 'Ficção científica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Familia'}
          ]}}
          />
        {/* <Note 
        to="/details/29" 
        onClick={()=>handleDetails()}
        data= {{
          title: 'Interstellar', 
          tags: [
            {id: '1', name: 'Ficção científica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Familia'}
          ]}}
          />
        <Note 
        to="/details/29" 
        onClick={()=>handleDetails()}
        data= {{
          title: 'Interstellar', 
          tags: [
            {id: '1', name: 'Ficção científica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Familia'}
          ]}}
          />
        <Note 
        to="/details/29" 
        onClick={()=>handleDetails()}
        data= {{
          title: 'Interstellar', 
          tags: [
            {id: '1', name: 'Ficção científica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Familia'}
          ]}}
          /> */}
        </Section>

    </Container>
  );
}