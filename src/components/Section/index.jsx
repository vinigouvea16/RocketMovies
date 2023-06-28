import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Section({ title, children }) {
  return(
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}