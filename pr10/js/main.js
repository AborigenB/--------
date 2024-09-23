let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


//Пишите здесь

let button = document.querySelector('.send');
let form = document.forms['modal-form'];
let news = document.querySelectorAll('.news-item');

let newsList = [];
let newsForOut = [];

news.forEach((element) => {
    newsList.push([element.querySelector('.h3').innerHTML, element.querySelector('.news-item__p').innerHTML]);
})

// for(let i = 0; i < news.length; i++){

// }

let errorBlock = document.createElement('div');
errorBlock.classList.add('error');


button.addEventListener('click',function(event){
    event.preventDefault();

    let name = form.name;
    let description = form.textarea;
    
    let errorMessage = [];

    let flag = true;

    if(!name.value || !description.value){
        flag = false;
        errorMessage.push('пусто')
    } else if (name.value.length < 9){
        flag = false;
        errorMessage.push('Название не менее 8 символов');
    } else if (description.value.length > 300){
        flag = false;
        errorMessage.push('В тексте больше 300 символов (');
    }

    if(flag){
        createNewNews(name.value,description.value);
        modal.classList.remove('modal_active');
        form.name.value = '';
        form.textarea.value = '';

    } else {
        errorBlock.innerHTML = errorMessage;
        form.append(errorBlock);
    }
})

// Добавление новости в массив
// Валидацию полей (На пустоту. Не менее 8 символов в названии и не более 300 символов в тексте)
// Вывод новостей из массива
let createNewNews = function(name,description){
    let newNews =  news[0].cloneNode(true);
    newNews.querySelector('.h3').innerHTML = name;
    newNews.querySelector('.news-item__p').innerHTML = description;
    document.querySelector('.news-wrapper').append(newNews);
}

// При нажатии кнопки b фон сделать темным, при нажатии кнопки w фон сделать белым
document.addEventListener('keydown', function(event){
    switch(event.code){
        case 'KeyB': 
            document.body.style.background = '#363232';
            break;
        case 'KeyW': 
            document.body.style.background = 'white';
            break;
    }
})
