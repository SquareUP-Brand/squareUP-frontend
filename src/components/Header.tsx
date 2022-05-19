import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  min-height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1d1d1d;
  color: white;
  box-shadow: inset 0 -0.4rem 3rem #2d4039;
  
  font-family: Leixo Demo;
  font-size: 3rem;
  letter-spacing: 0.4rem;
`;

const PATH: Record<string, string> = {
  '/': 'SHOP',
  about: 'ABOUT US',
  info: 'INFO',
  showroom: 'SHOWROOM',
};

const Header = () => {
  const { pathname } = useLocation();

  return <HeaderContainer>{PATH[pathname]}</HeaderContainer>;
};

export default Header;
