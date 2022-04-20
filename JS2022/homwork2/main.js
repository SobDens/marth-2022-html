//
// let x =2;
//  if (x ===3){
//     console.log('yes')
// } else if (x ===2){
//     console.log('red')
// } else if ( x ===10) {
//       console.log('hte best')
//  }





//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('wht time is it');
//    if (time >= 0 &&  time <= 15) {
//        console.log('1h');
// }     else if (time > 15 && time <= 30) {
//        console.log('2h');
// }     else if(time > 30 && time <= 45) {
//         console.log('3h');
// }     else if (time > 45 && time <= 59) {
//        console.log('4h');
//    }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 18 ;
//  if (typeof day === 'number');
// {
//     if (day >= 1 && day <= 11) {
//         console.log('1 decada');
//     } else if (day > 11 && day <= 20) {
//         console.log('2decada');
//     } else if (day >= 20 && day <= 31) {
//         console.log('3decada');
//     }
// else
//     {
//         console.log('you enter string typy');
//     }
// }

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// switch (+prompt("namber day")){
//     case 1:
//         console.log('manday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
// }
//

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//     let a = 4;
//     let b = 4;
//     if(a > b){
//         console.log(a);
//     } else if(b > a){
//         console.log(b);
//     } else if(a === b){
//         console.log("equalentno")
//     }
//     let c = 3;
//     let d = 4
//     let e = 1;
//     if(c > d && c > e ){
//         console.log(a);
//     } else if (d > c && d > e){
//         console.log(d);
//     } else if (e > c && e > d){
//         console.log(c);
//     }