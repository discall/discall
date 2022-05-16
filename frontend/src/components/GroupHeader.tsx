import styled from '@emotion/styled'
import adicionar from '../assets/adicionar.png'
import configuracoes from '../assets/configuracoes.png'
import livro from '../assets/logo.png'
import { LeftPage } from '../pages/MainPage'

interface Props {
  setPage: (page: LeftPage) => void
}

const GroupHeader: React.FC<Props> = ({ setPage }) => {
  return (
    <Container>
      <Button onClick={() => setPage(LeftPage.GROUPS)}>
        <Logo src={livro} />
      </Button>
      <Buttons>
        <Button onClick={() => setPage(LeftPage.CONFIG)}>
          <img src={configuracoes} alt="configuracoes" />
        </Button>
        <Button onClick={() => setPage(LeftPage.ADD_GROUP)}>
          <img src={adicionar} alt="adicionar" />
        </Button>
      </Buttons>
    </Container>
  )
}

export default GroupHeader

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img``

const Buttons = styled.div`
  margin-left: auto;
  padding-bottom: 20px;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const AddButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
