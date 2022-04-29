import './Popup.css';
import { useEffect, useRef } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation'

export function Popup({ isOpen, onClose }) {
  const popupLinkRef = useRef();

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('keyup', (e) => { handlerClosePopupOnEsc(e) });
    return () => {
      document.removeEventListener('keyup', (e) => { handlerClosePopupOnEsc(e) });
    }

  }, [isOpen, onClose])

  function handlerClosePopupOnEsc(e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  function handlerClosePopupOverlayClick(e) {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  }

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  /*function handleSubmit(e) {
    e.preventDefault();
    onLogIn(
      {
        login: values.login,
        password: values.password
      }
    );
  }*/

  return (

    <article className={`popup  ${isOpen ? 'popup_is-opened' : ''}`} onClick={(e) => handlerClosePopupOverlayClick(e)} >
      <div className="popup__container">


        <section className="form">
          <h2 className="form__title">Редактировать данные доставки</h2>
          <form name="signin" className="form__container" /*onSubmit={(e) => handleSubmit(e)}*/ >
            <label className="form__label" htmlFor="login">
              Место доставки
              <input type="text" name="name" className="form__input" id="name"
                placeholder="Наименование торговой точки" minLength="2" maxLength="30" required value={values.name || ""} onChange={(e) => handleChange(e)} />
              <span className="form__input-error" id="login-error">
                {errors.name || ""}
              </span>
            </label>
            <label className="form__label" htmlFor="password">
              Количество товара
              <input type="text" name="amount" className="form__input" id="amount"
                placeholder="Количество товара (шт)" required value={values.amount || ""} onChange={(e) => handleChange(e)} />
              <span className="form__input-error" id="password-error">
                {errors.amount || ""}
              </span>
            </label>

            <button className={`form__button-submit form__button-submit_type_signin ${isValid ? 'hover-button' : 'button__disabled'}`} type="submit">Войти</button>
            <button className="popup__button-close popup__button-close_type_profile hover-button" type="button" aria-label="Закрыть" onClick={onClose}></button>

          </form>
        </section>

      </div>

    </article>

  )
}