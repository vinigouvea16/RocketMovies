// import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import * as React from 'react';
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { SectionNew } from "../../components/SectionNew";
import { SideMenu } from "../../components/SideMenu";
import { Textarea } from "../../components/Textarea";
import { api } from "../../services/api";
import { Container, Erasemovie, Form } from "./styles";

const labels = {
  0.5: 'Unwatchable',
  1: 'Unwatchable+',
  1.5: 'Sad',
  2: 'Sad+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export function New(){
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }



  async function handleNewNote(){
    if(!title){
      return alert("Please enter the movie title")
    }

    if(newTag){
      return alert("It seems you forgot to apply the tag, please select the + sign or erase the tag's content")
    }


    await api.post("/notes", {
      title,
      description,
      rating: value,
      tags
    });

    alert("Movie note sucessfully created")
    navigate(-1);
  }

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  
  return(
    <Container>
       <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header 
      onOpenMenu={() => setMenuIsOpen(true)}
      />
        <main>
          <Form>
              <a href="/">
                <FiArrowLeft 
                />
                Back</a>
            <header>
              <h1>New Movie</h1>
            </header>
            <div className="inputs">
            <Input
             placeholder="Title"
             onChange={e=> setTitle(e.target.value)} 
             />
             
             <Box
                sx={{
                  width: 600,
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  style={{color:"#FF859B"}}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>   

            </div>
            <Textarea 
            placeholder="Description"
            onChange={e=> setDescription(e.target.value)}
            />
          
              <SectionNew title="Markers">
                <div className="tags">
                  {
                    tags.map((tag, index)=>(
                      <NoteItem 
                      key={String(index)}
                      value={tag}
                      onClick={()=>handleRemoveTag(tag)}                     
                      />
                    ))  
                  }
              <NoteItem 
              $isNew 
              placeholder="New marker" 
              onChange = {e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
              />
                </div>
                  
                </SectionNew>
              <footer>
              <Erasemovie>Erase Movie</Erasemovie>
              <Button 
              title="Save Changes"
              onClick={handleNewNote}
              />
              </footer>
          </Form>
        </main>


    </Container>
  )
}