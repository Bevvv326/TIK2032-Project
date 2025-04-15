// Tampilkan alert saat halaman dimuat
window.addEventListener('load', () => {
    alert('Selamat datang di halaman Contact Beverlyyy!');
});

// Fungsi untuk menyalin teks ke clipboard
function salinTeks(teks) {
    navigator.clipboard.writeText(teks)
        .then(() => {
            alert(`Teks "${teks}" berhasil disalin ke clipboard!`);
        })
        .catch(err => {
            alert('Gagal menyalin teks:', err);
        });
}

// Tambahkan event listener pada elemen kontak
document.addEventListener('DOMContentLoaded', () => {
    const kontakItems = document.querySelectorAll('.kontak');

    kontakItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const teks = item.textContent.split(':')[1].trim();
            salinTeks(teks);
        });
    });
});
