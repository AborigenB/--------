let init = () => {


// 1 На каждый из видов кнопок с разными событиями добавить визуальный эффект. В кнопке написать какое событие применено в JS (пример: нажмите, наведите и т.д.)

// Кнопка мыши нажата
document.querySelector('.btn_mousedown').addEventListener('mousedown', function(event){
    this.classList.add('btn_mousedown_active')
})
document.querySelector('.btn_mousedown').addEventListener('mouseup', function(event){
    this.classList.remove('btn_mousedown_active')
})
// Курсор мыши появляется над элементом и уходит с него.
document.querySelector('.btn_mouseover').addEventListener('mouseover',function(event){
    this.classList.add('btn_mouseover_active')
})
document.querySelector('.btn_mouseover').addEventListener('mouseout',function(event){
    this.classList.remove('btn_mouseover_active')
})

// Каждое движение мыши над элементом генерирует это событие
document.querySelector('.btn_mousemove').addEventListener('mouseover',function(event){
    document.querySelector('.rad').classList.add('radial');
})
document.querySelector('.btn_mousemove').addEventListener('mouseout',function(event){
    document.querySelector('.rad').classList.remove('radial');
})
document.querySelector('.btn_mousemove').addEventListener('mousemove',function(event){
    document.querySelector('.radial').style.left = event.offsetX + 'px';
    document.querySelector('.radial').style.top = event.offsetY + 'px';
})

// Click

document.querySelector('.btn_click').addEventListener('click', function(event){
    this.style.background = 'blue';
})
document.querySelector('.btn_dblclick').addEventListener('dblclick', function(event){
    this.style.background = 'blue';
    this.innerHTML = 'Дважды нажато'
})
document.querySelector('.btn_contextmenu').addEventListener('contextmenu', function(event){
    this.style.background = 'blue';
    this.innerHTML = 'Контекстное меню'
})



// 2 Привязать к каждой их трех букв (не зависит от регистра, но зависит от языка) соответствующий цвет фона:
//  r - red,
//  g - green,
//  b - blue
// При отжатии кнопок цвет фона возвращается в изначальное положение

document.addEventListener('keydown',function(event){
    // console.log(event);
    switch(event.code){
        case 'KeyR' :
            document.body.style.background = 'red';
            break;
        case 'KeyG' :
            document.body.style.background = 'green';
            break;
        case 'KeyB' : 
            document.body.style.background = 'blue';
            break;
        default: document.body.style.background = 'white'; break;
    }
})
document.addEventListener('keyup',function(event){
    // console.log(event);
    switch(event.code){
        case 'KeyR' :
            document.body.style.background = 'white';
            break;
        case 'KeyG' :
            document.body.style.background = 'white';
            break;
        case 'KeyB' : 
            document.body.style.background = 'white';
            break;
    }
})
let brick = document.querySelector('.quadroPedro');
let brickStyle = window.getComputedStyle(brick);
// console.log(brickStyle);
document.addEventListener('keydown', function(event){
    switch(event.code){
        case 'KeyW' :
            if(parseInt(brickStyle.marginTop) > 0){
                brick.style.marginTop = parseInt(brickStyle.marginTop) - 10 + 'px';
            }
        break
        case 'KeyA' :
            if(parseInt(brickStyle.marginLeft) > 0){
                brick.style.marginLeft = parseInt(brickStyle.marginLeft) - 10 + 'px';
            }
        break
        case 'KeyS' :
            if(parseInt(brickStyle.marginTop) < window.innerHeight){
                brick.style.marginTop = parseInt(brickStyle.marginTop) + 10 + 'px';
            }
        break
        case 'KeyD' :
            if(parseInt(brickStyle.marginLeft) < window.innerHeight){
                brick.style.marginLeft = parseInt(brickStyle.marginLeft) + 10 + 'px';
            }
        break
    }
})




// 3 Создайте блок 100 на 100. на нажатие каждой кнопки сделать перемещение на 1 px. (W - вверх, D - направо, S - вниз, A - налево)
}

document.addEventListener('DOMContentLoaded',init);