let valor1 = parseInt(prompt("ingrese un primer numero"));
let valor2 = parseInt(prompt("ingrese un segundo numero"));

if(valor1>valor2){
    alert("el número "+valor1+" es mayor a "+valor2);
}else{
    if(valor2>valor1){
    alert("el número "+valor2+" es mayor a "+valor1);
    }else{
        alert("Los números ingresados son iguales ("+valor1+")");
    }
}