'use strict'

//При нажатии на кнопку старт рандомно менять цвет блока каждые 0.5 секунд, при нажатии на стоп остановить смену цвета.

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let start = document.querySelector('.start');
let stop1 = document.querySelector('.stop');

let block = document.querySelector('.color');


start.addEventListener('click',function(event){
    let timer = setInterval(() => {block.style.backgroundColor = getRandomColor(); stop1.addEventListener('click', function(){
        clearInterval(timer);
    })},500);
})

