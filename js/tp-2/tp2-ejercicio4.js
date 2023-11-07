const cadenaNumero = parseInt(prompt("ingrese un numero para sumar: "))
if(!isNaN(cadenaNumero)){
do{
   
    

    

document.write("Su sumatoria es: " + cadenaNumero )
cadenaNumero ++;

}while(confirm('¿Desea ingresar otro numero  mas?'));
}
else{
    alert("ingrese un número valido")
}