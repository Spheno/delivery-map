import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import { ProtectedRoute } from '../../hoc/ ProtectedRoute';
import { Map } from '../Map/Map';
import { EditDeliveryForm } from '../EditDeliveryForm/EditDeliveryForm';
import { NewDeliveryForm } from '../NewDeliveryForm/NewDeliveryForm';

import model from '../../utils/model.json'

function App() {

  const navigate = useNavigate();

  /* авторизация пользователя */

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false)
  const [name, setName] = useState(localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : '')
  const [password, setPassword] = useState(localStorage.getItem('password') ? JSON.parse(localStorage.getItem('password')) : '')
  const [currentUserModel, setCurrentUserModel] = useState(localStorage.getItem('currentUserModel') ? JSON.parse(localStorage.getItem('currentUserModel')) : [])

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  }

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  let newModel = model
  const pushId = () => {
    const newModell = newModel.map((n, i) => { n.id = `${i}${new Date().getTime()}` })
    return setCurrentUserModel(newModel)
  }

  const handleLogIn = ({ login, password }) => {
    pushId()
    handleLoggedIn()
    setName({ login })
    setPassword({ password })
    navigate("/")
  }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("password", JSON.stringify(password));
  }, [name, password]);

  useEffect(() => {
    localStorage.setItem("currentUserModel", JSON.stringify(currentUserModel));
  }, [currentUserModel]);

  /* выход */

  const handleLogOut = (e) => {

    e.preventDefault();
    setCurrentUserModel([])
    setIsLoggedIn(false);
    setName('')
    setPassword('')
    navigate("/signin")
  }

  /* Редактирование создание новых доставок */

  const [isDeliveryPopupOpen, setIsDeliveryPopupOpen] = useState(false);
  const [isNewDeliveryPopupOpen, setNewIsDeliveryPopupOpen] = useState(false);

  const handleDeliveryClick = () => {
    setIsDeliveryPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsDeliveryPopupOpen(false);
    setNewIsDeliveryPopupOpen(false);
  };

  const handleNewDeliveryClick = () => {
    setNewIsDeliveryPopupOpen(true);
    //getClickXY()
  };
  /*
    function getClickXY(event) {
  
      let clickX = (event.layerX == undefined ? event.offsetX : event.layerX) + 1;
  
      let clickY = (event.layerY == undefined ? event.offsetY : event.layerY) + 1;
  
      console.log(clickX, clickY)
  
    }*/

  return (
    <>

      <Routes>

        <Route path="/" element={<Layout isLoggedIn={isLoggedIn} logOut={handleLogOut} />}>

          <Route path="signin" element={<Login isLoggedIn={isLoggedIn} onLogIn={handleLogIn} />} />

          <Route index element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Map
                model={currentUserModel}
                onDeliveryClick={handleDeliveryClick}
                onMapClick={handleNewDeliveryClick}
              />

              <EditDeliveryForm
                isOpen={isDeliveryPopupOpen}
                onClose={closeAllPopups}
              />

              <NewDeliveryForm
                isOpen={isNewDeliveryPopupOpen}
                onClose={closeAllPopups}

              />

            </ProtectedRoute>} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  );

};

export default App;
