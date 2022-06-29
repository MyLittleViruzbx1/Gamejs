const getRandomNum = (limite) =>{
    return Math.floor(Math.random() * limite);
}

let getDistance = (e, target) =>{
    let difX = e.offsetX - target.x;
    let difY = e.offsetY - target.y;
    return Math.sqrt((difX * difX) + (difY + difY));
}

let getDistanceHint = distancia =>{
    if(distancia <30){
        return 'Hirviendo';
    }else if(distancia < 45){
        return 'Muy Caliente';
    }else if(distancia < 65 ){
        return 'Caliente';
    }else if(distancia < 90){
        return 'algo caliente';
    }else if(distancia < 180) {
        return 'Frio';
    }else if(distancia < 300){
        return 'Muy Frio';
    }else if(distancia < 500){
        return 'Muerto de frio muy lejos';
    }else{
        return 'Criogenizado'
    }
}