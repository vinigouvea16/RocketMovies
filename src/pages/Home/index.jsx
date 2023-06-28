
import { Container, Content, NewMovie} from "./style";
import { FiPlus } from "react-icons/fi"
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home(){
  return(
    <Container>
      <Header />
      <Content>
      <header>Meus Filmes</header>
     <NewMovie to="New">
      <FiPlus />
      Adicionar Filme
     </NewMovie>
        </Content>
      <Section>
        <Note to="/details/29" data= {{
          title: 'Interstellar', 
          tags: [
            {id: '1', name: 'Ficção científica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Familia'}
          ]}}
          />
        <Note  data= {{
          title: 'Interstellar', 
          tags: [
            {id: '1', name: 'Ficção científica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Familia'}
          ]}}
          />
        <Note  data= {{
          title: 'Interstellar', 
          tags: [
            {id: '1', name: 'Ficção científica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Familia'}
          ]}}
          />
        <Note  data= {{
          title: 'Interstellar', 
          tags: [
            {id: '1', name: 'Ficção científica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Familia'}
          ]}}
          />
        </Section>

    </Container>
  );
}