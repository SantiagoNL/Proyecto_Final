// Registro de usuarios

/*
1- pedir nombre a usuarios
2- pedir apellido a usuarios
3- pedir color favorito del usuario

4- crear un array con los datos del usuario
5- que se muestre el array en la consola
6- mostrar en un alert los datos y preguntar si son correctos

*/



const nombre = prompt ("Ingrese su nombre")
const apellido = prompt ("Ingrese su apellido")
const color = prompt ("Ingrese un color")

let arrayUno = [];


function Usuario (a, b, c){

    this.nombre=a
    this.apellido=b
    this.color=c



}
const usuario1 = new Usuario(nombre, apellido, color)

const usuario2 = new Usuario("Paulina", "Woldarsky", "Azul")

const usuario3 = new Usuario("Tomas", "Cornelli", "Morado")



arrayUno.push(usuario1);
arrayUno.push(usuario2);
arrayUno.push(usuario3);






console.log("ARRAY 1")
console.log(arrayUno)


alert(`Bienvenido `+nombre+" "+apellido)