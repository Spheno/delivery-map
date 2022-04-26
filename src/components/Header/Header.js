import './Header.css';


export function Header({ isLoggedIn }) {

  return (

    <header className="header">

      <h1 className="header__title">DM</h1>

       { isLoggedIn ? <button className="header__button hover-button" type="button">Выйти</button> : '' } 

    </header>

  );

};
