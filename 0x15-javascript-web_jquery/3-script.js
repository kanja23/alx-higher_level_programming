// 3-script.js

$(document).ready(function() {
  // Add click event handler to the element with ID "red_header"
  $('#red_header').click(function() {
    // Add the class "red" to the <header> element
    $('header').addClass('red');
  });
});
