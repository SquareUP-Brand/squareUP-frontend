import HamburgerMenu from 'components/HamburgerMenu';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <HamburgerMenu />
    <Outlet />
  </>
);

export default App;
