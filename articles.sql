-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 04:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `image`, `content`) VALUES
(1, 'Artikel 3: Mengenal Istilah \"Backburner\"', '', 'Backburner relationship adalah sebuah istilah yang merujuk pada suatu hubungan di mana <br />\r\n                seseorang yang sudah memiliki hubungan serius dengan pasangannya malah <br />\r\n                membangun chemistry dengan orang lain sebagai bentuk \"backup\" apabila pasangan utamanya <br />\r\n                meninggalkan mereka. Hubungan antara seseorang yang sudah memiliki hubungan dengan <br />\r\n                seseorang yang dijadikan cadangan ini adalah sebuah bentuk backburner relationship. <br />\r\n                \r\n                Memiliki backburner relationship sebenarnya sama saja dengan berselingkuh secara tidak <br />\r\n                langsung. Membiarkan berbagai pilihan tersedia dengan harapan bahwa apabila hubungan <br />\r\n                utama yang dijalani berjalan tidak baik atau akhirnya selesai, maka seseorang yang <br />\r\n                menjalani backburner relationship bisa menjadikan pasangan backburner-nya sebagai <br />\r\n                pengganti. Secara psikologi, memiliki hubungan backburner ini adalah sebuah bentuk insecurity.</p>'),
(2, 'Artikel 2: Dampak Patah Hati pada Kesehatan Mental Anak Remaja', '', 'Patah hati adalah pengalaman emosional yang sulit bagi siapa pun, terlebih lagi bagi anak remaja yang mengalami patah hati akibat hubungan percintaan yang berakhir. Dampak Patah Hati pada Kesehatan Mental Anak Remaja. Gangguan Emosional: Patah hati dapat menyebabkan anak remaja mengalami gejala emosional seperti sedih berkepanjangan, kekecewaan, marah, atau perasaan hancur. Mereka mungkin sulit mengontrol emosi mereka dan merasa terjebak dalam perasaan negatif tersebut. Hal ini dapat berdampak pada aktivitas sehari-hari dan hubungan sosial mereka. • Gangguan Kesehatan Mental: Anak remaja yang mengalami patah hati rentan terhadap gangguan kesehatan mental, seperti depresi dan kecemasan. Mereka mungkin menghadapi perasaan yang intens dan terus-menerus, perasaan tidak berharga, dan merasa diri mereka tidak dicintai. Sangat penting bagi mereka untuk mendapatkan dukungan mental yang tepat dalam mengatasi patah hati ini. • Penurunan Diri: Anak remaja yang mengalami patah hati mungkin mengalami penurunan rasa percaya diri dan harga diri. Mereka mungkin merasa bahwa mereka tidak menarik, tidak layak untuk dicintai, atau bahwa mereka gagal dalam hubungan asmara mereka. Ini dapat mempengaruhi percaya diri mereka di sejumlah area kehidupan, seperti hubungan sosial, sekolah, atau kegiatan ekstrakurikuler. • Perubahan Perilaku: Patah hati juga dapat menyebabkan perubahan perilaku pada anak remaja. Mereka mungkin menarik diri dari teman-teman dan aktivitas sosial yang biasa mereka ikuti. Selain itu, mereka juga mungkin mulai berkembang kebiasaan yang tidak sehat, seperti merokok, minum alkohol, atau menggunakan obat-obatan terlarang sebagai cara mengatasi rasa sakit yang mereka rasakan.'),
(3, 'Artikel 1: Spesifikasi Honda CRF150L', 'Gambar/Gambar1.jpg', 'CRF150L sudah mengenakan ukuran pelek full-size yakni depan 21 inci dan 18 inci di belakang. <br>\r\nKedua pelek itu dibuat dari bahan aluminum. Selain untuk mengejar efisiensi bobot, juga buat kestabilan berkendara. <br>\r\n<b>Spesifikasi:</b><br>\r\nDimensi Panjang X Lebar X Tinggi : 2.119 X 793 X 1.153 mm<br>\r\nJarak Sumbu Roda : 1.375 mm<br>\r\nJarak Terendah ke Tanah : 285 mm<br>\r\nJarak Tempat Duduk : 869 mm<br>\r\nBerat Kosong : 122 kg<br>\r\nKapasitas Tanki Bahan Bakar : 7.2L<br>\r\n<b>Mesin:</b><br>\r\nTipe Mesin : 4-Langkah, SOHC, Satu<br>\r\nSilinder Tipe Pendinginan : Pendingin Udara<br>\r\nSistem Suplai Bahan Bakar : PGM-FI (Programmed Fuel Injection)<br>\r\nVolume Langkah : 149.15 cm3<br>\r\nDiameter X Langkah : 57.3 x 57.8 mm<br>\r\nPerbandingan Kompresi : 9.5:1<br>\r\nDaya Maksimum : 9,51 kW(12,91 PS)/8.000 rpm<br>\r\nTorsi Maksimum : 12,43 Nm(1,27 kgf.m)/6.500 rpm<br>\r\nTipe Transmisi : 5-Speed<br>\r\nPola Pengoperan Gigi : 1 – N – 2 – 3 – 4 – 5<br>\r\nTipe Starter : Pedal dan Elektrik<br>\r\nTipe Kopling : Manual, Multiplate Wet Clutch<br>\r\nTipe Minyak Pelumas : Basah<br>\r\nKapasitas Minyak Pelumas : 1.0 Liter (Penggantian periodik)<br>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
