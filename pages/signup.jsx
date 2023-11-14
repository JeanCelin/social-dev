import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { signupSchema } from '../modules/user/user.schema'





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
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(signupSchema)
  })
  const handleForm = (data) => {
    console.log(data)
  }

  return (
    <ImageWithSpace>
      <H1># SOCIAL DEV </H1>
      <H4>Tudo que acontece no mundo, está aqui!</H4>
      <FormConteiner>
        <H2>Cria sua conta</H2>
        <Form onSubmit ={handleSubmit(handleForm)}> 
          <Input Label="Nome" name="firstName" control={control}/>
          <Input Label="Sobrenome" name="lastName" control={control}/>
          <Input Label="Usuário" name="user" control={control}/>
          <Input Label="Email" type="email" name="email" control={control}/>
          <Input Label="Senha" type="password" name="password" control={control}/>
          <Button type="submit" disabled={Object.keys(errors).length > 0}>Cadastrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login"> Faça seu login</Link></Text>
      </FormConteiner>
           
    </ImageWithSpace>
  )
}
export default SignupPage