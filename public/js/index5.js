// inicializamos la conexion
const socket = io.connect();

// recibo desde el servidor un mensaje
socket.on('mi tabla', data => {
    render(data);
    //socket.emit('notificacion', 'mensaje recibido exitosamente en el cliente');
});

// renderiza el html con los mensajes recibidos
function render(data) {
    var html = data.map((elem, index) => {
        return (`
<div class="col-12 col-sm-8 col-md-6 col-lg-4"> <!--COL-->
    <div class="card"> <!--CARD-->
            <img class="card-img" src= ${elem.thumbnail} alt=${elem.title}>
                    <div class="card-img-overlay d-flex justify-content-end"> <!--CARD IMG-->
                      <a href="#" class="card-link text-danger like">
                        <i class="fas fa-heart"></i>
                      </a>
                    </div> <!--FIN CARD IMG-->

                    <div class="card-body"> <!--CARD BODY-->
                            <h4 class="card-title"> ${elem.title}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">Style: ${elem.title}</h6>
                            <p class="card-text"> New Collection </p>
                            <div class="input-group">
                                   <select class="custom-select mr-1">
                                      <option selected>Color</option>
                                      <option value="1">Green</option>
                                      <option value="2">Blue</option>
                                      <option value="3">Red</option>
                                  </select>
                                  <select class="custom-select ml-1">
                                      <option selected>Size</option>
                                      <option value="1">L</option>
                                      <option value="2">M</option>
                                      <option value="3">S</option>
                                  </select>
                            </div>
                            <div class="buy d-flex justify-content-between align-items-center">
                                    <div class="price text-success"><h5 class="mt-4">${elem.price}</h5></div>
                                     <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                                    </div>
                            </div>
                    </div> <!--FIN CARD BODY-->
    </div> <!-- FIN CARD-->
</div> <!--FIN COL-->
        `);
    }).join(" ");

    // inyecta el html en el elemento con id messages
    document.getElementById("tablaproductos").innerHTML = html;
}
