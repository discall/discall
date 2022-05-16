import styled from '@emotion/styled'
import lupa from '../assets/lupa.png'
import { Groupchat, Message, User } from '../utils/types'
import Group from './Group'

interface Props {
  groups: (Groupchat & {
    messages: (Message & { author: User })[]
  })[]
}

const Groups: React.FC<Props> = ({ groups = [] }) => {
  return (
    <Container>
      <SearchBar>
        <Input type="text" />
        <SearchButton>
          <img src={lupa} alt="lupa" />
        </SearchButton>
      </SearchBar>
      <GroupsContainer>
        {groups.map(({ name, messages }) => (
          <Group name={name} lastMessage={messages.at(-1)!} />
        ))}
      </GroupsContainer>
    </Container>
  )
}

export default Groups

const Container = styled.div``

const SearchBar = styled.div`
  display: flex;
  background-color: #4a6488;
  border-radius: 7px;
  margin: 10px;
  height: 35px;
`

const Input = styled.input`
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  &:focus-within {
    outline: none;
  }
`

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const GroupsContainer = styled.div``
