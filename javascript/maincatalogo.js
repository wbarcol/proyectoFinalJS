  // COMPRAS

  class productoDetalles {
    constructor (producto, ref, precio, cantidad, imagen){
    this.producto = producto;
    this.ref = ref;
    this.precio = precio;
    this.imagen = imagen;

    this.cantidad = cantidad;
    }

    cantidadComprada(cantidadComp){
        this.cantidad -= cantidadComp;
    }

}

let manubrio = new productoDetalles ("Manubrio", "AC-012", 8, 10, src="../imag/manubrio.jpg");
let asiento = new productoDetalles ("Asiento", "AE-017", 9, 5, src="../imag/asiento.jpg");
let caucho = new productoDetalles ("Caucho Taco", "AA-003", 7, 12, src="../imag/caucho.jpg");
let pedal = new productoDetalles ("Pedal grande", "AA-004", 4, 20, src="../imag/pedal.jpg");
let productos = [manubrio, asiento, caucho, pedal];

for (let producto of productos) {
  let contenedor = document.createElement("div");
  contenedor.classList.add("producto")

contenedor.innerHTML =  `
    <img src="${producto.imagen}"/>
    <div class="descripcionProducto">
    <h3 class="productoTitulo">${producto.producto}</h3>
    <h6 class="cantidadProducto" id="disponible${producto.producto}">${producto.cantidad} disponibles</h6>
    <span class="productoPrecio">U$D ${producto.precio}</span>
    </div>
    <i class="iconoCarrito fas fa-cart-plus" id="btnCarro${producto.producto}"></i> 
    <i class="iconoCarrito fas fa-minus-square" id="quitarBtn${producto.producto}" style="display: none"></i>`
document.getElementById("containerProductoss").appendChild(contenedor);
}

for (let producto of productos) {
  let iconoActivo = document.getElementById(`btnCarro${producto.producto}`);
  if (producto.cantidad ==0){
    iconoActivo.style.display = 'none';
  }
}




// Agregar al carrito

let carrito = [];
let cartelVacio = carrito.length;
if (cartelVacio == 0){
  $("#mostrarCarritoVacio").show();
}

function agregarCarrito(productoAgregado){
carrito.push(productoAgregado);
console.log(carrito);
}

    for (let producto of productos) {
    let compraProducto = document.getElementById(`btnCarro${producto.producto}`);
    compraProducto.addEventListener("click", agregarProducto);
    function agregarProducto(){
        cantidadClick = 1;
        producto.cantidadComprada(cantidadClick);
        let disponP2 = document.getElementById(`disponible${producto.producto}`);
        disponP2.innerHTML = producto.cantidad + " disponibles";
        agregarCarrito(producto);
        let quitarBtn = document.getElementById(`btnCarro${producto.producto}`);
        if (producto.cantidad ==0){
          quitarBtn.style.display = 'none';
        }
  
  
        
        carritoProducto = carrito.filter(compra => compra.producto == producto.producto); 
        cantidadProducto = carritoProducto.length;
        totalProducto = cantidadProducto * producto.precio;
  
        let agregarBtn = document.getElementById(`quitarBtn${producto.producto}`);
        if (cantidadProducto > 0){
          agregarBtn.style.display = 'inline-block';
        } 
  
        let cartelProducto = document.getElementById(`mostrar${producto.producto}`);
        if (cantidadProducto > 0) {
        cartelProducto.innerHTML = `- Cantidad: ${cantidadProducto} - Producto: ${producto.producto} - ${totalProducto}U$D`;
        $("#mostrarCarritoVacio").hide();
        $("#mensajeAlerta").hide();
        }
      }
    }


        // Remover del carrito


        for (let producto of productos) {
        let removerProducto = document.getElementById(`quitarBtn${producto.producto}`);
        removerProducto.addEventListener("click", quitarProducto);
          function quitarProducto(){
              cantidadClick = -1;
      
              producto.cantidadComprada(cantidadClick);
              let disponP2 = document.getElementById(`disponible${producto.producto}`);
              disponP2.innerHTML = producto.cantidad + " disponibles";

              const index = carrito.findIndex(item => item.producto == producto.producto);
              removedCarrito = carrito.splice(index, 1);
      
              carritoProducto = carrito.filter(compra => compra.producto == producto.producto); 
              cantidadProducto = carritoProducto.length;
              totalProducto = cantidadProducto * producto.precio;
              console.log(carrito);
      
      
              let eliminarBtn = document.getElementById(`quitarBtn${producto.producto}`);
              if (cantidadProducto == 0){
                eliminarBtn.style.display = 'none';
              } 
      
              let agBtn = document.getElementById(`btnCarro${producto.producto}`);
              if (producto.cantidad > 0){
                agBtn.style.display = 'inline-block';
              } 

              
              let cartelProducto = document.getElementById(`mostrar${producto.producto}`);
              if (cantidadProducto > 0) {
              cartelProducto.innerHTML = `- Cantidad: ${cantidadProducto} - Producto: ${producto.producto} - ${totalProducto}U$D`;
              } else {
                cartelProducto.innerHTML = "";
              }

              if (carrito.length == 0){
                $("#mostrarCarritoVacio").show();
              }

              
            }
          }

          let totalP1 = $("#mostrarManubrio");
          let totalP2 = $("#mostrarAsiento");
          let totalP3 = $("#mostrarCaucho Taco");
          let totalP4 = $("#mostrarPedal grande");

       

          // Mostrar formulario 

          $('#btnComprar2').on('click', () => {
            if (carrito.length == 0){
              $("#mensajeAlerta").show();
            } else {
              $(".mainProductos").hide();
              $(".main__formulario").show();
            }
        });
        
        // FORMULARIO

        const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.,
    DNI: /^\d{6,10}$/, // 6 a 10 numeros.
    direccion:/^[a-zA-Z0-9\s]{1,40}$/ 
}

