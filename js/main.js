function saludo(nombre, apellido) {

    alert(`Hola ${nombre}${apellido}.  Bienvenido a LoremShop!`);

}

const nombre = prompt("Ingrese su nombre: ");

const apellido = prompt("Ingrese su apellido: ");

saludo(nombre, apellido);

class Producto {

    constructor(nombre, precio) {

        this.nombre = nombre;

        this.precio = precio;

    }

}

let listaProductos = [

    {nombre: 'Producto beta 1', precio: 10},

    {nombre: 'Producto beta 2', precio: 20},

    {nombre: 'Producto beta 3', precio: 30},

    {nombre: 'Producto beta 4', precio: 40},

    {nombre: 'Producto beta 5', precio: 50},

    {nombre: 'Producto beta 6', precio: 60},

    {nombre: 'Producto beta 7', precio: 70},

    {nombre: 'mouse', precio: 80},

    {nombre: 'Producto beta 9', precio: 90},

    {nombre: 'Producto beta 10', precio: 100},

];

const agregarProducto = () => {

    confirmar = confirm("¿Desea agregar un nuevo producto?");

    if (confirmar) {

        let nombre = prompt("Ingrese el nombre del producto: ");

        let precio = parseFloat(prompt("Ingrese el precio del producto: "));

        listaProductos.push(new Producto(nombre,precio));

        alert("Producto agregado exitosamente!");

    }

}

agregarProducto();

let confirmarEliminar = confirm("¿Desea eliminar un producto?");

if (confirmarEliminar) {

    let nombre = prompt("Ingrese el nombre del producto: ");

    //Verifico si existe (recibo un booleano)

    let existe = listaProductos.some(elemento => elemento.nombre === nombre)

    //Guardo en un nuevo array, los nombres de los productos

    const buscarIndice = listaProductos.map(elemento => elemento.nombre)

    //Busco por el índice, del array buscarIndice

    let indice = buscarIndice.indexOf(nombre)

    if(existe){

        listaProductos.splice(indice,1)

        alert("Producto eliminado exitosamente!");

    }else{

        alert("Producto no encontrado")

    }

}

let verProductos = confirm("¿Desea ver los productos disponibles?");

if (verProductos) {

    for (let i = 0; i < listaProductos.length; i++) {

        alert(`${listaProductos[i].nombre} - ${listaProductos[i].precio}`);

    }

}