//koodi.js
function tallenna() {
    var teksti = document.getElementById("Tekstikentta").value;
    alert("Teksti: " + teksti);
    document.getElementById("toinen_teksti").value = teksti
}