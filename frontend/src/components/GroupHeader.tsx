import styled from '@emotion/styled'
import adicionar from '../assets/adicionar.png'
import configuracoes from '../assets/configuracoes.png'
import livro from '../assets/logo.png'

const GroupHeader: React.FC = ({}) => {
  return (
    <Container>
      <Logo src={livro} />
      <Buttons>
        <ConfigButton>
          <img src={configuracoes} alt="configuracoes" />
        </ConfigButton>
        <AddButton>
          <img src={adicionar} alt="adicionar" />
        </AddButton>
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

const ConfigButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const AddButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
