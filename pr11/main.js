"use strict"
// Создать выпадающее меню с собственным дизайном и анимацией

let menu_item = document.querySelectorAll('.menu_item');
menu_item.forEach(element => {
    let menu_btn = element.querySelector('.menu_btn');
    let submenu = element.querySelector('.submenu');

    element.addEventListener('mouseenter',() => {
        menu_btn.classList.add('active');
        submenu.classList.add('active');
    });
    element.addEventListener('mouseleave',() => {
        menu_btn.classList.remove('active');
        submenu.classList.remove('active');
    });
});