const ValidarUsuario = (email, password, datos) => {
    const find = datos.map((user)=>{
        if(user.correo===email){
            if(user.contraseña === password){
               return true;
            }
        }
        return false;
    });
    return find[0];
};

export default ValidarUsuario;