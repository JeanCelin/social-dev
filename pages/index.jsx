import styled from 'styled-components'

import Navbar from '../src/components/layout/navbar'
import Container from '../src/components/layout/conteiner'
import CreatePost from '../src/components/cards/createPost'

const Content = styled.div`
  margin: 50px 0;
`

function HomePage () {
  
  return (
    <>
      <Navbar />
      <Content>
        <Container> 
          <CreatePost />
        </Container>
      </Content>
    </>
    
  )
}

export default HomePage