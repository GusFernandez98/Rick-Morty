import { useState } from 'react';
import style from '../Form/Form.module.css';
import validation from './validation';

//Forma de crear un formulario funcional:
const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

//Cada vez que haya un cambio en los inputs, se dispara el event.
//Con el event quiero lograr que se me guarde en el estado local lo que el usuario escribe en los inputs.
//Copia del estado para perder otras props.
//En la propiedad name tenemos el nombre del input.
//En value es donde el usuario esta escribiendo.
    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
//Para evitar que se recargue la pagina
        event.preventDefault();
        login(userData);
    };

    return(
        <form  onSubmit={handleSubmit} className={style.formulario}>
            <label htmlFor="username" className={style.username}>Username </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} className={style.inputname} />
            {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
            <br />
            <label htmlFor="password" className={style.password}>Password </label>
            <input type="text" name="password" value={userData.password} onChange={handleInputChange} className={style.inputpass} />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            <br />
            <button className={style.login}>LOGIN</button>
        </form>
    )
}

export default Form;

/*
htmlfor -> Se le coloca el nombre del campo(a llenar).
·Muy importante agregar el atributo name en el input.
·Si en el type pongo password -> me van a salir los puntitos, por esto indico text.
·Onchange -> espera un cambio y ejecuta la funcion.
*/