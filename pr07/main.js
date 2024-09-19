const init = () => {
// 1 Создайте кнопку, которая будет скрывать себя по нажатию.

let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function() {
    btn1.classList.add('hidden');
})

// 2 Есть элемент <div id="text">Меня нужно скрыть</div>. Добавьте кнопку, при нажатии на которую div будет скрываться.

document.querySelector('.hideText').addEventListener('click', () => document.getElementById('text').classList.add('hidden'));

// 3 Модернизируйте пример выше, сделайте так, чтобы при повторном нажатии на кнопку, элемент <div id=”text”>Меня нужно скрыть, а потом обратно показать</div> появлялся обратно.

let ht2 = document.querySelector('.hideText2');
ht2.addEventListener('click', function(){
    let text = document.getElementById('text2');
    if(!text.classList.contains('hidden')){
        text.classList.add('hidden');
    } else {
        text.classList.remove('hidden');
    };
})

// 4 Сделайте так, чтобы мяч перемещался туда, куда кликнет пользователь. Должна присутствовать анимация.

let ball = document.querySelector('#ball');
let window = document.querySelector('.task4');

window.addEventListener('click',function(event){
    ball.style.left = (event.pageX - (ball.offsetHeight / 2)) + 'px';
    ball.style.top = (event.pageY - (ball.offsetWidth / 2) ) + 'px';
})

}

document.addEventListener("DOMContentLoaded", init);