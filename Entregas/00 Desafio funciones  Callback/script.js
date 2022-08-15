/*
Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA.
Luego crea una function map() que tome dos entradas o parámetros:
un array de como valores números. 
una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada. 
*/

let arr = [1 ,10 ,100]


function gastoConIva(a){

    return [a , a*1.21];

}

/* La funcion devuelve una matriz con el valor inicial
y luego con el valor más IVA */
function map(arr, callback){
    let arrMod = [];
    for(let i = 0 ; i<arr.length; i++){
        arrMod[i] = callback(arr[i]);
    }
    return arrMod
}


let arrIVA = map(arr, gastoConIva)

console.log(arrIVA)




