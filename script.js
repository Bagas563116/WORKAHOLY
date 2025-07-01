const nita = document.getElementById("charIntpHidup");
const hidup = document.getElementById("intpHidup");
const mati = document.getElementById("intpMati");

let nitaKlik = 0;

nita.addEventListener("click", function () {
  const isi = document.getElementsByClassName("hisi");
  const kosong = document.getElementsByClassName("hkosong");
  const nyawaContainer = document.getElementById("nyawa");

  nyawaContainer.classList.add("shake");
  setTimeout(function () {
    nyawaContainer.classList.remove("shake");
  }, 500);

  nita.classList.add("shake");
  setTimeout(function () {
    nita.classList.remove("shake");
  }, 500);

  if (nitaKlik < 5) {
    isi[nitaKlik].style.display = "none";
    kosong[nitaKlik].style.display = "inline-block";
    nitaKlik++;
  }

  if (nitaKlik === 5) {
    hidup.style.display = "none";
    mati.style.display = "inline-block";

    setTimeout(function () {
      hidup.style.display = "inline-block";
      mati.style.display = "none";

      for (let i = 0; i < 5; i++) {
        isi[i].style.display = "inline-block";
        kosong[i].style.display = "none";
      }

      nitaKlik = 0; // reset jumlah klik
    }, 2000);
  }
});
