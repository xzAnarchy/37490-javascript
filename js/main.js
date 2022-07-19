/*
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

    {nombre: 'mouse', precio: 50},

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
*/

//Inicio DOM

// como abrir y cerrar el carrito
const carrito = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay"); 

//abrir
carrito.addEventListener("click", ()=>{
    if(cartModalOverlay.classList.contains("open")) {
        cartModalOverlay.classList.remove("open");
    } else {
        cartModalOverlay.classList.add("open");
    }
})

//cerrar
const closeBtn = document.querySelector("#close-btn");

closeBtn.addEventListener("click", ()=>{
    cartModalOverlay.classList.remove("open");
})

//agregar elementos al carrito
const addToCart = document.getElementsByClassName("add-to-cart");
console.log(addToCart)
for(let boton of addToCart) {
    boton.addEventListener("click", compilarDatos)
}
function compilarDatos(e){
    let boton = e.target;
    let producto = boton.parentElement;
    let prodID = producto.getAttribute("id");
    let prodName = producto.querySelector("h3").innerText;
    let precio = producto.querySelector(".product-price").innerText;
    let imagen = producto.querySelector(".product-image").src;
    agregarElemento(prodID,prodName,precio,imagen)
}

function agregarElemento(prodID,prodName,precio,imagen) {
    let productRow = document.createElement("div");
    let contenedorProductos = document.querySelector(".product-rows");

    let elemProducto = `
        <div class="product-row" id="${prodID}">
            <img class="cart-image" src="${imagen}" />
            <h2>${prodName}:</h2>
            <span class="cart-price"> ${precio}</span>
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = elemProducto;
    contenedorProductos.append(productRow);
    let botonesBorrar = productRow.querySelectorAll(".remove-btn");
    for(let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento);
    }
    cantElementosCarrito();
}
function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    cantElementosCarrito()
}

function cantElementosCarrito() {
    let cantidad = document.querySelectorAll(".product-rows > div");
    let cartQuantity = document.querySelector(".cart-quantity");
    cartQuantity.innerText = cantidad.length;

}

//Suma precios carrito
const sumaPrecios = document.querySelector(".total-price");
const productRows = document.querySelectorAll(".product-row");
let total = 0;
for(let producto of productRows) {
    let precio = producto.querySelector(".cart-price").innerText;
    total += parseFloat(precio);
}
sumaPrecios.innerText = total;
