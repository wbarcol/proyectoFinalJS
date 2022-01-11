let urlTesti = "../json/lista.json";

$.getJSON(urlTesti, function (datos) {
  for (let testimonio of datos) {
    $(".containerTestimonios").append(`
    <div class="testimonio">
    <img src="${testimonio.imagen}"/>
    <div class="descripcion">
    <p class="testimonioDescripcion">${testimonio.testimonio}</p>
    </div>
    <i class="iconoTesti fas fa-comment-dots"></i>
    </div>`);
  }
});
