const elem = document.getElementById("scrollDiv");
const targetDiv = document.getElementById("galeria-box"); // azt a divet állítjuk be

function adjustDivHeight() {
  // Ha a tartalom magassága kisebb vagy egyenlő, mint a látható rész magassága,
  // akkor nem lehet görgetni.
  if (elem.scrollHeight <= elem.clientHeight) {
    console.log("A weboldal nem görgethető. Beállítjuk a div magasságát.");
    targetDiv.style.height = "calc(100vh - 70px)"; // Itt állíthatod be a kívánt magasságot
  }
  else {
    // Ha az oldal görgethető, itt nem történik semmi.
    // Ha korábban már beállítottad a magasságot, visszaállíthatod az eredeti állapotot:
    targetDiv.style.height = "";
  }
}

// Futtatjuk a függvényt, amikor az oldal betöltődött és amikor az ablak átméreteződik
window.addEventListener('load', adjustDivHeight);
window.addEventListener('resize', adjustDivHeight);
