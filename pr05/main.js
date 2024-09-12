'use strict'
// 1 У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
// lНапишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
alert(sum)

// 2 Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2. Используйте typeof для проверки, что значение свойства числовое.
// // до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(object) {
    for(let i in menu){
        if(typeof(menu[i]) == 'number'){
            menu[i] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};




// 3 Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
    read(){
        this.a = +prompt('a',0)
        this.b = +prompt('b',0)
        
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};

calculator.read(21,24);
alert( calculator.sum() );
alert( calculator.mul() );



// 4 Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str){
    let value = '';
    for(let i of str){
        if(i - i == 0){
            value += i;
        }
    };
    return value;
}
let aboba = extractCurrencyValue(prompt('Число с текстом'));
alert(aboba);

// 5 У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
alert( names ); // Вася, Петя, Маша



// 6 Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

function getAverageAge(users){
    let average = 0;
    users.forEach((element) => {
        average += (element.age / users.length); 
    });
    return average;
}

let res = getAverageAge(users);
alert(res);