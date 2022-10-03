import Navbar from '../../components/Navbar/Navbar';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import './App.css';

const StyledMain = styled.main`
  text-align: center;
  color: var(--slate);
  padding: 0 15vw;

  @media (max-width: 768px) {
    padding: 0 5vw;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
`;

export default function App() {
  return (
    <>
      <Navbar />
      <StyledGrid>
        <StyledMain>
          <Content />
        </StyledMain>
        <Footer />
      </StyledGrid>
    </>
  );
}