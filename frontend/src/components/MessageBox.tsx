import styled from '@emotion/styled'

interface Props {
  author: { name: string }
  content: string
}

const MessageBox: React.FC<Props> = ({ author, content }) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  return (
    <Container>
      <Username>{author.name}:</Username>
      <MessageContent
        dangerouslySetInnerHTML={{
          __html: content.replace(urlRegex, '<a href="$1">$1</a>'),
        }}
      />
    </Container>
  )
}

export default MessageBox

const Container = styled.div`
  background: #223c5b;
  border-radius: 15px;
  width: fit-content;
  padding: 14px 20px;
  color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-family: 'fresca';
  margin: 20px;
`

const Username = styled.div`
  color: #86a8cc;
  font-size: 18px;
`

const MessageContent = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-right: 50px;
`
