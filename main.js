
const fAfirmativo = function (num) {
    return `el numero ${num} es el correcto de la condicon`;
}
const fError = function (num){
    return `el numero ${num} no cumple con la condicon`;
}
const fEjecutar = function (callbackA, callbackE){
    const num = Math.trunc(Math.random()  * 10);
    return (num >= 4 && num <=8)
        ?(console.log(callbackA(num)),true)
        :(console.error(callbackE(num)),false);
    
}
console.warn(
        (fEjecutar(fAfirmativo,fError) )
        ?`se ejecuto el callback fAfirmativo`
        :`se ejecuto el callback fError`
    ); 





// callback
// const saludar = function (){
//     return `hola mundo`;
// }

// const ejecutar = function (callback){
//     return callback();
// }
// console.log(ejecutar(saludar));