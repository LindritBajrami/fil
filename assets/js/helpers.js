function getQueryStringFromURL(url) {
    const url_parts = url.split("?")
    const qa_index = url_parts.length - 1
    return url_parts[qa_index]
}

function displayMovies(page, div) {
    const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=8434b8e45fae7a011d0aba790f56cad3&page=${page}`

    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        const movies = data.results
        let movies_html = `<div class="row">`

        movies.forEach(m => {
            let no_image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png'
            let poster = m.backdrop_path === null ? no_image : `https://image.tmdb.org/t/p/w185/${m.backdrop_path}`

            movies_html += `
            <div class="col-3">
                <div class="card mb-4" style="height: 366px">
                    <img src="${poster}" class="card-img-top" alt="...">
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
            `
        })

        movies_html += `</div>`

        div.innerHTML = movies_html
    })
}

function getFavMovies() {
    return localStorage.getItem('favmovies') == null ? [] : JSON.parse(localStorage.getItem('favmovies')) 
}

function isValid(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.match(regex) !== null
}