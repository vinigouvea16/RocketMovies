import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";
import { MyContext } from '../../MyContext';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function LogIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {logIn} = useAuth();
    function handleLogIn(){
      logIn({email,password})
    }
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        
        <h2>Faça seu login</h2>
        
        <Input 
        placeholder = "E-mail"
        type="text"
        icon={FiMail}
        onChange={e=> setEmail(e.target.value)}
        />

        <Input 
        placeholder = "Senha"
        type="password"
        icon={FiLock}
        onChange={e=> setPassword(e.target.value)}
        />

      <Button 
      title="Entrar"
      onClick={handleLogIn}
      />
     
    <Link to="/register">
      Criar conta
    </Link>

      </Form>
      <Background />
    </Container>
  );
}