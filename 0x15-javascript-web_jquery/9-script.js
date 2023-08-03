// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
  // Get the hello element
  const helloElement = $('#hello');

  // Fetch the translation data from the URL using AJAX
  $.ajax({
    url: 'https://fourtonfish.com/hellosalut/?lang=fr',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      // Update the text of the hello element with the fetched translation
      helloElement.text(data.hello);
    },
    error: function(xhr, status, error) {
      // Handle error if the request fails
      console.error('Error fetching translation data:', error);
    }
  });
});
