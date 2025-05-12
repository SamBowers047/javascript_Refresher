// Refreshing JavaScript

// initial array of menu items
const menuItems = ['Home', 'About', 'Services', 'Contact'];

const menuIcon = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu');
const menuList = document.getElementById('menu-list');
const searchInput = document.getElementById('search');

// Add event listener with an arrow function (ES6+)
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle visibility
});

// Function to render menu items as <ul> elements
const renderMenu = (items) => {
    menuList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${item}</a>`;
        menuList.appendChild(li);
    });
};

// Initial render of menu items
renderMenu(menuItems);


// Add event listener for search input
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = menuItems.filter(item => item.toLowerCase().includes(searchTerm));
    renderMenu(filteredItems);
});