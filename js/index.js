// створення обєкту
/*
let car = {
    color: 'red',
    maxSpeed: 250,
    audio: {
        brand: 'Sony',
        speakers: 12
    }
};

car.color = 'green';

console.log(typeof car.audio.brand);

console.log(car.audio.brand);
*/


// вивід вартості обєкту через if(якщо)
/*
let car = {
    color: "green",
    maxSpeed: 250,
    cost: 2000000
};

if(car.cost < 1000000) {
    console.log('Автомобиль недорогой');
}else {
    console.log('Автомобиль дорогой');
};
*/





// заміна кольору обєкту, через функцію
/*
let car = {
    color: 'red',
};

let car2 = {
    color: 'green',
};

colorChange(car);
colorChange(car2);

function colorChange(car) {
    car.color = 'yellow';
}

console.log("Car: " + car.color);
console.log("Car2: " + car2.color);
*/


// заміна швидкості обєкту за допомогою функції
/*
let car = {
    maxSpeed: 240,
};

console.log("maxSpeed: була  " + car.maxSpeed);

speedChange(car);

function speedChange(theCar) {
    theCar.maxSpeed = 300;
}

console.log("maxSpeed: стала " + car.maxSpeed);
*/


/*
let color = getColor;
color();

function getColor(color = "red") {
    console.log(color);
    if (color === "red") {
        return ;
    }

    console.log(color);
}
*/



/*
let anonym = (function() {
    console.log('негайно викликається анонімна функція')
})();
*/


// cтрілочна функція
/*
let anonym = () => 'це стрілочна функція';

console.log(anonym());
*/



// методи в обэктах ы масивах

/*
let myCar = {
    color: 'red',
    drivers: ['"Mickael"', '"David"'],
    getDriver(just){
        console.log('Текущий водитель --- ' + this.drivers[just]);
    }
};
myCar.getDriver(0);
*/





// цикли і інкременти
/*
let drivers = ['Иван', 'Сергей', 'Егор'];

for (let i = 0; i < drivers.length; i++) {
    console.log(drivers[i]);
}


for (let i = drivers.length - 1; i >= 0; i--) {
    console.log(drivers[i]);
}
*/







// обєкти і класи
/*
let hater = {
    firstName: 'Билл',
    lastName: 'Гейтс',
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(hater.getName());
*/




/*
class Hater {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        console.log(`Наш хейтер: ${this.firstName} ${this.lastName}`);
    }
}

let hater1 = new Hater('Норман', 'Озборн');
hater1.sayName();

let hater2 = new Hater('Доктор', 'Дум');
hater2.sayName();
*/






/*
class Hater {
    constructor(firstName, lastName, newsName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.newsName = newsName;
    }

    sayName() {
        console.log(`Наш хейтер: ${this.firstName} ${this.lastName} ${this.newsName}`);
    }
}

let hater1 = new Hater('Норман', 'Озборн', 'BBC');
hater1.sayName();

let hater2 = new Hater('Доктор', 'Дум', 'CNN');
hater2.sayName();
*/






// DOM робота з html

/*
let element = {
    class: "test",
    value: 40
};

let findElement = document.querySelector("." + element.class);
findElement.value = element.value;

console.log(findElement);
*/



// let a = 0;
// while (a < 5){
//   console.log(a);
//   a++;
// };

/*for (let a = 0; a < 6; a++){
    if (a === 2){
        console.log('привіт');
    }
};*/



/*let masseg = prompt(' скільки років');
if (masseg === '18'){
    console.log('мені 18');
}
if (masseg === '22'){
    console.log('мені 22');
}*/

/*
let masseg = prompt('скільки років');
switch (masseg) {
    case '18':
        console.log('мені 18');
        break;
    case '22':
        console.log('мені 22');
        break;
    default:
        console.log('невідомо');

}
*/
// задача 1

/*
let masseg = 13;
if (masseg >= 0 && masseg <= 14) {
    alert('В першу');
}
if (masseg >= 15 && masseg <= 30) {
    alert('В другу');
}
if (masseg >= 31 && masseg <= 45) {
    alert('В третю');
}
if (masseg >= 46 && masseg <= 59) {
    alert('В четверту');
}
*/
/*
let masseg = prompt('Введіть число');
switch (true) {
    case masseg >= 0 && masseg <= 14:
        alert('В першу');
        break;
    case masseg >= 15 && masseg <= 30:
        alert('В другу');
        break;
    case masseg >= 31 && masseg <= 45:
        alert('В третю');
        break;
    case masseg >= 46 && masseg <= 59:
        alert('В четверту');
        break;
}
*/


// Задача 2

/*
let lang = prompt('Какой язык вы используете, ru или en?');
if (lang === 'ru') {
    alert('Привет, прекрасный мир!');
}
if (lang === 'en') {
    alert('Hello beautiful world!');
}
*/

/*
let lang = prompt('Какой язык вы используете, ru или en?');
switch (lang) {
    case 'ru':
        alert('Привет, прекрасный мир!');
        break;
    case 'en':
        alert('Hello beautiful world!');
        break;
}*/
