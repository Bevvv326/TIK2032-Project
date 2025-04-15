// Fungsi untuk menambahkan efek animasi pada artikel saat halaman dimuat
window.addEventListener('load', () => {
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
        article.style.opacity = 0;
        article.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            article.style.opacity = 1;
        }, index * 500); // Artikel dimunculkan bertahap
    });
});

// Menambahkan fitur untuk menandai artikel favorit
const markAsFavoriteButtons = document.querySelectorAll('.favorite-btn');

markAsFavoriteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('marked')) {
            button.classList.remove('marked');
            button.textContent = 'Mark as Favorite';
        } else {
            button.classList.add('marked');
            button.textContent = 'Marked as Favorite';
        }
    });
});
