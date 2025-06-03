<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "blog_db");
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Ambil data artikel dari database
$articles = [];
$result = mysqli_query($conn, "SELECT * FROM articles ORDER BY id DESC");
if (!$result) {
    die("Query error: " . mysqli_error($conn));
}
while ($row = mysqli_fetch_assoc($result)) {
    $articles[] = $row;
}
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
        <?php if (empty($articles)): ?>
            <p>Tidak ada artikel ditemukan.</p>
        <?php else: ?>
            <?php foreach($articles as $article): ?>
            <article>
                <h2><?= htmlspecialchars($article["title"]) ?></h2>
                <?php if($article["image"]): ?>
                    <img src="<?= htmlspecialchars($article["image"]) ?>" alt="Gambar Artikel" width="500px"><br>
                <?php endif; ?>
                <p><?= $article["content"] ?></p>
                <button class="favorite-btn">Mark as Favorite</button>
            </article>
            <?php endforeach; ?>
        <?php endif; ?>
    </main>
    <footer>
        <p>&copy; 2025 Beverlyyy</p>
    </footer>
    <script>
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.textContent = 'Favorited!';
        this.disabled = true;
    });
});
</script>
</body>
</html>
