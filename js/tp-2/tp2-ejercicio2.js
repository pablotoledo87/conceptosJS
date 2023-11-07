
const calificacion = (prompt("Ìngrese su calificacion: Del 0 a 10"))
if(!isNaN(calificacion)){
switch(calificacion){
    case '0':
    case '1':
    case '2':
        
        document.write(`Su calificacion es de ${calificacion}, es muy deficiente`)
        break;

    case '3':
    case '4':
            
    document.write(`Su calificacion es de ${calificacion}, es insuficiente`)
    break;
        
    case '5':
    case '6':
                    
    document.write(`Su calificacion es de ${calificacion}, es suficiente`)
    break;
    case '7':
   
            
    document.write(`Su calificacion es de ${calificacion}, bien`)
    break;
    case '8':
    case '9':
                    
    document.write(`Su calificacion es de ${calificacion}, es notable`)
    break;
    case '10':
                    
    document.write(`Su calificacion es de ${calificacion}, es notable`)
    break;
    default:
        alert("número erroneo");
}
}else{
    alert("Introduce un número valido")
}
