import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";
import { api } from '../../services/api';


export function SignIn(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignIn(){
    if(!name || !email || !password){
      alert("All blanks must be filled")
    }
    api.post("/users",{name, email, password})
    .then(() => {
      alert("User sucessfully created")
      navigate("/");
    })
    .catch(error =>{
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Unable to create account")
      }
    });
  }

  return(
    <Container>
    

      <Form>
        <h1>RocketMovies</h1>
        <p>Application to track everything you watch.</p>
        
        <h2>Create new accout</h2>
        
        <Input 
        placeholder = "Name"
        type="text"
        icon={FiUser}
        onChange={e => setName(e.target.value)}
        />
        
        <Input 
        placeholder = "E-mail"
        type="text"
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        placeholder = "Password"
        type="password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />

      <Button 
      title="Sign in"
      onClick={handleSignIn}
      />
     
    <Link to="/">
      <FiArrowLeft />
      Return to Log in
    </Link>
      </Form>
    <Background />
    </Container>
  );
}