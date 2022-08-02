//Variables globales
class Producto {
    constructor(prodId, nombre, precio) {
        this.prodId = prodId;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

let listaProductos = [

    {nombre: 'Producto 1', precio: 100},

    {nombre: 'Producto 2', precio: 150},

    {nombre: 'Producto 3', precio: 200},

    {nombre: 'Producto 4', precio: 250},

    {nombre: 'mouse', precio: 300},

];

let totalPrecio= 0;
let total = document.querySelector(".total-price");
let afterRegister = document.querySelector("#login-register");
const carrito = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay"); 
const closeBtn = document.querySelector("#close-btn");
const shoppingCart = [];
const addToCart = document.getElementsByClassName("add-to-cart");

mostrarProductos();

//Eventos

//abrir dando click en el icono del carrito
carrito.addEventListener("click", ()=>{
    if(cartModalOverlay.classList.contains("open")) {
        cartModalOverlay.classList.remove("open");
    } else {
        cartModalOverlay.classList.add("open");
    }
})

//cerrar modal dando click en el boton de cerrar
closeBtn.addEventListener("click", ()=>{
    cartModalOverlay.classList.remove("open");
})

//agregar elementos al carrito
for(let boton of addToCart) {
    boton.addEventListener("click", compilarDatos)
}

// //Cambiar login y register
// if (localStorage.getItem("usuario") != null) {
//     afterRegister.innerHTML = `<p class="usuario-nav">Bienvenido ${localStorage.getItem("usuario")}</p>`;
// }

    localStorage.getItem("usuario") != null ? afterRegister.innerHTML = `<p class="usuario-nav">Bienvenido ${localStorage.getItem("usuario")}</p>` : afterRegister.innerHTML = `<div id="login-register">
                                                                                                                                                                                    <ul>
                                                                                                                                                                                        <li><a href="#">Login</a></li>
                                                                                                                                                                                        <li><a href="pages/register.html">Register</a></li>
                                                                                                                                                                                    </ul>
                                                                                                                                                                                </div>`;


//========================================Funciones=========================================================== 

//Muestra los productos en el Html
function mostrarProductos() {
    let lista = document.getElementById('lista-productos');
    let productos = listaProductos;
    for (let i = 0; i < listaProductos.length; i++) {
        let producto = productos[i];
        let productoHTML = `
            <div class="product-row card-main card-${i}" id="${i}">
                <img class="product-image" src="assets/producto${i+1}.jpg" />
                <h3>${producto.nombre}</h3>
                <p>$<span class="product-price">${producto.precio}</span></p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button class="add-to-cart">Comprar</button>
            </div>
        `
        lista.innerHTML += productoHTML;
    }
}

//Agrega los elementos al carrito cuando se le da al boton de agregar
function compilarDatos(e){
    let boton = e.target;
    let producto = boton.parentElement;
    let prodID = producto.getAttribute("id");
    let prodName = producto.querySelector("h3").innerText;
    let precio = producto.querySelector(".product-price").innerText;
    let imagen = producto.querySelector(".product-image").src;
    agregarElemento(prodID,prodName,precio,imagen)
    shoppingCart.push(new Producto(prodID,prodName,precio));
    console.log(shoppingCart)
    sumarPrecios();
}

//crear elementos en el carrito
function agregarElemento(prodID,prodName,precio,imagen) {
    let productRow = document.createElement("div");
    let contenedorProductos = document.querySelector(".product-rows");

    let elemProducto = `
        <div class="product-row" id="${prodID}">
            <img class="cart-image" src="${imagen}" />
            <h2>${prodName}:</h2>
            <p>$<span class="cart-price"> ${precio}</span></p>
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = elemProducto;
    contenedorProductos.append(productRow);
    let botonesBorrar = productRow.querySelectorAll(".remove-btn");
    for(let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento);
        boton.addEventListener("click", actualizarPrecio);
    }
    cantElementosCarrito();
}

//borrar elementos del carrito
function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    cantElementosCarrito()
}

//Muestra la cantidad de elementos en el carrito
function cantElementosCarrito() {
    let cantidad = document.querySelectorAll(".product-rows > div");
    let cartQuantity = document.querySelector(".cart-quantity");
    cartQuantity.innerText = cantidad.length;

}

//sumar precios en el carrito
function sumarPrecios() {
    totalPrecio = shoppingCart.reduce((acumulador, producto) => acumulador + parseInt(producto.precio), 0);
    total.innerText = `$${totalPrecio}`
}

//actualizar precio al eliminar un elemento
function actualizarPrecio (e) {
    btn = e.target;
    shoppingCart.findIndex(producto => producto.prodId == btn.parentElement.parentElement.id);
    shoppingCart.splice(shoppingCart.findIndex(producto => producto.prodId == btn.parentElement.parentElement.id), 1);
    sumarPrecios();
}
