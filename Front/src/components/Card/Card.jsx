import style from '../Card/Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteCharacter } from '../../redux/actions/actions';
//import axios from 'axios';


const Card = ({name, species, gender, image, onClose, id}) => {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteCharacter(id));
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({name, species, gender, image, onClose, id}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
  
   return (
      <div className={style.container}>
         <div className={style.btn}>
       {
         isFav ? (
            <button className={style.corazonbtn} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={style.corazonbtn} onClick={handleFavorite}>🤍</button>
         )
       }
         </div>

         <div className={style.boton}>
            <button className= {style.buttonCard} onClick={onClose}>X</button>
         </div>

         <div>
         <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
         </Link>
       </div>

         <img className={style.img} src={image} alt={name}/>

        <div className={style.species}>
         <h2>{species}</h2>
        </div> 

         <div  className={style.gender}>
          <h2>{gender}</h2>
         </div>
      </div>
   );
}
//alt -> por si no carga la imagen, hace una referencia de que se trata la imagen.

export default Card;