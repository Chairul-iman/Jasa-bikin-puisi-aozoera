function bukaForm(tipe, harga) {
  // Tampilkan form pop-up
  document.getElementById('popup').style.display = 'flex';

  // Update tampilan jenis puisi dan harga
  document.getElementById('info-pembelian').innerText = `${tipe} (Rp${harga.toLocaleString()})`;

  // Atur aksi saat tombol WhatsApp diklik
  const linkWA = document.getElementById('kirim-wa');
  linkWA.onclick = function () {
    const nama = document.getElementById('nama').value.trim();
    const judul = document.getElementById('judul').value.trim();

    if (!nama || !judul) {
      alert('Silakan isi nama dan judul puisi terlebih dahulu.');
      return false;
    }

    // Format pesan untuk WhatsApp
    const pesan = `
Halo, saya *${nama}* ingin memesan:
• Jenis Puisi: *${tipe}*
• Judul: *${judul}*
• Harga: *Rp${harga.toLocaleString()}*

Saya sudah transfer ke DANA: 0895386977117.
Mohon konfirmasinya ya. Terima kasih 🙏
`;

    const url = `https://wa.me/6287826108793?text=${encodeURIComponent(pesan)}`;
    linkWA.href = url;
  };
}

function tutupForm() {
  document.getElementById('popup').style.display = 'none';
}
