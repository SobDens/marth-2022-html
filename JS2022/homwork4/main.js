// function fff () {
//     document.write(`<div>5</div>`);
//     document.write(`<div>4</div>`);
//     document.write(`<div>3</div>`);
//     document.write(`<div>2</div>`);
//     document.write(`<div>1</div>`);
// }
// fff();

// function square(a,b){
//     let result =(a + b) * 2;
//     return result;
// }
// let answer = square(100,20);
// console.log(answer);
// function  squareS(a,b){
//     let result =(a + b)*2;
//     return result;
// }
// let answer = squareS(6,0.9);
// console.log(answer);
// function squareP(a,b,c){
//     let result = (a - b * c);
//     return result;
// }
// let answer = squareP(2,3,4);
// console.log(answer)


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareS(a,b){
//     let result =(a * b);
//     return result;
// }
// let answer = squareS(21,32);
// console.log(answer);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareS(p,r){
//     let result =(p * r *r);
//     return result;
// }
// let answer = squareS(3.14,5);
// console.log(answer)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareC(h,r){
//     let result =(h * r);
//     return result;
// }
// let answer = squareC(5,10);
// console.log(answer)

// - створити функцію яка приймає масив та виводить кожен його елемент
// function doc() {
//     document.write('<div>1</div>');
//     document.write('<div>2</div>');
//     document.write('<div>3</div>');
//     document.write('<div>4</div>');
// }
//  doc()

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function list(a){
//     document.write(`<ul>`);
//     document.write(`<p>${a}</p>`)
//     document.write(`</ul>`);
// }
// list(`bonus`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function  lists(b){
//     document.write(`<ul>`);
//     document.write(`<li>${b}</li>`);
//     document.write(`<li>${b}</li>`);
//     document.write(`<li>${b}</li>`);
//     document.write(`</ul>`);
// }
// lists(`Слава Украине`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function tri(size){
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++){
//         document.write(`<li>hello!!! ${i+1}</li>`);
//     }
//     document.write(`</ul>`);
// }
// tri(10);
// tri(8)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrey = [1, 2, 'hello',true]
// function nambr(arr){
//     document.write(`<ul>`);
//     for (let item of arr) {
//       document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// nambr(arrey)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {
//         id: 123456,
//         name: 'den',
//         age: 40
//     },
//     {
//         id: 789101,
//         name: 'ben',
//         age: 5
//     },
//     {
//         id: 456789,
//         name: 'sem',
//         age: 10
//     }
//
// ]
// function obj(user){
//     for (let i of user) {
//         document.write(`<div>${i.id}  ${i.name}  ${i.age}</div>`)
//     }
// }
// obj(users)

// - створити функцію яка повертає найменьше число з масиву
// let arr = [1, 2, 7, 9, -5];
//
// function minNum(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item
//         }
//     }
//     return min;
// }

// - створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його, приклад[1,2,10]->13.


