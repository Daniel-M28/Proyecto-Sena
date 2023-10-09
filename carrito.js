let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#titulo-carrito");
const contenedorCarritoCompra = document.querySelector("#titulo2-carrito");
const contenedorCarritoProductos = document.querySelector("#productos-carrito");
const contenedorCarritoBotones = document.querySelector("#botones-compra-carrito");
let botonesEliminar = document.querySelectorAll(".eliminar-producto-carrito");
const botonVaciar = document.querySelector("#vaciar-carrito")
const total = document.querySelector("#precio-total")
const botonComprar = document.querySelector("#boton-comprar-carrito")


function cargarProductosCarrito(){

if(productosEnCarrito && productosEnCarrito.length > 0) {


contenedorCarritoVacio.classList.add("disabled");
contenedorCarritoProductos.classList.remove ("disabled");
contenedorCarritoBotones.classList.remove ("disabled");
contenedorCarritoCompra.classList.add ("disabled");

contenedorCarritoProductos.innerHTML= ""  

 productosEnCarrito.forEach(producto =>{
    
const div = document.createElement("div");
div.classList.add ("carrito-producto");
div.innerHTML = `
<div class="detalles-producto-carrito">
<img class="img-producto-carrito" src="${producto.imagen}">

<div>
<h4>producto</h4>
<p>${producto.titulo}</p>
</div>

<div><h4>cantidad </h4>
<p> ${producto.cantidad} </p>
</div>

<div>
<h4>precio</h4>
<p>${producto.precio}</p>
</div>

<div>
<h4>subtotal </h4>
<p>${producto.precio * producto.cantidad}</p>
</div>


<div id= "${producto.id}" class ="eliminar-producto-carrito"><i  class="fa-solid fa-trash bote"></i></div>


`;
contenedorCarritoProductos.append(div);

})



} else {
contenedorCarritoVacio.classList.remove("disabled");
contenedorCarritoProductos.classList.add("disabled");
contenedorCarritoBotones.classList.add ("disabled");
contenedorCarritoCompra.classList.add("disabled");
}

actualizarBotonesEliminar();
actualizarTotal();

}

cargarProductosCarrito();

actualizarBotonesEliminar();

function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".eliminar-producto-carrito");

    botonesEliminar.forEach(boton=>{
        boton.addEventListener("click",eliminarDelCarrito)});
    }

    function eliminarDelCarrito(e){
  const idBoton = e.currentTarget.id;
   
   const index = productosEnCarrito.findIndex (producto=> producto.id ===idBoton)
     console.log(productosEnCarrito)
     productosEnCarrito.splice(index, 1);

 localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

cargarProductosCarrito();
    }


   botonVaciar.addEventListener("click",vaciarCarrito);
    function vaciarCarrito(){
       productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        cargarProductosCarrito();

    }

function actualizarTotal(){
   const totalCalculado = productosEnCarrito.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad),0);
total.textContent = `Total:$ ${totalCalculado}`;

}


botonComprar.addEventListener("click",comprarCarrito);
    function comprarCarrito(){
       productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        
contenedorCarritoVacio.classList.add("disabled");
contenedorCarritoProductos.classList.add("disabled");
contenedorCarritoBotones.classList.add ("disabled");
contenedorCarritoCompra.classList.remove("disabled");
    }