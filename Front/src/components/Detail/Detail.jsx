import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from '../Detail/Detail.module.css';
import axios from 'axios';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
      async function inEffect() {
        try {
          const { data } = await axios(
            `http://localhost:3001/rickandmorty/character/detail/${id}`
          );
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        } catch (error) {
          console.log("character update in useeffect in component Detail", error);
        }
      }
      inEffect();
      return setCharacter({}); // cuando se desmonta -> {}
    }, [id]);

    return(
        <div>
            <h1 className={style.titulo}>Nombre: {character?.name}</h1>
            <h2 className={style.estado}>Status: {character?.status}</h2>
            <h3 className={style.especie}>Especie: {character?.species}</h3>                        
            <h4 className={style.genero}>Género: {character?.gender}</h4>                
            <h5 className={style.origen}>Origen: {character?.origin?.name}</h5>       
            <img className={style.imagen} src={character.image} alt={character?.name}/>                 
        </div>
    )
}
//? -> condicional chaning -> Pregunta si tengo algo en mi estado.
//Evita que se rompa la pagina por la demora en cargar. 
export default Detail;