window.onload = () => {
  if (document.getElementById("searchInput")) {
    tampilkanKonten();
  }

  if (document.getElementById("calendarDays")) {
    for (let i = 1; i <= 31; i++) {
      const d = document.createElement("div");
      d.className = "day";
      d.textContent = i;
      document.getElementById("calendarDays").appendChild(d);
    }
  }

  if (document.getElementById("previewMedia")) {
    document.getElementById("media").addEventListener("change", () => {
      const file = media.files[0];
      const preview = document.getElementById("previewMedia");
      if (!file) return preview.style.display = "none";
      if (!file.type.startsWith("image") && !file.type.startsWith("video")) {
        alert("File harus gambar atau video.");
        media.value = "";
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("Ukuran maksimal 10MB.");
        media.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (file.type.startsWith("image")) {
          preview.src = reader.result;
          preview.style.display = "block";
        } else {
          preview.style.display = "none";
        }
      };
      reader.readAsDataURL(file);
    });
  }
};
