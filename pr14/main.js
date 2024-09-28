'use strict'

//Реализовать вкладки используя свой дизайн и анимации

let tabs = document.querySelectorAll('.tab-link')
let tabTexts = document.querySelectorAll('.tab-item')

tabs.forEach((item, index)=>{
    item.addEventListener('click', function(){
        document.querySelector('.tab-link.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab-item.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})