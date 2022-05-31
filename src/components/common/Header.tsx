import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';

const HeaderContainer = styled.header`
  height: 6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: #1d1d1d;
  box-shadow: inset 0 -0.4rem 3rem #2d4039;

  font-family: Leixo Demo;
`;

const Left = styled.div`
  display: flex;
`;
const Middle = styled.nav`
  display: flex;
  font-size: 2em;
  @media (max-width: 1415px) {
    display: none;
  }
`;
const Right = styled.div`
  display: flex;
  font-size: 3.5em;
  align-items: flex-start;
`;
const Test = styled.div`
  font-size: 3em;
  padding: 0 0.5rem;
`;

const StyledLogo = styled(Logo)`
  @media (max-width: 1415px) {
    display: none;
  }
`;


const StyledNavLink = styled(NavLink)`
  padding: 0 0.5rem;
  transition: text-decoration 0.5s;
  :visited {
    color: unset;
    text-decoration: none;
  }
  :link {
    color: unset;
    text-decoration: none;
  }
  :hover {
    text-decoration: underline;
    text-underline-offset: 2rem;
  }
  &[class*='active'] {
    text-decoration: underline;
    text-underline-offset: 2rem;
    text-decoration-color: lightgray;
    :hover {
      text-decoration-color: unset;
    }
  }
`;

const Badge = styled.span`
  font-size: 0.25em;
  font-weight: bold;
  margin-left: -10px;
  border-radius: 2em;
  padding: 0 0.25em;
  background-color: #2d4039;
`;

const Header = () => {
  const cartCount = useAppSelector(state => state.shop.cartCount);

  return (
    <HeaderContainer>
      <Left>
        <StyledLogo width="3rem" />
        <Test>SquareUP</Test>
      </Left>
      <Middle>
        <StyledNavLink to="/">Shop</StyledNavLink>
        <StyledNavLink to="/info">Info</StyledNavLink>
        <StyledNavLink to="/about">About Us</StyledNavLink>
        <StyledNavLink to="/showroom">Showroom</StyledNavLink>
      </Middle>
      <Right>
        <RiShoppingBag3Line />
        <Badge>{cartCount || ''}</Badge>
      </Right>
    </HeaderContainer>
  );
};

export default Header;
