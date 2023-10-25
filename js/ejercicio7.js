const num1 =parseInt(prompt("Ingrese un primer numero "));
const num2 =parseInt(prompt("Ingrese un segundo numero "));
const num3 =parseInt(prompt("Ingrese un tercer numero "));

if(num1 > num2 && num1>num3){
    alert(`El numero 1 (${num1}) es mayor que el numero 2 (${num2}) y 3 ${num3}`)
}else if(num3>num2){
    alert(`El numero 3 (${num1}) es mayor que el numero 2 (${num2}) y 1 (${num1})`)
}else if(num2>num3){
    alert(`El numero 2 (${num2}) es mayor que el numero 3 (${num3}) y 1 (${num1})`)
}else{
    alert(`Los numeros son iguales (${num1})`)
}
