

// Get references to the menu button and the navigation element
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mainNav = document.getElementById('main-nav');

// Function to toggle the navigation menu
function toggleMenu() {
    // Toggle the 'active' class on the navigation element
    mainNav.classList.toggle('active');
}

// Add event listener to the menu button
mobileMenuButton.addEventListener('click', toggleMenu);