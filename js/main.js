
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listaProductos = [

    {nombre: 'Producto 1', precio: 1395},

    {nombre: 'Producto 2', precio: 1395},

    {nombre: 'Producto 3', precio: 1395},

    {nombre: 'Producto 4', precio: 1395},

    {nombre: 'mouse', precio: 1395},

];

//Mostrar productos
function mostrarProductos() {
    let lista = document.getElementById('lista-productos');
    let productos = listaProductos;
    for (let i = 0; i < listaProductos.length; i++) {
        let producto = productos[i];
        let productoHTML = `
            <div class="product-row card-main card-${i}" id="${i}">
                <img class="product-image" src="assets/producto${i+1}.jpg" />
                <h3>${producto.nombre}</h3>
                <span class="product-price">$${producto.precio}</span>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button class="add-to-cart">Comprar</button>
            </div>
        `
        lista.innerHTML += productoHTML;
    }
}


mostrarProductos();

//Inicio DOM Carrito

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
const shoppingCart = [];
const addToCart = document.getElementsByClassName("add-to-cart");
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
    shoppingCart.push(new Producto(prodName,precio));
    sumarPrecios();
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

//sumar los precios
let total = document.querySelector(".total-price");
function sumarPrecios() {
    total.innerText = shoppingCart.reduce((total, producto) => {
        return total + parseInt(producto.precio);
    }
    , 0);
}



//Cambiar login y register
let afterRegister = document.querySelector("#login-register");
if (localStorage.getItem("usuario") != null) {
    afterRegister.innerHTML = `<p class="usuario-nav">Bienvenido ${localStorage.getItem("usuario")}</p>`;
}