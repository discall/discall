import styled from '@emotion/styled'
import livro from '../assets/livro.png'

interface Props {
  name: string
  members: number
}

const MainHeader: React.FC<Props> = ({ name, members }) => {
  return (
    <Container href="#">
      <Image src={livro} alt="livro" />
      <Data>
        <GroupName>{name}</GroupName>
        <NumMembers>{members} participantes</NumMembers>
      </Data>
    </Container>
  )
}

export default MainHeader

const Container = styled.a`
  display: flex;
  padding-left: 10px;
  margin-bottom: 10px;
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
  font-size: 22px;
  padding-top: 15px;
  margin-bottom: 10px;
`

const NumMembers = styled.div``
