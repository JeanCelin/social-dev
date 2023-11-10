import styled from 'styled-components'
import Link from 'next/link'

import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import H1 from '../src/components/typograpy/h1'
import H2 from '../src/components/typograpy/h2'
import H4 from '../src/components/typograpy/h4'
import Button from '../src/components/inputs/button'
import Input from '../src/components/inputs/Input'

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
function SignupPage () {
  return (
    <ImageWithSpace>
      <H1># SOCIAL DEV </H1>
      <H4>Tudo que acontece no mundo, está aqui!</H4>
      <FormConteiner>
        <H2>Cria sua conta</H2>
        <Form> 
          <Input Label="Nome" />
          <Input Label="Sobrenome" />
          <Input Label="Usuário" />
          <Input Label="Email" type="email" />
          <Input Label="Senha" type="password"/>
          <Button>Entrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login"> Faça seu login</Link></Text>
      </FormConteiner>
           
    </ImageWithSpace>
  )
}
export default SignupPage