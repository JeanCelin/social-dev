import styled from 'styled-components'

import Navbar from '../src/components/layout/navbar'
import Container from '../src/components/layout/conteiner'
import CreatePost from '../src/components/cards/createPost'
import H3 from '../src/components/typograpy/h3'
import Post from '../src/components/cards/posts'


const Content = styled.div`
  margin: 50px 0;
`
const LastPostText = styled(H3)`
  padding: 40px 0;
`
const RefreshPosts = styled.span`
  font-weight: bold;
  color: ${props => props.theme.primary};
  cursor: pointer;
`
const RefrashPostsContainer = styled.div`
  text-align: center;
`
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`
function HomePage () {
  
  return (
    <>
      <Navbar />
      <Content>
        <Container> 
          <CreatePost />
          <LastPostText>Últimas postagens</LastPostText>
          <RefrashPostsContainer>
          <RefreshPosts>Carregar novas postagens</RefreshPosts>
          </RefrashPostsContainer>   
          <PostContainer>
            <Post />  
            <Post />  
            <Post />  
          </PostContainer>       
        </Container>
      </Content>
    </>
    
  )
}

export default HomePage