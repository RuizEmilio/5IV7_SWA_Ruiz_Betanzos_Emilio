// CIFRAR EN CESAR
function Cifrar(){
    
    var mensajeACifrar = document.getElementById('cadena').value;
    var clave = parseInt(document.getElementById('clave').value);
    const abec = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var mensajeACifrarU = mensajeACifrar.toUpperCase();
    var mensajeCifrado = '';

    for(var letra of mensajeACifrarU){

        if(abec.includes(letra)){

            var posicion = abec.indexOf(letra);
            posicion += clave;
            console.log(letra)

            while(posicion >= 27){

                posicion -= 27;

            }

            mensajeCifrado += abec[posicion];

        }
        else{

            mensajeCifrado += letra;

        }

    }

    document.getElementById('cadenaCifrada').value = mensajeCifrado;

}

// DECIFRAR CESAR
function Decifrar(){

        
    var mensajeCifrado = document.getElementById('cadenaCifrada').value;
    var clave = parseInt(document.getElementById('clave').value);
    const abec = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var mensajeCifradoU = mensajeCifrado.toUpperCase();
    var mensajeDecifrado = '';

    for(var letra of mensajeCifradoU){

        if(abec.includes(letra)){

            var posicion = abec.indexOf(letra);
            posicion -= clave;

            while(posicion < 0){

                posicion += 27;

            }

            mensajeDecifrado += abec[posicion];

        }
        else{

            mensajeDecifrado += letra;

        }

    }

    document.getElementById('cadena').value = mensajeDecifrado;
    
}