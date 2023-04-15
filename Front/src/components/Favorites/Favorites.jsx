import { useSelector, useDispatch } from "react-redux";
import style from "../Favorites/Favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions/actions";


const Favorites = () => {
    const { myFavorites } = useSelector(state => state);
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    };

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return(
        <div> 
            <div className={style.allselect} >
            <select className={style.select1} onChange={handlerOrder}>
                <option value="Order" disabled="disabled">Order</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select className={style.select2}  onChange={handlerFilter}>
                <option value="Order" disabled="disabled">Filter</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            </div>
            {
                myFavorites.map((character) => {
                    return(
                        <div  className={style.container}>
                             <div>
                                <Link to={`/detail/${character.id}`}>
                                <h2 className={style.name}>{character.name}</h2>
                                </Link>
                            </div>

                            <img className={style.img} src={character.image} alt={character.name}/>

                            <div className={style.species}>
                                 <h2>{character.species}</h2>
                            </div> 

                            <div  className={style.gender}>
                                <h2>{character.gender}</h2>
                             </div>         
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;