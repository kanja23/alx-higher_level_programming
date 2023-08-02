// 2-script.js

// Wait for the DOM to be fully loaded before accessing elements
$(document).ready(function () {
  // Use the JQuery API to select the DIV#red_header element
  const redHeaderDiv = $("div#red_header");

  // Attach a click event handler to the DIV#red_header element
  redHeaderDiv.click(function () {
    // Update the text color of the <header> element to red (#FF0000)
    $("header").css("color", "#FF0000");
  });
});
