//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

/*
function verificarNum ( num ) {
    if (num % 2===0){
        console.log(num + ' es par');
    } else {
        console.log(num + ' es impar');
    }
}

verificarNum(31);
verificarNum(0);
verificarNum(-16);
*/

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

/*
let cualEsMayor = (num1, num2) => {
    if(num1 > num2){
        console.log(num1 + ' es mayor que ' + num2);
    } else if(num1 < num2){
        console.log(num1 + ' es menor que ' + num2);
    } else{
        console.log('ambos son iguales');
    }
}

cualEsMayor(20, 26);
cualEsMayor(3, 1);
cualEsMayor(16, 27);
cualEsMayor(222, 30);
cualEsMayor(20, 20);
*/

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

/*
let esMultiplo = (num) => {
    if(num % 5 === 0){
        console.log(num + ' es multiplo de 5');
    } else{
        console.log(num + ' no es multiplo de 5');
    }
}

esMultiplo(15);
esMultiplo(1);
esMultiplo(3);
esMultiplo(20);
*/

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

/*
const imprimirNum = (num) => {
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
}

imprimirNum(7);
*/

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

/*
const imprimirPalabra = (palabra, num) =>{
    for (let i = 0; i < num; i++) {
        console.log(palabra);
    }
}

imprimirPalabra('arroz', 4);
*/


//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

/*
function imprimirArray (array){
    for (let i = 0; i < array.length; i++) {
        console.log(numeros[i]);
    }
}

const numeros = [2, 4, 6, 8, 10, 12];
imprimirArray(numeros);
*/

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

/*
function imprimirArrayMenosQuinto (array){
    for (let i = 0; i < array.length; i++) {
        if (i !== 4){
            console.log(array[i]);
        }
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArrayMenosQuinto(numeros);
*/


//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

/*
function imprimirMultip (array, num) {
    for (let i = 0; i < array.length; i++) {
        const resultado = array[i] * num;
        console.log(resultado);
    }
}

const numeros = [1, 3, 5, 7, 9];
imprimirMultip(numeros, 4);
*/