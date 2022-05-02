// Все стірлочними!!!!!!!!!

// - створити функцію яка приймає масив чисел та повертає середне арифметичне його значення
// let array = [1,2,3,4];
// let aver = (arr) => {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum/arr.length;
// }
// console.log(aver(array));

// - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const argElement of arg) {
//        if(argElement < min){
//            min = argElement
//        }
//        if(argElement > max){
//            max = argElement
//        }
//     }
//     console.log(max);
//     return min;
// }
// console.log(minMax(1,3,5,0,7))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let rondom = () => {
//     let arr = [];
//     for (let i = 0; i < 9; i++) {
//         arr[i] = Math.round(Math.random()*100);
//
//     }
//     return arr;
// }
// console.log(rondom());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до  limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// let rondom = (limit) => {
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random()*100);
//
//     }
//     return arr;
// }
// console.log(rondom(5));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку.
// [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3];
// let revers = (array) => {
//     let newArr = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArr.push(array[i]);
//     }
//     return newArr;
// }
// console.log(revers(arr));


//     Переробити на стрілочні функції з попереднього дз

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let S = (a,b) => console.log(a * b);
// S(10,20);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circleS = (r) => console.log(3.14 * r * r);
// circleS(5);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cilinderS =(h,r) =>console.log(h * r * r);
// cilinderS(10,40);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [35,5,10];
// function data(array){
//     for (const item of array) {
//         console.log(item)
//     }
// }
// data(arr);
// function obr(){
//     let arr = [54,76,87];
//     for (const obr of arr) {
//
//     }
// }
// console.log(obr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент.
// let par = (tex) => document.write(`<p>${tex}</p>`);
// par(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  let elem = (text) => document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// elem(`ukraine`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let element = (text,nam) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < nam; i++) {
//        document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// element(`the best`,2)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [10,`hello`,true];
// let text =(array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//        document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// text(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {
//         id:15,
//         name:"den",
//         age:20
//     },
//     {
//         id:25,
//         name:"ben",
//         age:99
//     }
// ];
// let text = (text) =>{
//     for (const i of text) {
//         document.write(`<div>${i.id}${i.name}${i.age}</div>`)
//     }
// };
// text(users)

// - створити функцію яка повертає найменьше число з масиву
// let array = [15,20,5,26]
// let min = (arr) => {
// let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min){
//             min = minElement
//         }
//     }
//     return min;
// }
// console.log(min(array));

// - створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [5,8,9];
// let sum = (arr) => {
//     let sum =0;
//     for (const arrElement of arr) {
//         sum  += arrElement;
//     }
//     return sum;
// }
// console.log(sum(array))

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let arr = [
//     {
//         age:34,
//         name:`den`
//     },
//     {
//         age:9,
//         name:`sem`
//     }
// ];
// let change = (array) => {
//     let temp = array[0];
//     array[0] = array[1];
//     array[1] =temp;
//     return array;
//
// }
// console.log(change(arr));
