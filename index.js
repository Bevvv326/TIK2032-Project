// Menampilkan alert saat halaman dimuat
window.addEventListener("load", () => {
    alert("Selamat datang di halaman Backburner!");
});

// Animasi teks ketika mouse masuk ke h1
const title = document.querySelector("main h1");
title.addEventListener("mouseenter", () => {
    title.style.color = "#007bff";
    title.style.transition = "color 0.5s";
});
title.addEventListener("mouseleave", () => {
    title.style.color = "#333";
});

// Efek hover link nav
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#ffc107";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "white";
    });
});
