// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
  // Get the character element
  const characterElement = $('#character');

  // Fetch the character data from the URL using AJAX
  $.ajax({
    url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      // Update the text of the character element with the fetched character name
      characterElement.text(data.name);
    },
    error: function(xhr, status, error) {
      // Handle error if the request fails
      console.error('Error fetching character data:', error);
    }
  });
});
