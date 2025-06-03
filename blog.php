<?php
<!-- filepath: d:\TIK2032-Project\blog.php -->
<?php
$articles = [
    [
        "title" => "Artikel 1: Spesifikasi Honda CRF150L",
        "image" => "Gambar/Gambar1.jpg",
        "content" => "CRF150L sudah mengenakan ukuran pelek full-size yakni depan 21 inci dan 18 inci di belakang. <br>
        Kedua pelek itu dibuat dari bahan aluminum. Selain untuk mengejar efisiensi bobot, juga buat kestabilan berkendara.<br>
        <b>Spesifikasi:</b><br>
        Dimensi Panjang X Lebar X Tinggi : 2.119 X 793 X 1.153 mm<br>
        Jarak Sumbu Roda : 1.375 mm<br>
        Jarak Terendah ke Tanah : 285 mm<br>
        Jarak Tempat Duduk : 869 mm<br>
        Berat Kosong : 122 kg<br>
        Kapasitas Tanki Bahan Bakar : 7.2L<br>
        <b>Mesin:</b><br>
        Tipe Mesin : 4-Langkah, SOHC, Satu<br>
        Silinder Tipe Pendinginan : Pendingin Udara<br>
        Sistem Suplai Bahan Bakar : PGM-FI (Programmed Fuel Injection)<br>
        Volume Langkah : 149.15 cm3<br>
        Diameter X Langkah : 57.3 x 57.8 mm<br>
        Perbandingan Kompresi : 9.5:1<br>
        Daya Maksimum : 9,51 kW(12,91 PS)/8.000 rpm<br>
        Torsi Maksimum : 12,43 Nm(1,27 kgf.m)/6.500 rpm<br>
        Tipe Transmisi : 5-Speed<br>
        Pola Pengoperan Gigi : 1 – N – 2 – 3 – 4 – 5<br>
        Tipe Starter : Pedal dan Elektrik<br>
        Tipe Kopling : Manual, Multiplate Wet Clutch<br>
        Tipe Minyak Pelumas : Basah<br>
        Kapasitas Minyak Pelumas : 1.0 Liter (Penggantian periodik)<br>"
    ],
    [
        "title" => "Artikel 2: Dampak Patah Hati pada Kesehatan Mental Anak Remaja",
        "image" => "",
        "content" => "Patah hati adalah pengalaman emosional yang sulit bagi siapa pun, terlebih lagi bagi anak remaja yang mengalami patah hati akibat hubungan percintaan yang berakhir.<br>
        <b>Dampak Patah Hati pada Kesehatan Mental Anak Remaja:</b><br>
        Gangguan Emosional, Gangguan Kesehatan Mental, Penurunan Diri, Perubahan Perilaku, dan lainnya."
    ],
    [
        "title" => "Artikel 3: Mengenal Istilah \"Backburner\"",
        "image" => "",
        "content" => "Backburner relationship adalah sebuah istilah yang merujuk pada suatu hubungan di mana seseorang yang sudah memiliki hubungan serius dengan pasangannya malah membangun chemistry dengan orang lain sebagai bentuk \"backup\" apabila pasangan utamanya meninggalkan mereka.<br>
        Memiliki backburner relationship sebenarnya sama saja dengan berselingkuh secara tidak langsung. Secara psikologi, memiliki hubungan backburner ini adalah sebuah bentuk insecurity."
    ]
];
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="blog.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="blog.php">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Blog</h1>
        <?php foreach($articles as $article): ?>
        <article>
            <h2><?= $article["title"] ?></h2>
            <?php if($article["image"]): ?>
                <img src="<?= $article["image"] ?>" alt="Gambar Artikel" width="500px"><br>
            <?php endif; ?>
            <p><?= $article["content"] ?></p>
            <button class="favorite-btn">Mark as Favorite</button>
        </article>
        <?php endforeach; ?>
    </main>
    <footer>
        <p>&copy; 2025 Beverlyyy</p>
    </footer>
</body>
</html>