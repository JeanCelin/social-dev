import styled from 'styled-components'

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.inputBotder};
  background-color: ${props => props.theme.inputBackground};
  border-radius: 10px;
  font-familu: 'Roboto', sans-serif;
  font-size: 14px;  
`

export default Textarea