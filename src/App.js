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

function App() {
  const [characters, setCharacters] = useState([])
const [pathname]= useLocation()


  //const onSearch= (id) => {
  //  setCharacters([...characters, example])
  //}
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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

        {pathname !== '/' && <NavBar onSearch={onSearch} />}
        <Routes>

          <Route path='/' element={<Forms/>}/>

          <Route path='/home' element={  <Cards characters={characters} onClose={onClose} />} />

          <Route path='/about' element={<About/>} />
          
          <Route path='/detail/:id' element={<Detail/>} />

        </Routes>
        



      </div>
    </body>
  );
}

export default App;