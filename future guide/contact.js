window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
function performSearch() {
    var query = document.getElementById('searchInput').value;
    if (query) {
        alert("Searching for: " + query);
      
    }
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let icon = document.querySelector(".theme-toggle i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}
