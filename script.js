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

      nitaKlik = 0;
    }, 2000);
  }
});

/* -----------------------------------------------gerak gerak---------------------------------------------------- */

let posisi = 0;

const bagas = document.getElementById("bagas");
function gerak() {
  posisi += 1.5;
  if (posisi > window.innerWidth) {
    posisi = -bagas.width;
  }
  bagas.style.left = posisi + "px";
  requestAnimationFrame(gerak);
}
gerak();

let posisiAwan1 = 0;
let posisiAwan2 = -500;
let posisiAwan3 = 0;
let posisiAwan4 = -700;
let posisiAwan5 = 0;

const awan1 = document.getElementById("awan1");
const awan2 = document.getElementById("awan2");
const awan3 = document.getElementById("awan3");
const awan4 = document.getElementById("awan4");
const awan5 = document.getElementById("awan5");

function gerakAwan() {
  posisiAwan1 += 1.5;
  posisiAwan2 += 1.5;
  posisiAwan3 += 1.7;
  posisiAwan4 += 1.7;
  posisiAwan5 += 1.5;

  if (posisiAwan1 > window.innerWidth) {
    posisiAwan1 = -awan1.width;
  }

  if (posisiAwan2 > window.innerWidth) {
    posisiAwan2 = -awan2.width;
  }

  if (posisiAwan3 > window.innerWidth) {
    posisiAwan3 = -awan3.width;
  }

  if (posisiAwan4 > window.innerWidth) {
    posisiAwan4 = -awan4.width;
  }

  if (posisiAwan5 > window.innerWidth) {
    posisiAwan5 = -awan5.width;
  }

  awan1.style.right = posisiAwan1 + "px";
  awan2.style.right = posisiAwan2 + "px";
  awan3.style.right = posisiAwan3 + "px";
  awan4.style.right = posisiAwan4 + "px";
  awan5.style.right = posisiAwan5 + "px";

  requestAnimationFrame(gerakAwan);
}
gerakAwan();

/* ----------------------------------------------- GAME ZONE ---------------------------------------------------- */

const layar = document.getElementById("layar");
const layarGame = ["layarGBK.png", "layarFLY.png"];
let i = 0;

function back() {
  if (i <= 0) {
    i = layarGame.length - 1;
  } else {
    i--;
  }
  setLayar();
}

function next() {
  if (i >= layarGame.length - 1) {
    i = 0;
  } else {
    i++;
  }
  setLayar();
}

function setLayar() {
  layar.setAttribute("src", "images/" + layarGame[i]);
}

/* ----------------------------------------------- toggle ---------------------------------------------------- */

const lebah1 = document.getElementById("lebah1");
const lebah2 = document.getElementById("lebah2");
let kondisi = true;

setInterval(function () {
  if (kondisi == true) {
    lebah1.style.display = "none";
    lebah2.style.display = "inline-block";
  } else {
    lebah1.style.display = "inline-block";
    lebah2.style.display = "none";
  }
  kondisi = !kondisi;
}, 200);

/* ----------------------------------------------- notes ---------------------------------------------------- */

const stample = document.getElementById("stample");
