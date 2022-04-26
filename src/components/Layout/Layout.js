import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export function Layout({ isLoggedIn }) {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );

}