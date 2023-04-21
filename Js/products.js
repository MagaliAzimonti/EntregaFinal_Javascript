const renderizarProductos = document.getElementById("productos");

let productos = [
  {
    title: "Crema de manos Neroli & Orquideas",
    description:
      "Mantené la piel de tus manos nutrida, hidratada y fresca todo el día. La Manteca de Karité brindará antioxidantes superiores y beneficios extraordinarios para la piel de tus manos, mientras que la Vitamina E te aportará propiedades Humectantes y Regenerativas para tu piel. El Aceite de Macadamia le dará elasticidad y firmeza a tus manos y las dejará suaves y sedosas.",
    price: 2000,
    thumbnail:
      "http://cdn.shopify.com/s/files/1/0079/0734/4497/products/semilla--flores-de-neroli-y-orquideas--crema-de-manos-frente.jpg?v=1632885626",
    code: "CM1",
    stock: 27,
    brand: "Semilla",
    id: 1,
  },
  {
    title: "Crema de cuerpo Neroli & Orquideas",
    description:
      "Mantené la piel de tu cuerpo nutrida, hidratada y fresca todo el día. La Manteca de Karité brindará antioxidantes superiores y beneficios extraordinarios para la piel de tu cuerpo, mientras que la Vitamina E te aportará propiedades Humectantes y Regenerativas para tu piel. El Aceite de Macadamia le dará elasticidad y firmeza a tu piel y las dejará suave y sedosa.",
    price: 4500,
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0079/0734/4497/products/NEROLI_ORQUIDEAS_FRENTE.jpg?v=1642535074&width=713",
    code: "CC2",
    stock: 32,
    brand: "Semilla",
    id: 2,
  },
  {
    title: "Esmalte Base Coat",
    description:
      "Alisa y protege tus uñas con nuestro Base Coat. Este producto es transparente incoloro, no blanquecino como se ve en la imagen. Sus ingredientes que favorecen la adhesión ayudan al pulido en la superficie de tus uñas para que no se astillen y las protege de manchas y alteraciones de color. Extiende el tiempo de duración de los esmaltes,  seca rápido y además agregamos un pincel Plano y Fino 100% Vegan y personalizado para una aplicación más simple.",
    price: 1700,
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0079/0734/4497/products/esmlate-base-coat-con-sombra.jpg?v=1661179331&width=713",
    code: "BC3",
    stock: 12,
    brand: "Semilla",
    id: 3,
  },
  {
    title: "Esmalte Top Coat",
    description:
      "Obtené un acabado superior y un aspecto con brillo en tus uñas. Otorgá mayor protección a tus colores. Extiende el tiempo de duración de los esmaltes,  seca rápido y además agregamos un pincel Big Brush Plano y fino 100% Vegan y personalizado para una aplicación más simple.",
    price: 1700,
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0079/0734/4497/products/esmalte-top-coat-sombra.jpg?v=1658169642&width=713",
    code: "TC4",
    stock: 23,
    brand: "Semilla",
    id: 4,
  },
  {
    title: "Agua Micelar",
    description:
      "Limpia, desmaquilla, previene irritaciones y suaviza tu piel gracias a los extractos de Manzanilla, Malva y Caléndula. Nuestra Agua Micelar forma Micelas que retienen el maquillaje o impurezas creando una piel más limpia y fresca.",
    price: 2300,
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0079/0734/4497/products/semilla1945-Copy.jpg?v=1671819070&width=713",
    code: "AM5",
    stock: 41,
    brand: "Semilla",
    id: 5,
  },
];

productos.forEach(({ thumbnail, title, description, price }) => {
  const productoHTML = `<div class="col">
<div class="paquete card shadow h-100">
    <img src="${thumbnail}" class="producto-image card-img-top">
    <div class="card-body">
        <h3 class="producto-title card-title">${title}</h3>
        <p class="producto-descripcion card-text text-dark">${description}</p>
        <p class="producto-precio text-dark card-text">$ ${price}</p>
    </div>
    <div class="paquete-footer card-footer">
        <div class="paquete-btn btn btn-primary añadirCarrito">Añadir al carrito</div>
    </div>
</div>
</div>
</div>
`;
  document.getElementById("productos").innerHTML += productoHTML;
});

const nuevoCarritoBotones = document.querySelectorAll(".añadirCarrito");
nuevoCarritoBotones.forEach((añadirCarritoBtn) => {
  añadirCarritoBtn.addEventListener("click", añadirCarritoClick);
});

const carritoProductos = document.querySelector(".carritoProductos");

function añadirCarritoClick(event) {
  const button = event.target;
  const producto = button.closest(".paquete");
  const productoTitulo = producto.querySelector(".producto-title").textContent;
  const productoPrecio = producto.querySelector(".producto-precio").textContent;
  button.addEventListener("click", () => {
    Toastify({
      text: `Ha sido añadido al carrito el paquete ${productoTitulo}`,
      duration: 3000,
      gravity: "bottom",
      position: "left",
    }).showToast();
  });
  añadirProductoCarrito(productoTitulo, productoPrecio);
}

function añadirProductoCarrito(productoTitulo, productoPrecio) {
  const carritoLista = document.createElement("div");
  const carritoData = `
    <div class="row carritoProducto">
        <div class="col-6">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3>
                <h6 class="carritoProductoTitulo ml-3 mb-0">${productoTitulo}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="mb-0 text-dark carritoProductoPrecio">${productoPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input type="number" class="carritoProductoCantidad"  value="1">
                <button class="btn btn-danger btnEliminar" type="button">Eliminar</button>
            </div>
        </div>
    </div>`;

  carritoLista.innerHTML = carritoData;
  carritoProductos.append(carritoLista);

  carritoLista
    .querySelector(".btnEliminar")
    .addEventListener("click", eliminarProductoCarrito);
  carritoLista
    .querySelector(".carritoProductoCantidad")
    .addEventListener("change", carritoCantidadCambio);
  carritoTotalCambio();
}

function carritoTotalCambio() {
  let total = 0;

  const carritoTotal = document.querySelector(".carritoTotal");

  const carritoPaqs = document.querySelectorAll(".carritoProducto");

  carritoPaqs.forEach((carritoProducto) => {
    const carritoProductoPrecioElemento = carritoProducto.querySelector(
      ".carritoProductoPrecio"
    );
    const carritoProductoPrecio = parseFloat(
      carritoProductoPrecioElemento.textContent.replace("$", "")
    );
    const carritoProductoCantidadElemento = carritoProducto.querySelector(
      ".carritoProductoCantidad"
    );
    const carritoProductoCantidad = parseFloat(
      carritoProductoCantidadElemento.value
    );
    total = total + carritoProductoPrecio * carritoProductoCantidad;
  });
  carritoTotal.innerHTML = `$ ${total}`;
  let str = JSON.stringify(total);
  localStorage.setItem("total", str);
}

function eliminarProductoCarrito(event) {
  const botonRemover = event.target;
  botonRemover.closest(".carritoProducto").remove();
  carritoTotalCambio();
}

function carritoCantidadCambio(event) {
  const cantidad = event.target;
  cantidad.value <= 0 ? (cantidad.value = 1) : null;
  carritoTotalCambio();
}
