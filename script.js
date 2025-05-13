// Refreshing JavaScript

// initial array of menu items
const menuItems = ['Home', 'About', 'Services', 'Contact'];

const menuIcon = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu');
const menuList = document.getElementById('menu-list');
const searchInput = document.getElementById('search');
const fetchPostsButton = document.getElementById('fetch-posts');
const postsContainer = document.getElementById('posts-container');

// Add event listener
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle visibility
});

// Render menu items as <ul> elements
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

// Fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        renderPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

// trigger fetch posts on button click
fetchPostsButton.addEventListener('click', () => {
    fetchPosts();
});

// Display data from API
const renderPosts = (posts) => {
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    });
};