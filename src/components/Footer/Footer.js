import './Footer.css';

export function Footer() {

  return (

    <footer className="footer page__container">
      <p className="footer__copyright">&copy; {new Date().getFullYear()} Валерия Дубровская</p>
    </footer>

  );

};