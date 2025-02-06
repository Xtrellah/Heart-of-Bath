// HEADER
document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            const links = document.querySelectorAll('a');
            let currentPath = window.location.pathname.split("/").pop();

            if (currentPath === '') {
                currentPath = 'index.html';
            }

            links.forEach(link => {
                const hrefPath = link.getAttribute('href').split("/").pop();

                if (hrefPath === currentPath) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
});