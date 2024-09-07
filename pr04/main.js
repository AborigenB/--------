'use strict'
// 1) Создайте функцию и в ней при помощи цикла for выведите чётные числа от a до b. (а и b вводит пользователь)

for(let a = +prompt('a'), b = +prompt('b'); a < b ;a++){
    if(a % 2 == 0){
        alert(a);
    }
}

// 2) Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}

// 3) Напишите цикл, который предлагает prompt ввести число, большее 10. Если посетитель ввел другое число – попросить ввести еще раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введет число, большее 10, либо не нажмет кнопку Отмена.
let num;
while(true){
    num = +prompt('Введите число');
    if(num == 0) break;
    if(num >= 10) break;
}

// 4) Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
function min(a,b){
    return a+b
}
alert(min(+prompt('a'),+prompt('b')));


// 5) Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

let answer = (question, yes, no) => {
    confirm('Согласны?')? 
        yes() : 
        no()
    };
answer('Согласны?', () => alert('yes'), () => alert('no'));

// 6) Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. (Вспомните оператор ИЛИ и условный оператор ?)

let age = +prompt('Возраст');
function checkAge(age){
    return (age > 18)? true : confirm('Родители разрешили?');
}
alert(checkAge(age));


