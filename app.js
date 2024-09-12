//1.Dado un array de objetos que representan 20 estudiantes con sus nombres y notas, utiliza map() para crear un nuevo array 
//que contenga solo los nombres de los estudiantes aprobados (nota ≥ 60).
let estudiantes = [  { nombre: 'Ana', nota: 55 }, { nombre: 'Luz', nota: 70 },{ nombre: 'Cristian', nota: 49 },{ nombre: 'Daniel', nota: 48 },{ nombre: 'Daniela', nota: 45 },
    { nombre: 'Alexis', nota: 41},{ nombre: 'Luisfer', nota: 70 },{ nombre: 'Andres', nota: 85 },{ nombre: 'Josefa', nota: 75 },{ nombre: 'Samanta', nota: 45 },
    { nombre: 'Veronica', nota: 45 },{ nombre: 'Luisa', nota: 70 },{ nombre: 'Andrea', nota: 95 },{ nombre: 'Tatiana', nota: 45 },{ nombre: 'Marta', nota: 95 },
    { nombre: 'Gilberto', nota: 45 },{ nombre: 'Luis', nota: 70 },{ nombre: 'Fernando', nota: 85 },{ nombre: 'Monica', nota: 65 },{ nombre: 'Hector', nota: 95 },];

let EstAprobados = estudiantes.filter(estudiante => estudiante.nota >= 60).map(estudiante => estudiante.nombre);

console.log(EstAprobados)

//2.Filtrado y manipulación con filter() y map(): Dado un array de 50 números, utiliza filter() para extraerlos números pares 
//y luego aplica map() para duplicar cada uno de los números filtrados. Imprime el nuevo array.

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
let Numpares = numeros.filter(num => num % 2 === 0);
console.log(Numpares);

//3.Reducción compleja con reduce():Dado un array que contiene los precios de 40 productos enuna tienda, 
//utiliza reduce() para calcular el total con un descuento del 10% aplicado a cada precio.

let precios= [2500,3500,35800,3450,12300,12550,14800,28200,20000,10000,45000,45800,49000,558400,48200,14000,13600,355100,256900,1523600,145821200,225212200,322200,12500,25000,215200,78000,4500200,150000,145000,47800,7900,9800,7800200,3200,4500,47800,1450,3250,3650];
let destotal = precios.reduce((acumulador, valor) => acumulador + (valor * 0.9), 0);

console.log(destotal); 

//4.Recorrido de arrays multidimensionales:Dada una matriz 4x4 con números aleatorios, utilizaforEach o for...of
// para recorrer cada elemento y generar una nuevamatriz con los valores incrementados en 5.

let matriz = [
    [8, 6, 12, 2],
    [9, 16, 17, 4],
    [9, 19, 1, 2],
    [19, 10, 5, 6]
];
let nuMatriz = matriz.map(fila =>fila.map(valor => valor + 5));
console.log(nuMatriz);