// import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { SectionNew } from "../../components/SectionNew";
import { Button } from "../../components/Button";
import { FiArrowLeft } from "react-icons/fi"
import { Container, Form, Erasemovie } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New(){
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [rating, setRating] = useState("");
  const [newRating, setNewRating] = useState("");
  
  function handleRating(){
    setRating(prevState => [...prevState, newRating])
    setNewRating("");
  }

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

    // if(setRating){
    //   return alert("Please rate the movie")
    // }

    if(newTag){
      return alert("It seems you forgot to apply the tag, please select the + sign or erase the tag's content")
    }


    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    });

    alert("Movie note sucessfully created")
    navigate(-1);
  }

  return(
    <Container>
      <Header />

        <main>
          <Form>
              <a href="/">
                <FiArrowLeft />
                Back</a>
            <header>
              <h1>New Movie</h1>
            </header>
            <div className="inputs">
            <Input
             placeholder="Title"
             onChange={e=> setTitle(e.target.value)} 
             />
            <Input 
            placeholder="Rate the movie (0 to 5)"
            onClick={handleRating}
            onChange={e=> setNewRating(e.target.value)}
            />

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
              isNew 
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