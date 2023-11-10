import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  font-waight: bold;
  color: ${props => props.theme.white};
  font-size: 16px;
  transition: 0.3s;

  : hover {
    background-color: ${props => props.theme.primaryHover};
  }
`
export default Button