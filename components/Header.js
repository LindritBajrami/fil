export default function Header() {
    return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="index.html">FilmaDB</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item " aria-current="page">
                <a class="nav-link" href="movies.html">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="favourites.html">Favourite Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contacts</a>
              </li>
            </ul>
            <input class="form-control ms-4 w-25" onchange="window.location.href = 'movies.html?q='+event.target.value" type="search" placeholder="Search by title" aria-label="Search">
          </div>
        </div>
    </nav>
    `
}
