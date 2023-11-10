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
`

function Input ({ Label, ...props} ) {
  return (
    <InputConteiner>
      <StyledLabel>{Label}</StyledLabel>
      <StyledInput placeholder={Label} {...props} />
    </InputConteiner>
  )
}




export default Input 