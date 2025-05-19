// Tampilkan notifikasi saat halaman dimuat
window.addEventListener('load', () => {
    const notification = document.createElement('div');
    notification.textContent = 'Selamat datang di halaman Contact ';
    notification.style.position = 'fixed';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.backgroundColor = '#007bff';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';

    document.body.appendChild(notification);

    // Menghilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.transition = 'opacity 0.5s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
});

// Fungsi untuk menampilkan notifikasi
function tampilkanNotifikasi(pesan, warna = '#007bff') {
    const notification = document.createElement('div');
    notification.textContent = pesan;
    notification.style.position = 'fixed';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.backgroundColor = warna;
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';

    document.body.appendChild(notification);

    // Menghilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.transition = 'opacity 0.5s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Fungsi untuk menyalin teks ke clipboard
function salinTeks(teks) {
    navigator.clipboard.writeText(teks)
        .then(() => {
            tampilkanNotifikasi(`Teks "${teks}" berhasil disalin ke clipboard!`, '#28a745');
        })
        .catch(err => {
            tampilkanNotifikasi('Gagal menyalin teks: ' + err, '#dc3545');
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
