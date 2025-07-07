function bukaForm(tipe, harga) {
    document.getElementById('form-pembelian').style.display = 'block';
    document.getElementById('info-pembelian').innerText = `${tipe} (Rp${harga.toLocaleString('id-ID')})`;
  
    const linkWA = document.getElementById('kirim-wa');
  
    // Buat ulang event klik agar selalu sesuai data terbaru
    linkWA.onclick = function (e) {
      e.preventDefault(); // Hindari link langsung jalan sebelum validasi
  
      const nama = document.getElementById('nama').value.trim();
      const judul = document.getElementById('judul').value.trim();
  
      if (!nama || !judul) {
        alert('Silakan isi nama dan judul puisi terlebih dahulu.');
        return;
      }
  
      const pesan = `Halo, saya *${nama}* ingin memesan *${tipe}* seharga *Rp${harga.toLocaleString('id-ID')}*.\n\nJudul puisi: "${judul}"\n\nSaya sudah transfer ke DANA: 0895386977117.`;
      const url = `https://wa.me/6287826108793?text=${encodeURIComponent(pesan)}`;
      window.open(url, '_blank'); // Buka di tab baru
    };
  }
  