'use strict'
const init = () => {
    // 1) Напишите код, как получить в консоль…
    // элемент <div>?
    // <ul>?
    // второй <li> (с именем Пит)?
    console.log(document.querySelector('div'));
    console.log(document.querySelector('ul'));
    console.log(document.querySelectorAll('li')[1]);
    
    // 2) Необходимо получить все элементы "li" на странице и добавить к каждому из них класс "list-item".
    let liList = document.querySelectorAll('li');
    for(let i of liList){
        i.classList.add('list-item');
        console.log(i.className);
    }
    // 3) Запросить от пользователя цифру. После вывести блоки, количество которых будет равно этой цифре.
    
    let blockList = document.createElement('div');
    blockList.classList.add('blocklist');
    blockList.style.display = 'grid';
    blockList.style.gridTemplateColumns = 'repeat(auto-fit, 150px)';
    
    let block = document.createElement('div');
    block.classList.add('block');
    block.innerHTML = 'Квадробер';
    block.style.width = '100px';
    block.style.height = '100px';
    block.style.backgroundColor = 'black';
    block.style.color = 'white';
    
    let number = +prompt('число',0);
    for(let i = 0; i < number; i++){
        let block2 = block.cloneNode(true);
        
        blockList.append(block2);
    }
    document.body.append(blockList);
    // 4) Создайте форму с полями "Имя" и "Email" и кнопкой "Отправить"email

    let form = document.createElement('form');
    let inputName = document.createElement('input')
    inputName.type = 'name';
    inputName.name = 'name';
    inputName.placeholder = 'name';
    let inputEmail = document.createElement('input')
    inputEmail.type = 'email';
    inputEmail.name = 'email';
    inputEmail.placeholder = 'email';
    
    let inputSubmit = document.createElement('input')
    inputSubmit.type = 'submit';
    inputSubmit.name = 'btn';
    inputSubmit.placeholder = 'btn';

    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(inputSubmit);
    
    document.body.append(form);
}
document.addEventListener("DOMContentLoaded", init);
