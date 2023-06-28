/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Container, Rating } from "./styles";
import { AiFillStar, AiOutlineStar} from "react-icons/ai"
import { FiClock } from "react-icons/fi"
import { Tag } from "../Tag";

// eslint-disable-next-line react/prop-types
export function MovieInfo({ data, ...rest }){
  return(
    <Container {...rest}>
      <h1>{data.title}
      <Rating>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </Rating>
      </h1>
    <div className="footer">
         <img
          src="https://github.com/vinigouvea16.png"
          alt="foto do usuário"
        />
        <h2>Por Vinicius Gouvea</h2>
        <span>
     <FiClock />
        </span>
      <h3>28/06/23 às 16:00 </h3>
      </div>   
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}