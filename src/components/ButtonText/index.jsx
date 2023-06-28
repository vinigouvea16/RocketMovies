import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function ButtonText({title, isActive = false, ...rest}){
  return(
    <Container
    type="button"
    $isActive={isActive}
    {...rest}
    >
      {title}
      
    </Container>
  );
}