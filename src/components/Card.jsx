import style from './cards.module.css'
import { Link } from 'react-router-dom';


const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
  return (

   
      <div className={style.tarjetas}>


        <img src={image} alt='' />
        <div className='cards'>
        <Link to={`/detail/${id}`}>
          <h2>Name: {name}</h2>
          <h2>Status: {status}</h2>
          <h2>Species: {species}</h2>
          <h2>Gender: {gender}</h2>
          <h2>Origin: {origin}</h2>
        
          </Link>
        </div>
        <button onClick={() => { onClose(id) }}>CERRAR</button>
      </div>
     
    
  );
};

export default Card

