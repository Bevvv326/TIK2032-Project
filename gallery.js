// Menambahkan efek zoom saat hover pada gambar di gallery
const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });

    // Menambahkan efek saat gambar diklik
    img.addEventListener("click", () => {
        // Membuka gambar dalam ukuran penuh dalam mode fullscreen
        const fullSizeImage = document.createElement("div");
        fullSizeImage.style.position = "fixed";
        fullSizeImage.style.top = "0";
        fullSizeImage.style.left = "0";
        fullSizeImage.style.width = "100%";
        fullSizeImage.style.height = "100%";
        fullSizeImage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        fullSizeImage.style.display = "flex";
        fullSizeImage.style.alignItems = "center";
        fullSizeImage.style.justifyContent = "center";
        fullSizeImage.style.zIndex = "9999";

        const imageClone = document.createElement("img");
        imageClone.src = img.src;
        imageClone.style.maxWidth = "90%";
        imageClone.style.maxHeight = "90%";
        imageClone.style.borderRadius = "10px";

        fullSizeImage.appendChild(imageClone);
        document.body.appendChild(fullSizeImage);

        // Menutup gambar saat area luar gambar diklik
        fullSizeImage.addEventListener("click", () => {
            fullSizeImage.remove();
        });
    });
});
