import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export function Layout({ isLoggedIn, logOut }) {

  return (
    <>
      <Header isLoggedIn={isLoggedIn} logOut={logOut} />
      <Outlet />
      <Footer />
    </>
  );

}