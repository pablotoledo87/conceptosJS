let saldo = 1000;
const opcion =parseInt( prompt(`Seleccione una opcion: 1- consultar saldo, 2- ingresar saldo, 3- extraer dinero`))
// if(opcion ===1){
//     document.write(`Mostrar saldo`);
// }else if(opcion===2){
//     document.write("ingresar dinero")
// }else if(opcion===3){
//     document.write("extraer dinero")
// }else{
//     document.write("opcion invalida")
// }
switch(opcion){
        case 1:
        document.write(`Su saldo es: $${saldo}`);
        break;
        case 2:
            const deposito = parseFloat(prompt());
        document.write(`Ingresar dinero`);
        break;
        case 3:
        document.write(`Extraer dinero`);
        break;
        default:
        document.write("opcion invalida");


}