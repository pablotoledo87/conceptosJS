const numero = parseInt(prompt("ingrese un valor"));
if(numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0 ){
    alert("el numero ingresado no es divisible por 2, ni por 3, ni por 5, ni por 7");
}else{
    if(numero %2 === 0){
        alert("El numero es divisible por 2");
    }
    if(numero %3 === 0){
        alert("El numero es divisible por 3");
    }
    if(numero %5 === 0){
        alert("El numero es divisible por 5");
    }
    if(numero %7 === 0){
        alert("El numero es divisible por 7");
    }
}

