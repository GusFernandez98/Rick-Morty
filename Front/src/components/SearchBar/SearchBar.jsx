import style from '../SearchBar/SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {

   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);   //Mi estado va a ser lo que escriba el usuario.
   }

   return (
      <div className={style.barra}>
         <input type='search' value={character} onChange={handleChange} />
         <button className={style.buttonAgregar} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
//Para pasarle propiedades a una funcion (como el ejercicio de arriba) se tiene que agregar una cb, para poder pasarle parametros a la fn.


export default SearchBar;