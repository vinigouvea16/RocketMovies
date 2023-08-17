// import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { SectionNew } from "../../components/SectionNew";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi"
import { Container, Form, Erasemovie } from "./styles";

export function New(){
  return(
    <Container>
      <Header />

        <main>
          <Form>
              <a href="/">
                <FiArrowLeft />
                Voltar</a>
            <header>
              <h1>Novo Filme</h1>
            </header>
            <div className="inputs">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />

            </div>
            <Textarea placeholder="Observações" />
          
              <SectionNew title="Marcadores">
                <div className="tags">
              <NoteItem value="Insidious"/>
              <NoteItem placeholder="Novo marcador" isNew />
                </div>
              </SectionNew>
              <footer>
              <Erasemovie>Excluir Filme</Erasemovie>
              <Button title="Salvar Alterações"/>
              </footer>
          </Form>
        </main>


    </Container>
  )
}