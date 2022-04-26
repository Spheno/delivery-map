import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from '../Layout/Layout';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>

      <Routes>

        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} />}>

          <Route path="signin" element={<Login isLoggedIn={isLoggedIn} /*onLogIn={handleLogIn} err={errMessage}*/ />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  );

};

export default App;
