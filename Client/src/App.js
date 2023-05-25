import './App.css';
import axios from 'axios'
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import { useState } from 'react';
import style from './app.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail';
import Forms from './components/Form';
import Favorites from './components/Favorites';
function App() {
  const [characters, setCharacters] = useState([])
  const location = useLocation();


  //const onSearch= (id) => {
  //  setCharacters([...characters, example])
  //}
  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id)
      })

    )

  }

  return (




    <body class="app">
      <div className={style.app} >

      {location.pathname !== '/' && <NavBar onSearch={onSearch} />}
        <Routes>

          <Route path='/' element={<Forms/>}/>

          <Route path='/home' element={  <Cards characters={characters} onClose={onClose} />} />

          <Route path='/about' element={<About/>} />
          
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
        



      </div>
    </body>
  );
}

export default App;