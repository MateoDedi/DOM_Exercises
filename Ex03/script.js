// Get all the list items within the <ul> element
const listItems = document.querySelectorAll('ul li');

// Iterate through the list items and toggle the "highlight" class
listItems.forEach(item => {
    if (item.classList.contains('highlight')) {
        item.classList.remove('highlight');
    } else {
        item.classList.add('highlight');
    }
});