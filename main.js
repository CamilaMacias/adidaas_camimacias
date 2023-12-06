const shopContent = document.getElementById("shopContent")

const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container") 


// productos, zapatillas en este caso
const zapatilla = [

  {nombre: "Adidas Superstar", precio: 100, img: "images/Superstar.jpg", cantidad: 1},
  {nombre: "Adidas Retropy", precio: 145, img: "images/RETROPY.jpg", cantidad: 1},
  {nombre: "Adidas Samba", precio: 180, img: "images/Samba.jpg", cantidad: 1 }
]






let carrito = JSON.parse(localStorage.getItem("carrito")); 
  let total = 0;

zapatilla.forEach((zapatilla) => {
let content = document.createElement("div");
content.className = "card";


content.innerHTML = `

<img src="${zapatilla.img}"></img>

<h3>${zapatilla.nombre}</h3>

<p class="price">${zapatilla.precio}</p>

<p>Cantidad: ${zapatilla.cantidad}</p>
<p>Total: ${zapatilla.cantidad * zapatilla.precio}</p>
`
shopContent.append(content);
let comprar = document.createElement("button")
content.innerText = "comprar";
comprar.className = "comprar";
content.append(comprar);

comprar.addEventListener("click" , () => {

const repeat = carrito.some((repeatProduct) => repeatProduct.id === zapatilla.id);
if (repeat){
  carrito.map((prod)=> {
if (prod.id === zapatilla.id){
  prod.cantidad++;
}

  })
}
// pusheamos asi todos los productos pueden aparecer en el carrito
carrito.push({
id: zapatilla.id,
img: zapatilla.img,
precio: zapatilla.precio,
cantidad: zapatilla.cantidad})

console.log(carrito);






}

)

});

// creo pintaCarrito para el modal y la funcionalidad del boton para cerrar el modal

const pintarCarrito = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
const modalHeader = document.createElement("div");
modalHeader.className = "modal-Header"
modalHeader.innerHTML = `
<h1 class="modal-Header-title">Carrito</h1>
`
modalContainer.append(modalHeader)
const modalbutton = document.createElement("h1");
modalbutton.innerText = "x";
modalbutton.className = "modal-header-button";
modalHeader.append(modalbutton)
modalbutton.addEventListener("click", () => {
modalContainer.style.display = "none";


});

carrito.forEach((zapatilla) => {
let carritoContent = document.createElement("div");
carrito.className = "modal-content"
carrito.innerHTML = `
<img src="${zapatilla.img}"></img>
<h3>$(zapatilla.nombre)</h3>
<p>${zapatilla.precio} $</p>
`

modalContainer.append(carritoContent)

// creo "eliminar" para que puedas eliminar las zapatillas que ya no quieras
let eliminar = document.createElement("span");

eliminar.innerText = "❌";
eliminar.className = "delete-product";
carritoContent.append(eliminar);

eliminar.addEventListener("click", eliminarProducto);
})


const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalBuying = document.createElement("div")
totalBuying.className = "total-content"
totalBuying.innerHTML = `Total a pagar: ${total} $`;
modalContainer.append(totalBuying)
};


// invocamos funcion pintar carrito
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
const foundId = carrito.find((element)=>element.id)


carrito = carrito.filter((carritoId)=> {

  return carritoId !== foundId;
});

pintarCarrito();


};








alert('Bienvenido a Adidas! ¿Qué te gustaría ver?')

// POSIBLES RESPUESTAS
const userInput = prompt("¿Qué buscás? ¿Zapatillas, remeras o shorts?");
let userInputLower;

if (userInput !== null) {
  userInputLower = userInput.toLowerCase();
}

if (userInputLower === 'zapatillas') {
  const modeloBuscado = prompt('Ingresá el modelo de zapatilla que querés agregar al carrito');
  const zapatillaEncontrada = buscarZapatillaPorModelo(modeloBuscado);

  if (zapatillaEncontrada) {
    agregarAlCarrito(zapatillaEncontrada);
  } else {
    console.log('Zapatilla no encontrada');
  }
} else if (userInputLower === 'remeras' || userInputLower === 'shorts') {
  console.log('Esta página web está dedicada solamente a zapatillas.');
} else {
  console.log('Opción no válida.');
}

  // local storage
  const saveLocal = () =>{
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

