// Реализовать валидацию формы из следующих полей: имя, год рождения
// В поле имя необходимо проверить на пустоту, кол-во символов (мин 2)
// В поле года рождения проверить на пустоту, необходимо рассчитать возраст, если нет 18 лет, вывести ошибку. Кол-во символов должно быть ровно 4
// Если есть ошибка, у поле появляется красная граница и выводится текст ошибки
// При отсутствии ошибок должна выводится сообщение 

let form = document.forms.form;
let name = form.name;
let year = form.year;

let date = new Date();

let nameErrorTxt = document.querySelector('#nameError');
let yearErrorTxt = document.querySelector('#yearError');

form.addEventListener('submit',()=>{
    event.preventDefault();
    nameErrorTxt.innerHTML = '';
    yearErrorTxt.innerHTML = '';
    let errorMessageName = [];
    let errorMessageYear = [];
    let flagName = false;
    let flagYear = false;

    // if(nameErrorTxt.classList.contains('active')){
    //     nameErrorTxt.classList.remove('active');
    // }
    // if(yearErrorTxt.classList.contains('active')){
    //     yearErrorTxt.classList.remove('active');
    // }
    // проверка имени
    if(!name.value){
        flagName = true;
        errorMessageName.push('Поле пустое');
    }else if(name.value.length < 2){
        flagName = true;
        errorMessageName.push('Длина имени меньше 2');
    }
    // проверка года рождения
    // console.log(year.value == 0);
    if(!year.value){
        flagYear = true;
        errorMessageYear.push('Поле года пусто');
    } else if(year.value.length != 4){
        flagYear = true;
        errorMessageYear.push('Год некоректен');
    } else if((date.getFullYear - +year.value) <= 18){
        flagYear = true;
        errorMessageYear.push('если нет 18 лет, вывести ошибку')
    }

    if(flagName){
        nameErrorTxt.innerHTML = errorMessageName;
        nameErrorTxt.classList.add('active');
    } else {
        nameErrorTxt.classList.remove('active');
    }

    if(flagYear){
        yearErrorTxt.innerHTML = errorMessageYear;
        yearErrorTxt.classList.add('active');
    } else {
        yearErrorTxt.classList.remove('active');
    }

    if(!flagName && !flagYear){
        alert('Вы достигли вершин успеха в этой форме');
    }
})