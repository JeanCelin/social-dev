import styled from 'styled-components'

import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import H1 from '../src/components/typograpy/h1'
import H2 from '../src/components/typograpy/h2'
import H4 from '../src/components/typograpy/h4'

const FormConteiner = styled.div`
  margin-top: 60px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`
const Text = styled.text`
  text-align: center;
`
function LoginPage () {
  return (
    <ImageWithSpace>
      <H1># SOCIAL DEV </H1>
      <H4>Tudo que acontece no mundo, está aqui!</H4>
      <FormConteiner>
        <H2>Entre em sua conta</H2>
        <Form> 
          <input placeholder="Email ou usuário" type="email" />
          <input placeholder="Senha" type="password"/>
          <button>Entrar</button>
        </Form>
        <Text>Não possuí uma conta? <a href="#"> Faça seu cadastro</a></Text>
      </FormConteiner>
           
    </ImageWithSpace>
  )
}
export default LoginPage