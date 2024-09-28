"use strict"
// Создать аккордеон с собственным дизайном и анимацией


document.querySelector('.faq').addEventListener('click', function(event){
    let targ = event.target.closest('.faq_element');
    if(!targ) return;

    targ.classList.toggle('active');
    let p = targ.querySelector('p');
    if(targ.classList.contains('active')){
        p.style.height = p.scrollHeight + 'px';
    } else {
        p.style.height = '';
    }
})