// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
  // Get the header element
  const headerElement = $('header');

  // Get the toggle header element
  const toggleHeader = $('#toggle_header');

  // Add a click event listener to the toggle header element
  toggleHeader.click(function() {
    // Toggle the class 'red' and 'green' on the header element
    headerElement.toggleClass('red green');

    // Ensure that the header element always has one class
    // If the current class is empty, set it to 'green'
    if (!headerElement.hasClass('red') && !headerElement.hasClass('green')) {
      headerElement.addClass('green');
    }
  });
});
