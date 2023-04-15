const regexEmail = /\S+@\S+\.\S+/                      

const validation = (userData) => {
    let errors = {};
    
    if(!regexEmail.test(userData.username)) errors.username = "Debe ser un correo electronico";
    if(!userData.username) errors.username = "Este campo no puede estar vacio";
    if(userData.username.length > 35) errors.username = "No puede superar los 35 caracteres";
    if(!userData.password.match(/\d/)) errors.password = "La contraseña debe contener al menos un numero";
    if(userData.password.length < 6 || userData.password.length > 10) errors.password = "La contraseña debe contener entre 6 y 10 caracteres";

    return errors;
};

export default validation;

//Form terminado.