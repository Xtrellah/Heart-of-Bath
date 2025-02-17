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

// TESTIMONIALS
fetch('testimonials.json')
    .then(response => response.json())
    .then(data => {
        const target = document.getElementById('testimonials');

        data.testimonials.forEach(testimonials => {
            target.innerHTML += `
    <div class="testimonials">
        <h1>${testimonials.client}</h1>
        <p>"${testimonials.review}"</p>
        <p class="testimonials-service">${testimonials.service}</p>
    </div>
  `;
        });
    })
    .catch(error => console.error('Error loading testimonials:', error));

// TESTIMONIALS CAROUSEL
fetch('testimonials.json')
    .then(response => response.json())
    .then(data => {
        const testimonials = data.testimonials;
        const wrapper = document.getElementById("testimonials-wrapper");

        testimonials.forEach(testimonial => {
            const div = document.createElement("div");
            div.classList.add("testimonial");
            div.innerHTML = `
                <h3>${testimonial.client}</h3>
                <p>${testimonial.review}</p>
                <p>${testimonial.service}</p>
            `;
            wrapper.appendChild(div);
        });

        let index = 0;
        const totalSlides = Math.ceil(testimonials.length / 3);

        function updateCarousel() {
            wrapper.style.transform = `translateX(-${index * 100}%)`;
        }

        document.getElementById("button-right").addEventListener("click", () => {
            if (index < totalSlides - 1) {
                index++;
                updateCarousel();
            }
        });

        document.getElementById("button-left").addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateCarousel();
            }
        });
    })
    .catch(error => console.error("Error loading testimonials:", error));
