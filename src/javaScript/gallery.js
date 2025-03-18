// toggle car js

function toggleCards() {
    document.getElementById("cardsContainer").classList.toggle("hidden");
    document.getElementById("newContent").classList.toggle("hidden");
}

function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    const allThumbnails = document.querySelectorAll('.thumbnail');

    // Remove p-4 from all thumbnails
    allThumbnails.forEach(img => img.classList.remove('p-4', 'border-2', 'border-blue-500'));

    // Set new main image
    mainImage.src = element.src;

    // Add p-4 to the active image
    element.classList.add('p-4', 'border-2', 'border-blue-500');
}
