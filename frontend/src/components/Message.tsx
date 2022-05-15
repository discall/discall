import styled from '@emotion/styled'

interface Props {
  username: string
  message: string
}

const Message: React.FC<Props> = ({ username, message }) => {
  return (
    <Container>
      <Username>{username}:</Username>
      <Written>{message}</Written>
    </Container>
  )
}

export default Message

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
`

const Username = styled.div`
  color: white;
  font-size: 18px;
`

const Written = styled.div`
  font-size: 16px;
  margin-top: 10px;
  margin-right: 50px;
`
