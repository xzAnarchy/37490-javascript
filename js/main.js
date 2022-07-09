function saludo(nombre, apellido) {
    alert(`Hola ${nombre} ${apellido}.  Bienvenido a LoremShop!`);
} // Fin de la función saludo 


//Se ejecuta la funcion saludo
const nombre = prompt("Ingrese su nombre: ");
const apellido = prompt("Ingrese su apellido: ");
saludo(nombre, apellido);


class producto {
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
    {nombre: 'Producto beta 8', precio: 80},
    {nombre: 'Producto beta 9', precio: 90},
    {nombre: 'Producto beta 10', precio: 100},
];

const agregarProducto = () => {
    confirmar = confirm("¿Desea agregar un nuevo producto?");
    if (confirmar) {
        let nombre = prompt("Ingrese el nombre del producto: ");
        let precio = prompt("Ingrese el precio del producto: ");
        listaProductos.push({ nombre: nombre, precio: precio });
        alert("Producto agregado exitosamente!");
    }
}

agregarProducto();


confirm = confirm("¿Desea eliminar un producto?");
if (confirm) {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = prompt("Ingrese el precio del producto: ");
    listaProductos.pop({ nombre: nombre, precio: precio });
    alert("Producto eliminado exitosamente!");
}

const mostrarProductos = () => {
    confirm = confirm("¿Desea ver los productos disponibles?");
    if (confirm) {
        let lista = "";
        for (let i = 0; i < listaProductos.length; i++) {
            lista += `${listaProductos[i].nombre} - ${listaProductos[i].precio} \n`;
        }
        alert(lista);
    }
}

mostrarProductos();



