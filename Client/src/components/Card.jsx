import style from './cards.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from './Redux/action';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({ myFavorites,addFav,removeFav, id, name, status, species, gender, origin, image, onClose }) => {
  
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      removeFav(id);
    } else {
      addFav({ id, name, status, species, gender, origin, image });
    }
    setIsFav(!isFav);
  };

  
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);


  return (

   
      <div className={style.tarjetas}>


        <img src={image} alt='' />
        <div className='cards'>
{
    
      <button onClick={handleFavorite}>{isFav ? '❤️' :'🤍'}</button>
   
}

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

const mapDispatchToProps = (dispatch) => {
return {
  addFav: (character)=> dispatch(addFav(character)),
  removeFav:  (id)=> dispatch(removeFav(id))
}

}


const mapStateToProps= (state) =>{

return {
  myFavorites: state.myFavorites
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)

