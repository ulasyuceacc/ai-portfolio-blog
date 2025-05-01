/* Example CSS for mobile navigation */
#main-nav {
    display: none; /* Hide the navigation by default */
}

#main-nav.active {
    display: block; /* Show the navigation when active */
}

/* Mobile menu button styles */
#mobile-menu-button {
    display: none; /* Hide by default, show on mobile */
    background-color: #64ffda; /* Example background color */
    color: #121212; /* Example text color */
    border: none;
    padding: 10px 15px;
    cursor: pointer;
}

/* Show the mobile menu button on smaller screens */
@media (max-width: 768px) {
    #mobile-menu-button {
        display: block; /* Show the button on mobile */
    }

    #main-nav {
        display: none; /* Hide the navigation by default */
        flex-direction: column; /* Stack items vertically */
        position: absolute; /* Position it absolutely */
        top: 60px; /* Adjust based on your header height */
        left: 0;
        background-color: #121212; /* Match the background color */
        width: 100%; /* Full width */
    }

    #main-nav.active {
        display: flex; /* Show the navigation when active */
    }

    #main-nav li {
        padding: 10px; /* Add some padding to list items */
    }
}

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