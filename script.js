document.addEventListener("DOMContentLoaded", fetchMovies);

function fetchMovies() {
    fetch("get_movies.php")
        .then(response => response.json())
        .then(data => displayMovies(data))
        .catch(error => console.error("Error fetching movies:", error));
}

function displayMovies(movies) {
    const container = document.getElementById("movies-container");
    container.innerHTML = "";

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="images/${movie.poster_url}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <p>Release Date: ${movie.release_date}</p>
            <a href="movie_detail.html?id=${movie.id}">View Details</a>
        `;

        container.appendChild(movieCard);
    });
}

function searchMovies() {
    const searchText = document.getElementById("search").value.toLowerCase();
    fetch("get_movies.php")
        .then(response => response.json())
        .then(data => {
            const filteredMovies = data.filter(movie => movie.title.toLowerCase().includes(searchText));
            displayMovies(filteredMovies);
        });
}
