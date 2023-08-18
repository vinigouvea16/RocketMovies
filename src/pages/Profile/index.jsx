import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Form, Avatar } from './styles';
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { useState } from 'react';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from '../../services/api';

export function Profile(){
  const {user, updateProfile } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  async function handleUpdate(){
    const user = {
      name,
      email,
      password: newPassword,
      old_password: password
    }
    await updateProfile({user, avatarFile});
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }


  return(
    <Container>
      <header>
        <Link to="/">
        <FiArrowLeft />
        Back
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
          src={avatarUrl}
          alt={user.name}
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
            onChange={handleChangeAvatar}
            type="file"
            id="avatar"
             />

          </label>
        </Avatar>
      <Input
        placeholder="Name"
        type="text"
        icon={FiUser}
        value={name}
        onChange={e=>setName(e.target.value)}
      />

      <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        value={email}
        onChange={e=>setEmail(e.target.value)}
      />

      <Input
        placeholder="Old Password"
        type="password"
        icon={FiLock}
        onChange={e=>setPassword(e.target.value)}
      />

      <Input
        placeholder="New Password"
        type="password"
        icon={FiLock}
        onChange={e=>setNewPassword(e.target.value)}
      />

      <Button 
      title="Save Changes"
      onClick={handleUpdate}
      />
      </Form>

    </Container>
  )
}