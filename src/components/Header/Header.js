import './Header.css';


export function Header({ isLoggedIn, logOut }) {

  return (

    <header className="header page__container">

      <h1 className="header__title">DM</h1>

       { isLoggedIn ? <button className="header__button hover-button" type="button" onClick={(e) => {logOut(e)}} >Выйти</button> : '' } 

    </header>

  );

};
