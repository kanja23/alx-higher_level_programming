// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
  // Get the update_header element
  const updateHeaderButton = $('#update_header');

  // Get the header element
  const headerElement = $('header');

  // Add a click event listener to the update_header element
  updateHeaderButton.click(function() {
    // Update the text of the header element to "New Header!!!"
    headerElement.text('New Header!!!');
  });
});
