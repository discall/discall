import styled from '@emotion/styled'
import GroupHeader from '../components/GroupHeader'
import Groups from '../components/Groups'
import Main from '../components/Main'
import MainHeader from '../components/MainHeader'
import { Groupchat, Message, User } from '../utils/types'
import wip from '../assets/wip.png'

const grampos: (Groupchat & {
  users: User[]
  messages: (Message & {
    author: User
  })[]
})[] = [
  {
    id: 1,
    users: [],
    messages: [
      { content: 'muito fofo alek', author: { name: 'artu' } },
      { content: 'sim amigo', author: { name: 'guilerm' } },
      { content: 'bota meu nome no nome do grupo', author: { name: 'matixa' } },
      { content: 'nao 👍', author: { name: 'artu' } },
    ],

    name: 'grupo interessante',
  },
  {
    id: 2,
    users: [],
    messages: [{ content: 'parabens amigo', author: { name: 'caio' } }],
    name: 'grupoultrafofo',
  },
]

interface Props {}

const MainPage: React.FC<Props> = ({}) => {
  return (
    <Container>
      <GroupHeaderG>
        <GroupHeader />
      </GroupHeaderG>
      <MainHeaderG>
        <MainHeader name={grampos[0].name} members={grampos[0].users.length} />
      </MainHeaderG>
      <GroupsG>
        <Groups groups={grampos} />
      </GroupsG>
      <MainG>
        <Main messages={grampos[0].messages} />
      </MainG>
      <DrawerG>
        <Image src={wip} />
      </DrawerG>
    </Container>
  )
}

export default MainPage

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'group-header main-header drawer'
    'groups main drawer';
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 90px 1fr;
  height: 100%;
`

const GroupHeaderG = styled.div`
  grid-area: group-header;
  background-color: #4a6488;
`

const MainHeaderG = styled.div`
  grid-area: main-header;
  background-color: #4a6488;
  border-left: solid 5px #091c32;
`

const GroupsG = styled.div`
  grid-area: groups;
  background-color: #223c5b;
`

const MainG = styled.div`
  grid-area: main;
`

const DrawerG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: drawer;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`
