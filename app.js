const persona = {
    nombre: 'Juan',
    apellido: 'López',
    departamento: 'Informática',
    getNombre: function() {
        return `${this.nombre} ${this.apellido}`
    }
}

/* function suma(n1,n2){
    return n1 + n2;
}*/
setTimeout(() => {console.log('Hola Mundo');
}, 1000);

const getUsuarioId = (id, callback)=>{
    const user = {
        id: id,
        nombre: 'Juan'
    }
    callback(user);
}

getUsuarioId(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre)
})

