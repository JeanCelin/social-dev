import { forwardRef } from "react";
import styled from "styled-components";

const InputConteiner = styled.div`
  width: 100%;
`
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.inputBotder};
  background-color: ${props => props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;

  ${props => props.error && `border: 2px solid ${props.theme.error};`}
  &:focus{
    outline: none;
  }

`
const ErrorLabel = styled.span`
 color: ${props => props.theme.error};
 font-waight: bold;
 fint-size: 14px;
`
const errorMessage = {
  'string.empty': 'Este campo é obrigatório.',
  'string.email': 'Digite um e-mail válido.'
}

const Input = forwardRef(({ Label, error, ...props}, ref ) => {
  console.log(error)
  return (
    <InputConteiner>
      <StyledLabel>{Label}</StyledLabel>
      <StyledInput placeholder={Label} error={error} {...props} ref={ref} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
      </InputConteiner>
  )
})




export default Input 