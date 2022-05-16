import styled from '@emotion/styled'
import livro from '../assets/livro.png'
import { Message, User } from '../utils/types'

interface Props {
  name: string
  lastMessage: Message & { author: User }
}

const Group: React.FC<Props> = ({ name, lastMessage }) => {
  return (
    <Container href="#">
      <Image src={livro} alt="livro" />
      <Data>
        <GroupName>{name}</GroupName>
        <LastMessage>
          {lastMessage.author.name + ': ' + lastMessage.content}
        </LastMessage>
      </Data>
    </Container>
  )
}

export default Group

const Container = styled.a`
  display: flex;
  margin: 30px 10px 10px 10px;
  border-bottom: solid #091c32;
  padding-bottom: 15px;
  text-decoration: none;
  color: inherit;

  width: 100%;
`

const Image = styled.img``

const Data = styled.div`
  margin-left: 10px;
`

const GroupName = styled.h1`
  font-size: 20px;
  padding-top: 15px;
  margin-bottom: 10px;
`

const LastMessage = styled.div`
  font-size: 16px;
`
