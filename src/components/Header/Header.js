import './Header.css';

export function Header({ isLoggedIn, logOut, reset }) {

  return (

    <header className="header page__container">

      <h1 className="header__title">DM</h1>

       { isLoggedIn ? <div className="header__button-container">
         <button className="header__button hover-button" type="button" title="Сбросить все изменения карты" onClick={(e) => {reset(e)}} >Reset</button>
         <button className="header__button hover-button" type="button" onClick={(e) => {logOut(e)}} >Выйти</button>
         </div> : '' } 

    </header>

  );

};