const campos = {
    nombre: false,
    apellido: false,
	correo: false,
	telefono: false,
    DNI: false,
    direccion:false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "DNI":
            validarCampo(expresiones.DNI, e.target, 'DNI');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
        break;
    }

}

const validarCampo = (expresion, input, campo)=> {
if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
} else{
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
}
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.apellido && campos.DNI && campos.correo && campos.telefono && campos.direccion){
      $(".main__formulario").hide();
      $(".volverAComprar").show();
      $(".cantidadFinal").append(`<h6>CANTIDAD</h6>`);
      $(".productoFinal").append(`<h6>PRODUCTO</h6>`);
      $(".totalFinal").append(`<h6>TOTAL</h6>`);


      // Agregar Asiento
      carritoAsiento = carrito.filter(compra => compra.producto == 'Asiento'); 
      cantidadAsiento = carritoAsiento.length;
      totalAsiento = cantidadAsiento * asiento.precio;

      if (cantidadAsiento > 0){
      $(".cantidadFinal").append(`<div>${cantidadAsiento}</div>`);
      $(".productoFinal").append(`<div>${asiento.producto}</div>`);
      $(".totalFinal").append(`<div>${totalAsiento}U$D</div>`);
    }

            // Agregar Manubrio
      carritoManubrio = carrito.filter(compra => compra.producto == 'Manubrio'); 
      cantidadManubrio = carritoManubrio.length;
      totalManubrio = cantidadManubrio * manubrio.precio;

      if (cantidadManubrio > 0){
      $(".cantidadFinal").append(`<div>${cantidadManubrio}</div>`);
      $(".productoFinal").append(`<div>${manubrio.producto}</div>`);
      $(".totalFinal").append(`<div>${totalManubrio}U$D</div>`);
    }

            // Agregar caucho
      carritoCaucho = carrito.filter(compra => compra.producto == 'Caucho Taco'); 
      cantidadCaucho = carritoCaucho.length;
      totalCaucho = cantidadCaucho * caucho.precio;

      if (cantidadCaucho > 0){
      $(".cantidadFinal").append(`<div>${cantidadCaucho}</div>`);
      $(".productoFinal").append(`<div>${caucho.producto}</div>`);
      $(".totalFinal").append(`<div>${totalCaucho}U$D</div>`);
    }

          // Agregar pedal
      carritoPedal = carrito.filter(compra => compra.producto == 'Pedal grande'); 
      cantidadPedal = carritoPedal.length;
      totalPedal = cantidadPedal * pedal.precio;

      if (cantidadPedal > 0){
      $(".cantidadFinal").append(`<div>${cantidadPedal}</div>`);
      $(".productoFinal").append(`<div>${pedal.producto}</div>`);
      $(".totalFinal").append(`<div>${totalPedal}U$D</div>`);
    }


      totalTotal = totalAsiento + totalManubrio + totalCaucho + totalPedal;

      $(".carritoFinal").append(`<div class= "lineaFinal" style="font-weight: bold">TOTAL DE LA COMPRA = ${totalTotal}U$D</div>`);
      $(".lineaFinal").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);


      const URL_DOLAR = "https://criptoya.com/api/dolar"
      $(".carritoFinal").append('<button type="button" id= btnDolar class="btn_volver btn btn-warning">Precio en pesos</a> </button>');
      $("#btnDolar").click(() => {
        $.get(URL_DOLAR, function (res, state) {
            if (state === "success") {
                console.log(res);
                let totalPesos = parseInt(res.oficial*totalTotal);
                    $(".carritoFinal").append(`
                                    <div>
                                        <div>Dolar oficial: ${res.oficial}</div>
                                        <div>Total en pesos: ${totalPesos}</div>
                                    </div>`);
                    $("#btnDolar").hide();
            }
        });
    });


    } else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
