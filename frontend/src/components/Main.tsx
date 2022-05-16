import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import annex from '../assets/annex.png'
import telegram from '../assets/telegram.png'
import { createMessage, getMessages } from '../services/api.message'
import { Message } from '../utils/types'
import MessageBox from './MessageBox'

interface Props {
  messages: (Message & {
    author: {
      // id: number;
      name: string
    }
  })[]
}

const Main: React.FC<Props> = ({ messages: defaultMessages }) => {
  const [messages, setMessages] = useState(defaultMessages)
  const [message, setMessage] = useState('')

  const { groupId: groupIdStr } = useParams()
  const groupId = parseInt(groupIdStr!)

  const ref = useRef<HTMLDivElement>(null)

  const handleSubmit: React.FormEventHandler = async e => {
    e.preventDefault()

    try {
      await createMessage(groupId, { content: message })
      setMessage('')
      const messages = await getMessages(groupId)
      setMessages(messages)
    } catch (error) {
      console.log(error)
      setMessage('')
    }
  }

  useEffect(() => {
    getMessages(groupId).then(setMessages)
  }, [groupId])

  useEffect(() => {
    if (ref.current) {
      const scrollHeight = ref.current.scrollHeight
      const height = ref.current.clientHeight
      const maxScrollTop = scrollHeight - height
      ref.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
    }
  }, [ref, messages])

  return (
    <Container>
      <MessagesContainer ref={ref}>
        {messages.map(({ author, content }) => (
          <MessageBox author={author} content={content} />
        ))}
      </MessagesContainer>

      <MessageBar onSubmit={handleSubmit}>
        <FileButton>
          <img src={annex} alt="annex" />
        </FileButton>
        <MessageInput>
          <Input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </MessageInput>
        <SendButton>
          <img src={telegram} alt="telegram" />
        </SendButton>
      </MessageBar>
    </Container>
  )
}

export default Main

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
  height: calc(100vh - 90px);
`

const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`

const MessageBar = styled.form`
  background-color: #223c5b;
  display: flex;
  align-items: center;
`

const MessageInput = styled.div`
  background-color: #4a6488;
  border-radius: 7px;
  margin: 5px;
  height: 35px;
  width: 100%;
`

const FileButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const SendButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
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
