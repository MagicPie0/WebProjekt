// Get gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Get the lightbox
const lightbox = document.getElementById('lightbox');

// Get the close button
const close = document.getElementById('close');

function openLightbox(e) {
    e.preventDefault();
    if (e.target.tagName === 'IMG') { // Csak a galéria képekre reagáljunk
        const imgSrc = e.target.parentElement.getAttribute('href');
        lightbox.querySelector('img').setAttribute('src', imgSrc);
        lightbox.style.display = 'block';
        close.addEventListener('click', closeLightbox);
    }
}

// Add event listeners to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', openLightbox);
});

// Open the lightbox and display the selected image
function openLightbox(e) {
    e.preventDefault();
    const imgSrc = e.currentTarget.querySelector('a').getAttribute('href');
    lightbox.querySelector('img').setAttribute('src', imgSrc);
    lightbox.style.display = 'block';
    close.addEventListener('click', closeLightbox);
}

// Close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Close the lightbox when the background is clicked
lightbox.addEventListener('click', closeLightbox);

