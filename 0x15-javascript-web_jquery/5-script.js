// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
  // Get the add_item element
  const addItemButton = $('#add_item');

  // Get the my_list UL element
  const myList = $('UL.my_list');

  // Add a click event listener to the add_item element
  addItemButton.click(function() {
    // Create a new <li> element with the text "Item"
    const newLiElement = $('<li></li>').text('Item');

    // Append the new <li> element to the my_list UL
    myList.append(newLiElement);
  });
});
