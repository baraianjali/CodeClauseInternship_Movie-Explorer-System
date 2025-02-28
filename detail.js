document.addEventListener("DOMContentLoaded", fetchMovieDetails);

function fetchMovieDetails() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");

    fetch(`get_movie.php?id=${movieId}`)
        .then(response => response.json())
        .then(movie => displayMovieDetails(movie))
        .catch(error => console.error("Error fetching movie details:", error));
}

function displayMovieDetails(movie) {
    const container = document.getElementById("movie-detail");
    container.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="images/${movie.poster_url}" alt="${movie.title}">
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Cast:</strong> ${movie.cast}</p>
        <a href="index.html">Back to Home</a>
    `;
}
