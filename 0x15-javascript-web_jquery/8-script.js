// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
  // Get the list_movies element
  const listMoviesElement = $('#list_movies');

  // Fetch the movie data from the URL using AJAX
  $.ajax({
    url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      // Loop through the movie results and create list items for each movie title
      for (const movie of data.results) {
        const listItem = $('<li></li>').text(movie.title);
        listMoviesElement.append(listItem);
      }
    },
    error: function(xhr, status, error) {
      // Handle error if the request fails
      console.error('Error fetching movie data:', error);
    }
  });
});
