document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Menampilkan pesan sukses
    document.getElementById('responseMessage').style.display = 'block';

    // Mengosongkan form setelah pengiriman
    this.reset();
});