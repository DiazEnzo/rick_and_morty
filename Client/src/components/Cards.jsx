import Card from './Card';
import style from './cards.module.css'

const Cards = ({ characters, onClose }) => {
      return (<div className={style.card}>
            {
                  characters.map(({ id, name, species, status, gender, origin, image }) => {

                        return (<Card

                              key={id}
                              id={id}
                              name={name}
                              species={species}
                              gender={gender}
                              image={image}
                              status={status}
                              origin={origin.name}

                              onClose={onClose}

                        />)


                  })
            }

      </div>);
}

export default Cards
