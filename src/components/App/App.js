import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Login } from '../Login/Login';
import { ProtectedRoute } from '../../hoc/ ProtectedRoute';
import { Map } from '../Map/Map';
import { EditDeliveryForm } from '../EditDeliveryForm/EditDeliveryForm';
import { NewDeliveryForm } from '../NewDeliveryForm/NewDeliveryForm';
import { PopupWithConfirm } from '../PopupWithConfirm/PopupWithConfirm'

import model from '../../utils/model.json'

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  /* авторизация пользователя */

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false)
  const [name, setName] = useState(localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : '')
  const [password, setPassword] = useState(localStorage.getItem('password') ? JSON.parse(localStorage.getItem('password')) : '')
  const [currentUserModel, setCurrentUserModel] = useState(localStorage.getItem('currentUserModel') ? JSON.parse(localStorage.getItem('currentUserModel')) : null)

  useEffect(() => {
    localStorage.setItem("currentUserModel", JSON.stringify(currentUserModel));
  }, [JSON.stringify(currentUserModel), currentUserModel]);

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  }

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);


  const pushId = () => {
    model.map((n, i) => { n.id = `${i}${new Date().getTime()}` })
    return setCurrentUserModel(model)
  }

  const handleLogIn = ({ login, password }) => {
    pushId()
    handleLoggedIn()
    setName({ login })
    setPassword({ password })
    navigate("/map")
  }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("password", JSON.stringify(password));
  }, [name, password]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/map")
    }
    if (!isLoggedIn) {
      navigate("/signin")
    }
  }, [navigate, isLoggedIn])

  /* выход */

  const handleLogOut = (e) => {

    e.preventDefault();
    setCurrentUserModel([])
    setIsLoggedIn(false);
    setName('')
    setPassword('')
    navigate('/signin')
  }

  /* Редактирование и создание новых доставок */

  const [isDeliveryPopupOpen, setIsDeliveryPopupOpen] = useState(false);
  const [isNewDeliveryPopupOpen, setNewIsDeliveryPopupOpen] = useState(false);

  const handleDeliveryClick = () => {
    setIsDeliveryPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsDeliveryPopupOpen(false);
    setNewIsDeliveryPopupOpen(false);
    setIsPopupWithConfirmOpen(false);
  };

  const [selectedNewDot, setSelectedNewDot] = useState(null);

  function handleNewDotClick(mouseState) {
    return setSelectedNewDot(mouseState)
  }

  const handleNewDeliveryClick = () => {
    setNewIsDeliveryPopupOpen(true);
  };

  const handleDeliveryUpdate = ({ name, amount, x, y, id }) => {
    currentUserModel.map(el => {
      if (el.id === id) {
        el.name = name;
        el.amount = amount;
        el.x = x;
        el.y = y;
      }
    })
    setCurrentUserModel(currentUserModel)
    setSelectedDot(null)
  }

  const [selectedDot, setSelectedDot] = useState(null);

  const handleDotClick = (dot) => {
    setSelectedDot(dot)
  };

  const handleDotDelete = (e) => {
    e.preventDefault();
    setCurrentUserModel(currentUserModel.filter((el) => el.id !== selectedDot.id));
    setSelectedDot(null)
  }

  const handleCreateDot = (dot) => {
    setCurrentUserModel([dot, ...currentUserModel]);
  }

  /* Сброс всех изменений карты */

  const handleReset = (e) => {
    e.preventDefault();
    pushId()
  }

  /* Перетягивание точки по карте */

  const handleDotMove = (e) => {
    e.preventDefault();
    currentUserModel.map(el => {
      if (el.id === selectedDot.id) {
        el.x = mouseState.x;
        el.y = mouseState.y;
      }
    })
    setCurrentUserModel(currentUserModel)
    setSelectedDot(null)
    setMouseState(null)
  }

  const [isPopupWithConfirmOpen, setIsPopupWithConfirmOpen] = useState(false);
  const [mouseState, setMouseState] = useState({});

  const handlePopupWithConfirmOpen = (mouse) => {

    setIsPopupWithConfirmOpen(true);
    setMouseState(mouse)
  };

  return (
    <>

      <Routes>

        <Route path="/signin" element={<Layout isLoggedIn={isLoggedIn} reset={handleReset} logOut={handleLogOut} />}>
          <Route index element={<Login isLoggedIn={isLoggedIn} onLogIn={handleLogIn} />} />
        </Route>

        <Route path="/map" element={<Layout isLoggedIn={isLoggedIn} reset={handleReset} logOut={handleLogOut} />}>

          <Route index element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Map
                model={currentUserModel}
                onDeliveryClick={handleDeliveryClick}
                onMapClick={handleNewDeliveryClick}
                onDotClick={handleDotClick}
                onNewDotClick={handleNewDotClick}
                onDotMove={handlePopupWithConfirmOpen}
              />

              <EditDeliveryForm
                isOpen={isDeliveryPopupOpen}
                onClose={closeAllPopups}
                onUpdate={handleDeliveryUpdate}
                selectedDot={selectedDot}
                onDotDelete={handleDotDelete}
              />

              <NewDeliveryForm
                isOpen={isNewDeliveryPopupOpen}
                onClose={closeAllPopups}
                onCreateDot={handleCreateDot}
                selectedDot={selectedNewDot}
                length={currentUserModel}
              />

              <PopupWithConfirm name='confirm'
                title='Изменить координаты доставки?'
                isOpen={isPopupWithConfirmOpen}
                onClose={closeAllPopups}
                onSubmit={handleDotMove}
              />

            </ProtectedRoute>} />

        </Route>

      </Routes>

    </>
  );

};

export default App;
