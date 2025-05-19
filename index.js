// Menampilkan notifikasi saat halaman dimuat
window.addEventListener("load", () => {
    const notification = document.createElement("div");
    notification.textContent = "Selamat datang Backburner!";
    notification.style.position = "fixed";
    notification.style.top = "10px";
    notification.style.right = "10px";
    notification.style.backgroundColor = "#007bff";
    notification.style.color = "White"; 
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    notification.style.zIndex = "1000";

    document.body.appendChild(notification);

    // Menghilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.transition = "opacity 0.5s";
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.remove();
            // Tambahkan kelas text-black ke elemen tertentu
            const mainText = document.querySelector("main p");
            if (mainText) {
                mainText.classList.remove("text-white"); 
                mainText.style.color = "black"; 
            }
        }, 500);
    }, 3000);
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
