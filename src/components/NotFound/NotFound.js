import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="not-found">

      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__button hover-button" onClick={goBack}>Назад</button>

    </section>
  );

};