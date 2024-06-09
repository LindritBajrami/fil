export default function Movie(id, div) {
    const api_url = `https://api.themoviedb.org/3/movie/${id}?api_key=8434b8e45fae7a011d0aba790f56cad3`

    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        div.innerHTML = `
        <div class="row">
            <div class="col-5">
                <img src="https://image.tmdb.org/t/p/w185/${data.poster_path}" class="card-img-top" alt="${data.title}">
            </div>
            <div class="col-5 offset-1">
                <h5>${data.title}</h5>
                <span class="badge bg-info me-2">
                    ${ _.pluck(data.genres, 'name').join(", ") }
                </span>
                <p class="my-4">${data.overview}</p>
                <p class="mb-4">
                    <i class="bi bi-calendar-check"></i> ${data.release_date}
                    <br />
                    <i class="bi bi-star"></i> ${data.vote_average}
                    <br /><br />
                    Status: ${data.status}
                    <br />
                    Votes: ${data.vote_count}
                </p>
                <button id="add-to-fav" movie-id="${data.id}" class="btn btn-sm btn-outline-danger"><i class="bi bi-heart"></i> Add to favorites</button>
                <a href="movies.html" class="btn btn-sm btn-outline-secondary ms-2"><i class="bi bi-arrow-left"></i> Return back</a>
            </div>
        </div>
        `
    })
}
