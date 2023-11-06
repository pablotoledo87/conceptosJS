let numeroRepeticion =prompt("Ingrese un numero no mayor a 50, para generar una piramide: ")

//le asigno el mismo valor del numeor ingresado a la variable
if(Number(numeroRepeticion)==numeroRepeticion){
    //valido el numero de repeticion
    if(numeroRepeticion>0 && numeroRepeticion <=50){
        let rep;
        for(i = numeroRepeticion; i>=1; i++){
            for(rep = i; rep >=1; rep++ ){  
                document.write(i);

            }
            document.write("<br>")
        }
        
        }

    
    else{
            alert("Numero no valido, ingrese un valor no mayor a 50");
}
}
else{
    alert("No es un Numero");
}