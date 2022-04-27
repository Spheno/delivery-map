import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';


function App() {

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

  }

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(name));
    localStorage.setItem("password", JSON.stringify(password));
  }, [name, password]);


  return (
    <>

      <Routes>

        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>

          <Route path="signin" element={<Login onLogIn={handleLogIn} />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  );

};

export default App;
