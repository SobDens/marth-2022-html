// - Створити функцію конструктор для об'єктів User з полями
// id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function user(id,name,surname,email,phone ){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email =email;
//         this.phone = phone
// };
// let array = [];
// let user1 = new user('123','den',' karpenko','karpenko@.com','0505553322');
// let user2 = new user('220','ben','homenco','homenco@.com','0509993535');
// let user3 = new user('345','sem','poopkin','poopkin@.com','0500509876');
// let user4 = new user('656','cat','smith','smith@.com','0668765455');
// let user5 = new user('233','nik','smith','smith@.com','0992223344');
// let user6 = new user('989','mary','brown','brown@.com','0665453423');
// let user7 = new user('999','lis','moore','moore@.com','0998767676');
// let user8 = new user('555','diego','davis','davis@.com','0505556677');
// let user9 = new user('887','bony','martin','martin@.com','0998887766');
// let user10 = new user('223','maikl','jackson','jackson@.com','0502224466');
// array =[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
// console.log(array);
// // let users = array.filter(value => value.id % 2 ===0);
// // console.log(users);
// let users1 = array.sort((a,b) =>a.id - b.id);
// console.log(users1);


// - створити класс для об'єктів Client з полями id, name, surname , email,
//  phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client{
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }
// let array = [];
// let client1 = new Client('123','den',' karpenko','karpenko@.com','0505553322',['bread','milk','banana']);
// let client2 = new Client('220','ben','homenco','homenco@.com','0509993535',['beer','fish']);
// let client3 = new Client('345','sem','poopkin','poopkin@.com','0500509876',['dread','cofe','orang','woter']);
// let client4 = new Client('656','cat','smith','smith@.com','0668765455',['chips','milk']);
// let client5 = new Client('233','nik','smith','smith@.com','0992223344',['bread','juice']);
// let client6 = new Client('989','mary','brown','brown@.com','0665453423',['brendy','apple']);
// let client7 = new Client('999','lis','moore','moore@.com','0998767676',['joice']);
// let client8 = new Client('555','diego','davis','davis@.com','0505556677',['snikers']);
// let client9 = new Client('887','bony','martin','martin@.com','0998887766',['lime','milk','tea','bread','tomato']);
// let client10 = new Client('223','maikl','jackson','jackson@.com','0502224466',['milk']);
// array =[client1,client2,client3,client4,client5,client6,client7,client8,client9,client10]
// console.log(array);
// let clients = array.sort((a,b) =>a.order.length - b.order.length);
// console.log(clients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model,manufacturer,year,maxspeed,power) {
//     this.model = model;
//     this.manufacture = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.power = power;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//     this.Year = function (newYear) {
//         this.year = newYear;
//     }
//     this.addDriver = function (driver){
//         this.drive = driver;
//     }
// }
//
//
// let newCar =new Car('chery','china',2022,180,2.5);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(29);
// console.log(newCar);
// newCar.Year(2099);
// console.log(newCar);
// newCar.addDriver('den');


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, manufacturer, year, maxspeed, power) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.uear = year;
//         this.maxspeed = maxspeed;
//         this.power = power;
//
//     }
// drive () {
//     console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
// info  () {
//         for (const item in this) {
//             console.log(`${item} - ${this[item]}`);
//         }
//     }
// increaseMaxSpeed (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
// Year (newYear) {
//         this.year = newYear;
//     }
// addDriver (driver){
//         this.drive = driver;
//     }
//
// };
// let newCar =new Car('chery','china',2022,180,2.5);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(29);
// console.log(newCar);
// newCar.Year(2099);
// console.log(newCar);
// newCar.addDriver('den');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class cinderella {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot

    }
};
let array = [];
let cinderella1 = new cinderella('bella',19,35);
let cinderella2 = new cinderella('avrora',18,36);
let cinderella3 = new cinderella('ariel',17,37);
let cinderella4 = new cinderella('tiana',19,38);
let cinderella5 = new cinderella('rapunzel',15,39);
let cinderella6= new cinderella('snow white',21,40);
let cinderella7 = new cinderella('jasmine',20,34);
let cinderella8 = new cinderella('elsa',22,33);
let cinderella9 = new cinderella('mulana',23,32);
let cinderella10 = new cinderella('lilo',20,31);
class Prince {
    constructor(name, age, faindSise) {
        this.name = name;
        this.age = age;
        this.faindSise = faindSise
    }
}let prince = new Prince('volodumir',34,36);