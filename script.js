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

// FOOTER
document.addEventListener('DOMContentLoaded', function () {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;

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

// TARIFFS
fetch('tariffs.json')
    .then(response => response.json())
    .then(data => {
        const target = document.getElementById('tariffs');

        data.services.forEach(service => {
            target.innerHTML += `
        <div class="tariffs">
          <img src="${service.image}" width="300" alt="${service.title}" />
          <div class="tariffs-text">
            <h4>${service.title}</h4>
            <p>${service.description}</p>
          </div>
        </div>
      `;
        });
    })
    .catch(error => console.error('Error loading tariffs:', error));

// GAURDIANS
fetch('gaurdians.json')
    .then(response => response.json())
    .then(data => {
        const target = document.getElementById('gaurdians-data');

        data.services.forEach(service => {
            target.innerHTML += `
    <div class="gaurdians">
        <img src="${service.image}" width="300" alt="${service.title}" />
        <h4>${service.title}</h4>
        <p>${service.description}</p>
    </div>
  `;
        });
    })
    .catch(error => console.error('Error loading gaurdians data:', error));
