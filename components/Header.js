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
                <a class="nav-link" href="index.html">Ballina</a>
              </li>
              <li class="nav-item active" aria-current="page">
                <a class="nav-link" href="movies.html">Filmat</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="favourites.html">Filmat e preferuar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Kontakti</a>
              </li>
            </ul>
            <input class="form-control ms-4 w-25" onchange="window.location.href = 'http://127.0.0.1:5500/movies.html?q='+event.target.value" type="search" placeholder="Kerko permes titullit" aria-label="Search">
          </div>
        </div>
    </nav>
    `
}