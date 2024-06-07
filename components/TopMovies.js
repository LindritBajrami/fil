export default function TopMovies(div) {
    const api_url = 'https://api.themoviedb.org/3/discover/movie?api_key=8434b8e45fae7a011d0aba790f56cad3'

    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        const movies = data.results
        const top_movies  = movies.slice(0, 8)
        let movies_html = `<div class="row">`
        top_movies.forEach(m => movies_html += `
        <div class="col-3">
            <div class="card mb-4" style="height: 356px">
                <img src="https://image.tmdb.org/t/p/w185/${m.backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${m.title}</h5>
                    <p class="card-text">
                        <i class="bi bi-calendar-check"></i> ${m.release_date}
                        <br />
                        <i class="bi bi-star"></i> ${m.vote_average}
                    </p>
                    <a href="movie-details.html?id=${m.id}" class="btn btn-sm btn-outline-primary"><i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
        `)
        movies_html += `</div>`
        div.innerHTML = movies_html
    })
}