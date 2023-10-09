


/* interfaz carrito de compras 

let numeroproductos = document.querySelector(".numero-productos")

console.log(numeroproductos.textContent)

if (contador.textContent=3){numeroproductos.textContent=2}
*/


const productos = [{
id: "dolor",
titulo: "Dolex gripa",
imagen: "./imagenes-venta/dolor1.jpg",
precio: 4500,
categoria:{
    nombre:"dolor",
    id:"dolor"
},
},

{
id: "dolor2",
titulo: "Amoxicilina",
imagen: "./imagenes-venta/dolor2.jpg",
precio: 3500,
categoria:{
nombre:"dolor",
id:"dolor"
},
},

{
id: "dolor3",
titulo: "Trimebutina",
imagen: "./imagenes-venta/dolor3.jpg",
precio: 5000,
categoria:{
nombre:"dolor",
id:"dolor"
},
},
        
{
id: "dolor4",
titulo: "Dolex",
imagen: "./imagenes-venta/dolor4.png",
precio: 2000,
categoria:{
nombre:"dolor",
id:"dolor"
},
},

{
id: "dolor5",
titulo: "Ibuprofeno",
imagen: "./imagenes-venta/dolor5.jpg",
precio:3000,
categoria:{
nombre:"dolor",
id:"dolor"
},
},

{
id: "dolor6",
titulo: "Naproxeno",
imagen: "./imagenes-venta/dolor6.jpg",
precio: 6000,
categoria:{
nombre:"dolor",
id:"dolor"
},
},

{
id: "dolor7",
titulo: "Hidrocodona",
imagen: "./imagenes-venta/dolor7.png",
precio: 4000,
categoria:{
nombre:"dolor",
id:"dolor"
},
},

{
id: "dolor8",
titulo: "Diclofenaco",
imagen: "./imagenes-venta/dolor8.png",
precio: 8500,
categoria:{
nombre:"dolor",
id:"dolor"
},
},


{
id: "dolor9",
titulo: "Meloxican",
imagen: "./imagenes-venta/dolor9.jpg",
precio: 5000,
categoria:{
nombre:"dolor",
id:"dolor"
},
},

{
id: "dolor10",
titulo: "Dolex gripa",
imagen: "./imagenes-venta/dolor10.png",
precio:2500,
categoria:{
nombre:"gripa",
id:"gripa"
},
},


{
id: "gripa1",
titulo: "Noraver",
imagen: "./imagenes-venta/gripa.jpg",
precio: 4000,
categoria:{
nombre:"gripa",
id:"gripa"
},
},

{
id: "gripa2",
titulo: "Agrifen",
imagen: "./imagenes-venta/gripa2.jpg",
precio: 3000,
categoria:{
nombre:"gripa",
id:"gripa"
},
},

{
id: "gripa3",
titulo: "Sudagrip",
imagen: "./imagenes-venta/gripa3.jpg",
precio: 2500,
categoria:{
nombre:"gripa",
id:"gripa"
},
},

{
id: "gripa4",
titulo: "Mieltertos",
imagen: "./imagenes-venta/gripa4.jpg",
precio: 7000,
categoria:{
nombre:"gripa",
id:"gripa"
},
},

{
id: "gripa5",
titulo: "Noraver-gripa",
imagen: "./imagenes-venta/gripa5.jpg",
precio: 4000,
categoria:{
nombre:"gripa",
id:"gripa"
},
},


{
id: "gripa6",
titulo: "Noraver-garganta",
imagen: "./imagenes-venta/gripa6.jpg",
precio: 9000,
categoria:{
nombre:"gripa",
id:"gripa"
},
},

{
id: "salud-sexual1",
titulo: "Condones Duo",
imagen: "./imagenes-venta/salud-sexual.jpg",
precio: 8000,
categoria:{
nombre:"salud-sexual",
id:"salud-sexual"
},
},

{
id: "salud-sexual2",
titulo: "Condones Durex R",
imagen: "./imagenes-venta/salud-sexual2.jpg",
precio: 10000,
categoria:{
nombre:"salud-sexual",
id:"salud-sexual"
},
},

{
id: "salud-sexual3",
titulo: "Condones Durex",
imagen: "./imagenes-venta/salud-sexual3.jpg",
precio: 7000,
categoria:{
nombre:"salud-sexual",
id:"salud-sexual"
},
},

{
id: "salud-sexual4",
titulo: "Test de embarazo",
imagen: "./imagenes-venta/salud-sexual4.jpg",
precio: 15000,
categoria:{
nombre:"salud-sexual",
id:"salud-sexual"
},
},

{
id: "salud-sexual5",
titulo: "prueba de embarazo",
imagen: "./imagenes-venta/salud-sexual5.jpg",
precio: 12000,
categoria:{
nombre:"salud-sexual",
id:"salud-sexual"
},
},


{
id: "salud-sexual6",
titulo: "Lubircante durex",
imagen: "./imagenes-venta/salud-sexual6.jpg",
precio: 15000,
categoria:{
nombre:"salud-sexual",
id:"salud-sexual"
},
},

{
id: "dermatologicos1",
titulo: "Lubriderm reparacion",
imagen: "./imagenes-venta/dermo.jpg",
precio: 13000,
categoria:{
nombre:"dermatologicos",
id:"dermatologicos"
},
},

{
id: "dermatologicos2",
titulo: "Lubriderm Mom",
imagen: "./imagenes-venta/dermo2.jpg",
precio: 10000,
categoria:{
nombre:"dermatologicos",
id:"dermatologicos"
},
},


{
id: "dermatologicos3",
titulo: "Lubriderm proteccion solar",
imagen: "./imagenes-venta/dermo3.jpg",
precio: 9000,
categoria:{
nombre:"dermatologicos",
id:"dermatologicos"
},
},

{
id: "dermatologicos4",
titulo: "Cerave",
imagen: "./imagenes-venta/dermo4.jpg",
precio: 12000,
categoria:{
nombre:"dermatologicos",
id:"dermatologicos"
},
},

{
id: "dermatologicos5",
titulo: "Facial 5",
imagen: "./imagenes-venta/dermo5.png",
precio: 18000,
categoria:{
nombre:"dermatologicos",
id:"dermatologicos"
},
},

{
id: "aseo1",
titulo: "Colgate ",
imagen: "./imagenes-venta/aseo.jpg",
precio: 8000,
categoria:{
nombre:"aseo",
id:"aseo"
},
},

{
id: "aseo2",
titulo: "Fortident",
imagen: "./imagenes-venta/aseo2.jpg",
precio: 7000,
categoria:{
nombre:"aseo",
id:"aseo"
},
},

{
id: "aseo3",
titulo: "Seda dental ",
imagen: "./imagenes-venta/aseo3.png",
precio: 4000,
categoria:{
nombre:"aseo",
id:"aseo"
},
},

{
id: "aseo4",
titulo: "Shampoo johnson 750ml",
imagen: "./imagenes-venta/aseo4.png",
precio: 15000,
categoria:{
nombre:"aseo",
id:"aseo"
},
},


{
id: "aseo5",
titulo: "Shampoo Johnson 400ml",
imagen: "./imagenes-venta/aseo5.jpg",
precio: 10000,
categoria:{
nombre:"aseo",
id:"aseo"
},
},

{
id: "aseo6",
titulo: "Gillette x3",
imagen: "./imagenes-venta/aseo6.jpg",
precio: 8000,
categoria:{
nombre:"aseo",
id:"aseo"
},
},

{
id: "aseo7",
titulo: "Copitos MK",
imagen: "./imagenes-venta/aseo7.jpg",
precio: 4000,
categoria:{
nombre:"aseo",
id:"aseo"
},
},

{
id: "aseo7",
titulo: "Cepillo colgate x2",
imagen: "./imagenes-venta/aseo8.jpg",
precio: 5000,
categoria:{
nombre:"aseo",
id:"aseo"
},
},
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-productos");
let botonesAgregar = document.querySelectorAll(".boton-compra");
const numero = document.querySelector(".numero-carrito")

function cargarProductos(productosElegidos){

contenedorProductos.innerHTML= "";
productosElegidos.forEach(producto => {

  const div= document.createElement("div");
  div.classList.add("producto");
  div.innerHTML= `
  <img class="img-producto" src="${producto.imagen}">
  <div class="detalles-producto">
  <h3>${producto.titulo}</h3>
  <p>${"$"+producto.precio}</p>
  <button class="boton-compra" id= "${producto.id}"> agregar</button>
  </div> 

  
   `;

   contenedorProductos.append(div);

})

actualizarBotonesAgregar()

}
cargarProductos(productos);


botonesCategorias.forEach(boton =>{
boton.addEventListener("click", (e) =>{
    if(e.currentTarget.id !="todos"){
const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
tituloPrincipal.innerText = productoCategoria.categoria.nombre;

const productosBoton = productos.filter(producto=> producto.categoria.id === e.currentTarget.id);
cargarProductos(productosBoton)}

else { tituloPrincipal.innerText ="todos los productos";
    cargarProductos(productos)}
})
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".boton-compra");

    botonesAgregar.forEach(boton=>{
        boton.addEventListener("click",agregarAlCarrito)});
    }

   let productosEnCarrito;

   let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumero();
}
else{productosEnCarrito = [];}




function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto=> producto.id === idBoton);

if(productosEnCarrito.some(producto => producto.id === idBoton)){
const index = productosEnCarrito.findIndex(producto=> producto.id === idBoton)
productosEnCarrito[index].cantidad++;
} 
else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
    
}



actualizarNumero();

localStorage.setItem("productos-en-carrito" , JSON.stringify(productosEnCarrito));
}



function actualizarNumero(){
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0 )
      numero.innerText= nuevoNumero;
}

 






























































