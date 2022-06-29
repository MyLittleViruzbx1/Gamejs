const ancho = 1550;
const alto = 600;

let target = {
    x: getRandomNum(ancho),
    y: getRandomNum(alto)
};
// console.log(target)
let $map = document.getElementById('mapF');
let $distancia = document.getElementById('distance')
let clicks = 0;

$map.addEventListener('click', (e)=>{
     clicks++;
    // console.log('click')
    let distancia = getDistance(e, target);
    // console.log(distancia)
    let distanceHit =getDistanceHint(distancia);
    // console.log(distanceHit)
    $distancia.innerHTML = `<h1>${distanceHit}</h1>`;

    if(distancia < 10){
        alert(`Has Encontrado El TESORO en ${clicks} Intentos`)
    }
})