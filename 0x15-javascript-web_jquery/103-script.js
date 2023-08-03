// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
  // Get the language_code and btn_translate elements
  const languageCodeInput = $('#language_code');
  const btnTranslate = $('#btn_translate');

  // Get the hello element
  const helloElement = $('#hello');

  // Function to fetch the translation and update the hello element
  function fetchAndDisplayTranslation() {
    // Get the language code entered by the user
    const languageCode = languageCodeInput.val();

    // Fetch the translation data from the API using AJAX
    $.ajax({
      url: `https://www.fourtonfish.com/hellosalut/hello/${languageCode}/`,
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
  }

  // Add a click event listener to the btn_translate element
  btnTranslate.click(fetchAndDisplayTranslation);

  // Add a keypress event listener to the languageCodeInput element
  languageCodeInput.keypress(function(event) {
    // Check if the key pressed is ENTER (keyCode 13)
    if (event.which === 13) {
      // Fetch and display the translation
      fetchAndDisplayTranslation();
    }
  });
});
