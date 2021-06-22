
const form = document.querySelector('form');
const productosTabla= document.getElementById('datos');
const socket = io.connect();


const productoTemplate= Handlebars.compile(`

  {{#if hayProductos}}
      <div class="table-responsive">
        <div class="container">
          <div class="row">

              {{#each productos}}


                  <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div class="card">
                      <img class="card-img" src={{this.thumbnail}} alt={{this.thumbnail}} width="50">
                      <div class="card-img-overlay d-flex justify-content-end">
                        <a href="#" class="card-link text-danger like">
                          <i class="fas fa-heart"></i>
                        </a>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">{{this.title}}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">Style: {{this.title}}</h6>
                        <p class="card-text">
                          New Collection </p>
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
                          <div class="price text-success"><h5 class="mt-4">$ {{this.price}}</h5></div>
                           <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>

                {{/each}}
              </div>
            </div>
      </div>
  {{else}}
      <h3 class="alert alert-warning">No se encontraron productos</h3>
  {{/if}}
  `);


function renderProducts(productos=[]){
  const html=productoTemplate({ productos: productos, hayProductos: productos.length });
  productosTabla.innerHTML=html;
}
socket.on('productos', renderProducts);

form.addEventListener('submit', event => {

    event.preventDefault();
    const data = { title: form[0].value, price: form[1].value, thumbnail: form[2].value };
    socket.emit('update', 'ok');
    form.reset();
  });
