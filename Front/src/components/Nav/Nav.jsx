import SearchBar from "../SearchBar/SearchBar"
import style from '../Nav/Nav.module.css';
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return(
        <nav className={style.barraSuperior}>
            <div>
                <Link to='/' className={style.logout} >Logout</Link>
                <Link to='home' className={style.home} >Home</Link>
                <Link  to='about' className={style.about} >About</Link>
                <Link to='favorites' className={style.favorites} >Favorites</Link>
            </div>

            <SearchBar onSearch={onSearch}/>
            
        </nav>
    )
}

export default Nav;