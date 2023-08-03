// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
  // Get the add_item, remove_item, and clear_list elements
  const addItemButton = $('#add_item');
  const removeItemButton = $('#remove_item');
  const clearListButton = $('#clear_list');

  // Get the my_list UL element
  const myList = $('ul.my_list');

  // Add a click event listener to the add_item element
  addItemButton.click(function() {
    // Create a new <li> element with the text "Item"
    const newLiElement = $('<li></li>').text('Item');

    // Append the new <li> element to the my_list UL
    myList.append(newLiElement);
  });

  // Add a click event listener to the remove_item element
  removeItemButton.click(function() {
    // Remove the last <li> element from the my_list UL
    myList.children('li:last-child').remove();
  });

  // Add a click event listener to the clear_list element
  clearListButton.click(function() {
    // Remove all <li> elements from the my_list UL
    myList.empty();
  });
});
