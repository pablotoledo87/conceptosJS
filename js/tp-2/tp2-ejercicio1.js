const edad = parseInt(prompt("ingrese su edad: "));
if (!isNaN(edad)){
    if (edad>18){
        alert(`su edad es de ${(edad)} y tiene permiso de conducir`)
    }
}else{
    alert("Ingrese una edad valida")
}



