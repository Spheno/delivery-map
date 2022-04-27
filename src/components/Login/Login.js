import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation'


export function Login({ onLogIn, isLoggedIn }) {

  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/")
    }
  }, [])
  
   const { values, handleChange, errors, isValid } = useFormWithValidation();
 
   function handleSubmit(e) {
     e.preventDefault();
     onLogIn(
       {
         login: values.login,
         password: values.password
       }
     );
   }

  return (

    <main className="page__container">
      <section className="form">
        <h2 className="form__title">Авторизация</h2>
        <form name="signin" className="form__container" onSubmit={(e) => handleSubmit(e)} >
          <label className="form__label" htmlFor="login">
            Login
            <input type="text" name="login" className="form__input" id="login"
              placeholder="Login" minLength="2" maxLength="30" required value={values.login || ""} onChange={(e) => handleChange(e)} />
            <span className="form__input-error" id="login-error">
              {errors.login || ""}
            </span>
          </label>
          <label className="form__label" htmlFor="password">
            Пароль
            <input type="password" name="password" className="form__input" id="password"
              placeholder="Пароль" required value={values.password || ""} onChange={(e) => handleChange(e)} />
            <span className="form__input-error" id="password-error">
              {errors.password || ""}
            </span>
          </label>

          <button className={`form__button-submit form__button-submit_type_signin ${isValid ? 'hover-button' : 'button__disabled'}`} type="submit">Войти</button>
        </form>
      </section>
    </main>

  );

};