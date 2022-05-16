import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import livro from '../assets/livro.png'
import { Message, User } from '../utils/types'

interface Props {
  name: string
  lastMessage?: Message & { author: User }
  id: number
}

const Group: React.FC<Props> = ({ name, lastMessage, id }) => {
  return (
    <Container to={`/main/${id}`}>
      <Image src={livro} alt="livro" />
      <Data>
        <GroupName>{name}</GroupName>
        {lastMessage && (
          <LastMessage>
            {lastMessage.author.name + ': ' + lastMessage.content}
          </LastMessage>
        )}
      </Data>
    </Container>
  )
}

export default Group

const Container = styled(Link)`
  display: flex;
  padding: 15px;
  border-bottom: solid #091c32;
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
