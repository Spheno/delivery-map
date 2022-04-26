import './Login.css';

export function Login({ /*onLogIn, err,*/ isLoggedIn }) {

 /* const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/movies")
    }
  }, [])

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogIn(
      {
        email: values.email,
        password: values.password
      }
    );
  }*/

  return (

    <main className="page__container">
    <section className="form">
      <h2 className="form__title">Авторизация</h2>
      <form name="signin" className="form__container" /*onSubmit={(e) => handleSubmit(e)}*/ >
        <input type="text" name="login" className="form__input" id="login"
          placeholder="login" minLength="2" maxLength="30" required /*onChange={(e) => handleChangeEmail(e)}*/ />
        <input type="password" name="password" className="form__input" id="password"
          placeholder="Пароль" required /*onChange={(e) => handleChangePassword(e)}*/ />
        <button className="form__button-submit form__button-submit_type_signin" type="submit">Войти</button>
      </form>
    </section>
  </main>

  );

};