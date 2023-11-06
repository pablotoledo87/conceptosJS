

do{
    const cadenaNumero = parseInt(prompt("ingrese un numero para sumar:"))
    alert(isNaN(cadenaNumero));

    
document.write("Ingreso los siguiente numero: "+ cadenaNumero + " , ") ;
cadenaNumero ++;
document.write("Su sumatoria es: " + cadenaNumero )

}while(confirm('¿Desea ingresar otro numero  mas?'));