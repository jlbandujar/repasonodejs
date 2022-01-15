const empleados = [{id:1,nombre:'Juan' },
{id: 2,nombre: 'María'},{id: 3,nombre: 'Pepe'}]
const getEmpleado = (id)=>{
    const miPromesa = new Promise((resolve, reject) => {
        const empleado =empleados.find( e=>e.id===id)?.nombre;
        if ( empleado ) {
            resolve(empleado)
        } else {
            reject(`No existe empleado con id ${id}`); 
        }
    })
    return miPromesa;
}
/*getEmpleado(5)
.then(emp =>console.log(emp))
.catch(error => console.log(error));*/
getInfoUsuario = async() =>{
       return 'Hola Daw';
}
getInfoUsuario().then(msg=>console.log(msg))