const getUsuarioById = ( id, callback ) => {
    const usuario = {
        id,
        nombre: 'Juan'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);
}

getUsuarioById(5, (usu)=>{
    console.log(usu);
    console.log(usu.nombre.toUpperCase())
}
)