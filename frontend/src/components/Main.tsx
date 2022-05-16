import styled from '@emotion/styled'
import annex from '../assets/annex.png'
import telegram from '../assets/telegram.png'
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

const Main: React.FC<Props> = ({ messages }) => {
  return (
    <Container>
      <div>
        {messages.map(({ author, content }) => (
          <MessageBox author={author} content={content} />
        ))}
      </div>

      <MessageBar>
        <FileButton>
          <img src={annex} alt="annex" />
        </FileButton>
        <MessageInput>
          <Input type="text" />
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
  height: 100%;
`

const MessageBar = styled.footer`
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
