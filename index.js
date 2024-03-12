window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0 && !navbar.classList.contains('navbar_dark')) {
        navbar.classList.add('navbar_dark');
    } else if (window.scrollY === 0 && navbar.classList.contains('navbar_dark')) {
        navbar.classList.remove('navbar_dark');
    }
});
