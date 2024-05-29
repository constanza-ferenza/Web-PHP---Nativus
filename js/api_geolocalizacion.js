

const http = new XMLHttpRequest()
let result = document.querySelector("#resultado")


document.querySelector("#compartir").addEventListener("click", () => {
    findMyCoordinates()

})

function findMyCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const API = `https://api-bdc.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
            getAPI(API)

        })
    } else {
        alert("Tu ubicación no pudo ser encontrada por tu navegador")
    }

}


function getAPI(API) {
    http.open("GET", API)
    http.send()
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const resultado = JSON.parse(this.responseText)
            console.log(resultado.city)
            document.getElementById("ciudad").textContent = resultado.city;
            document.getElementById("mostrarCiudad").style.display = '';
            document.getElementById("compartir").style.display = "none";

        }
    }
}



//https://api.bigdatacloud.net/data/reverse-geocode

/* consultar coordenadas
function findMyCoordinates(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log (position.coords.latitude, position.coords.longitude)

        })
        */