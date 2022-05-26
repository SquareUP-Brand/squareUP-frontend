import { ReactComponent as Logo } from 'assets/logo.svg';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  @media (min-width: 1415px) {
    display: none;
  }
`;

const MenuText = styled.h3`
  margin: -0.5em 0;
`;

const HamburgerMenu = () => (
  <Container>
    <Logo width={50} />
    <MenuText>Menu</MenuText>
  </Container>
);

export default HamburgerMenu;
