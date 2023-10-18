import { InputGroup } from "./styles";

// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, ...rest}){
  return(
    <InputGroup>
    {Icon && <Icon size={20} />}
    <input {...rest} />
    </InputGroup>
  )
}