import styled from '@emotion/styled'
import { useState } from 'react'
import livro from '../assets/livro.png'
import lupa from '../assets/lupa.png'
import wip from '../assets/wip.png'
import { LeftPage } from '../pages/MainPage'
import { createGroup } from '../services/api.group'
import { Groupchat, Message, User } from '../utils/types'
import Group from './Group'

interface Props {
  groups: (Groupchat & { messages: (Message & { author: User })[] })[]
  page: LeftPage
  setPage: (page: LeftPage) => void
}

const Groups: React.FC<Props> = ({ groups, page, setPage }) => {
  const [name, setName] = useState('')

  const handleSubmitGroup: React.FormEventHandler = async e => {
    e.preventDefault()

    try {
      await createGroup({ name })
    } catch (error) {
      console.log(error)
    } finally {
      setPage(LeftPage.GROUPS)
      setName('')
    }
  }

  switch (page) {
    case LeftPage.GROUPS:
      return (
        <Container>
          <SearchBar>
            <Input type="text" />
            <SearchButton>
              <img src={lupa} alt="lupa" />
            </SearchButton>
          </SearchBar>
          <GroupsContainer>
            {groups.map(({ name, messages, id }) => (
              <Group
                name={name}
                lastMessage={messages.at(-1)}
                key={id}
                id={id}
              />
            ))}
          </GroupsContainer>
        </Container>
      )
    case LeftPage.CONFIG:
      return (
        <Container>
          <Image src={wip} />
        </Container>
      )
    case LeftPage.ADD_GROUP:
      return (
        <Container>
          <Form onSubmit={handleSubmitGroup}>
            <Image src={livro} alt="livro" />
            <NameBar>
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Group Name"
              />
            </NameBar>
            <Button type="submit">Criar</Button>
          </Form>
        </Container>
      )
  }
}

export default Groups

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 50%;
  margin: auto;
`

const SearchBar = styled.div`
  display: flex;
  background-color: #4a6488;
  border-radius: 7px;
  margin: 10px;
  height: 35px;
`

const Button = styled.button`
  background-color: #4a6488;
  padding: 15px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
`

const NameBar = styled.div`
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
