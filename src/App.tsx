import Footer from 'components/common/Footer';
import HamburgerMenu from 'components/common/HamburgerMenu';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/common/Header';

const AppPadding = styled.main`
  padding: 5em;
  min-height: 82vh;
`;

const App = () => (
  <>
    <Header />
    <HamburgerMenu />
    <AppPadding>
      <Outlet />
    </AppPadding>
    <Footer />
  </>
);

export default App;
