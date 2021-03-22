import styled from 'styled-components';
import { neutral, fontSize } from "../theme/utils";
import Search from './Search'

const Container = styled.header`
  background-color: ${neutral("dark")};
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;
  color: ${neutral("white")};
  gap: 5rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: ${fontSize('xxl')};
  align-self: center;
  font-weight: normal;
`;


const Header = ({allJobs, onComplete}) => {
  return (
    <Container>
      <Title>Jobs</Title>
    </Container>
  )
}

export default Header 