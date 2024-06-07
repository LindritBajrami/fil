export default function Slider(slides) {
    let slides_html = ''

    slides.forEach((slide, index) => slides_html += `
        <div class="carousel-item ${index == 0 ? 'active' : ''}">
            <img src="https://iqq6kf0xmf.gjirafa.net/images/e273d210-1160-41b4-8b97-1e96427b0613/e273d210-1160-41b4-8b97-1e96427b0613.jpeg?w=1920" class="d-block w-100" alt="...">
        </div>
    `)

    return `
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-inner">
            ${slides_html}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `
}