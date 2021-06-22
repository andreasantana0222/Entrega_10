// inicializamos la conexion
const socket = io.connect();

// recibo desde el servidor un mensaje
socket.on('mi tabla', data => {
    render(data);
    //socket.emit('notificacion', 'mensaje recibido exitosamente en el cliente');
});

// renderiza el html con los mensajes recibidos
function render(data) {
    var html = data.map((producto, index) => {
        return (`<div class="col-12 col-sm-8 col-md-6 col-lg-4">
  <div class="card">
      <img class="card-img" src=" ${producto.thumbnail}" alt=" ${producto.title}">
            <div class="card-img-overlay d-flex justify-content-end">
              <a href="#" class="card-link text-danger like">
                <i class="fas fa-heart"></i>
              </a>
            </div>
            <div class="card-body">
                    <h4 class="card-title">${producto.title}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Style: ${producto.title}</h6>
                    <p class="card-text">
                      New Collection </p>
                          <div class="input-group">
                                   <select class="custom-select mr-1">
                                      <option selected>Color</option>
                                      <option value="1">Verde</option>
                                      <option value="2">Azul</option>
                                      <option value="3">Rojo</option>
                                  </select>
                                  <select class="custom-select ml-1">
                                      <option selected>Size</option>
                                      <option value="1">L</option>
                                      <option value="2">M</option>
                                      <option value="3">S</option>
                                  </select>
                          </div>
                          <div class="buy d-flex justify-content-between align-items-center">
                                      <div class="price text-success"><h5 class="mt-4"> ${producto.price} </h5></div>
                                       <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                          </div>
            </div>
  </div>
</div>`);
    }).join(" ");

    // inyecta el html en el elemento con id messages
    document.getElementById("tablaproductos").innerHTML = html;
}

function addMessage(e) {
    socket.emit('notificacion');
    return false;
}
