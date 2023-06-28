import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Form, Avatar } from './styles';

import { Container } from "./styles";


export function Profile(){

  return(
    <Container>
      <header>
        <Link to="/">
        <FiArrowLeft />
        Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
          src="https://github.com/vinigouvea16.png" 
          alt="foto do usuário" 
          />

          <label htmlFor="Avatar">
            <FiCamera />
            <input 
            type="file"
            id="avatar"
             />

          </label>
        </Avatar>
      <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
      />

      <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
      />

      <Input
        placeholder="Senha atual"
        type="password"
        icon={FiLock}
      />

      <Input
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
      />

      <Button title="Salvar" />
      </Form>

    </Container>
  )
}