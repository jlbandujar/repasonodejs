const miPromesa = new Promise(
    (resolve, reject)=>{
        reject('Todo Mal');
        resolve('Todo Bien');
        
    }
)
miPromesa
.then(
    (msg)=>console.log(msg) )
.catch((msg) => console.log(msg) )
