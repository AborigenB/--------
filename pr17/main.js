'use strict'

// Вывести каталог из 15 товаров, данные брать из https://dummyjson.com/products. Каждая карточка содержит картинку, название и цену.  При нажатии на одну карточку товара вывести один товар с более полной информацией о нем и кнопку “Назад”, возвращающую к каталогу.

async function getResponse() {
    let response = await fetch("https://dummyjson.com/products");
    let cards = await response.json();

    cards['products'].slice(0,15).forEach(element => {
        document.querySelector('.catalog').innerHTML += `
        <div data-index="${element.id}" class="card" >
            <img src="${element.images[0]}" alt="">
            <div class="name">${element.title}</div>
            <div class="price">${element.price}</div>
        </div>
        `
    });
}
getResponse();

document.querySelector('.catalog').addEventListener('click', function(event){
    let target = event.target.closest('.card');
    if(!target) return;

    document.querySelector('.catalog').style.display = 'none';
    let cardId = target.dataset.index;
    async function getCard() {
        let response = await fetch(`https://dummyjson.com/products/${cardId}`)
        let card = await response.json();
        
        document.querySelector('.catalog_card').innerHTML = `
        <div data-index="${card.id}" class="card" >
            <img src="${card.images[0]}" alt="">
            <div class="name">${card.title}</div>
            <div class="price">${card.price}</div>
            <a href="#" class="btn">Назад</a>
        </div>
        `;

        document.querySelector('.btn').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('.catalog_card').innerHTML = '';
            document.querySelector('.catalog').style.display = 'grid';
        })
    }
    getCard();
})

