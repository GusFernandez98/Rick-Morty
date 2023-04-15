import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav';

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

//REVISAR CON EL VIDEOS!!

function App () {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const { characters } = useSelector((state) => state);
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addLocation(location.pathname));
  }, [dispatch, location]);

function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`)
  .then(({ data }) => {
     const { access } = data;
     setAccess(data);
     access && navigate('/home');
  });
}

  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

const onClose = (id) => {
  setCharacters(
//Para quedarme con todos los personajes, menos el del id seleccionado.
//filter -> recorro cada character, me quedo con todos lo character que sean distintos al id que recibo por parametro.
    characters.filter(character => character.id !== id)
  )
};

//onSearch={onSearch} ->eso seria pasar la funcion al componente nav.
  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form login={login} /> : <Nav onSearch={onSearch}/> }
      <Routes>
        <Route path='home' element={<Cards onClose={onClose} characters={characters}/>} />
        <Route path='about' element={<About />} />
        <Route path='detail/:detailId' element={<Detail />} />
        <Route path='favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App


/*
·Antes de Route era asi:
<div>
   <Cards
    onClose={onClose}
    characters={characters}
   />
</div>
·Ahora paso a agregarlo en "element" 
*/
