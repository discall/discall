import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import wip from '../assets/wip.png'
import GroupHeader from '../components/GroupHeader'
import Groups from '../components/Groups'
import Main from '../components/Main'
import MainHeader from '../components/MainHeader'
import { getGroups } from '../services/api.group'
import { GroupList } from '../utils/types'

export enum LeftPage {
  GROUPS,
  CONFIG,
  ADD_GROUP,
}

const MainPage: React.FC = () => {
  const [groups, setGroups] = useState<GroupList>([])
  const [group, setGroup] = useState<GroupList[number] | null>(null)
  const [page, setPage] = useState(LeftPage.GROUPS)

  const { groupId } = useParams()

  useEffect(() => {
    if (groupId) {
      const id = parseInt(groupId)
      setGroup(groups.find(group => group.id === id) ?? null)
    }
  }, [groupId, groups])

  useEffect(() => {
    getGroups().then(setGroups)
  }, [page])

  return (
    <Container>
      <GroupHeaderG>
        <GroupHeader setPage={setPage} />
      </GroupHeaderG>
      <MainHeaderG>
        {group && (
          <MainHeader name={group.name} members={group.usersInGroup.length} />
        )}
      </MainHeaderG>
      <GroupsG>
        <Groups groups={groups} page={page} setPage={setPage} />
      </GroupsG>
      <MainG>{group && <Main messages={group.messages} />}</MainG>
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
  height: 100vh;
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
