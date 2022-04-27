import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import { ProtectedRoute } from '../../hoc/ ProtectedRoute';


function App() {

  const navigate = useNavigate();

  /* авторизация пользователя */

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false)
  const [name, setName] = useState(localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : '')
  const [password, setPassword] = useState(localStorage.getItem('password') ? JSON.parse(localStorage.getItem('password')) : '')

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  }

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);


  const handleLogIn = ({ login, password }) => {

    handleLoggedIn()
    setName({ login })
    setPassword({ password })
    navigate("/")

  }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("password", JSON.stringify(password));
  }, [name, password]);

  /* выход */

  const handleLogOut = (e) => {

    e.preventDefault()

    setIsLoggedIn(false);
    setName('')
    setPassword('')
    navigate("/signin")

  }


  return (
    <>

      <Routes>

        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} logOut={handleLogOut} />}>

          <Route path="signin" element={<Login isLoggedIn={isLoggedIn} onLogIn={handleLogIn} />} />

          <Route index element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>

              </ProtectedRoute>} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  );

};

export default App;
