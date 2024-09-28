'use strict'

// Создать слайдер с собственным дизайном 

let sliderBody = document.querySelector('.slider_body');
let sliderNav = document.querySelector('.slider_nav');
let sliderImages = document.querySelector('.slider_images');
let sliderImageList = Array.from(document.querySelectorAll('.slider_img'));
let sliderDots = Array.from(document.querySelectorAll('.dot'));

// console.log(sliderDots);

sliderBody.addEventListener('click', function(event){
    let target = event.target.closest('.arrow');
    if(!target) return;

    let currentImage = sliderBody.querySelector('.slider_img.active');
    let currentIndex = sliderImageList.indexOf(currentImage);

    currentImage.classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    changeImg(target,currentIndex);

    let newImage = document.querySelector('.slider_img.active');
    let newIndex = sliderImageList.indexOf(newImage);

    scrollSlider(newIndex);
})

function scrollSlider(index){
    sliderImages.style.transform = `translateX(${-25*index}%)`
}

function changeImg(arrow,currentIndex){
    if(arrow.classList.contains('left')){
        if(currentIndex == 0){
            sliderImageList.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        }else{
            sliderImageList[currentIndex-1].classList.add('active');
            sliderDots[currentIndex-1].classList.add('active');
        }
    }else{
        if(currentIndex == sliderImageList.length - 1){
            sliderImageList[0].classList.add('active');
            sliderDots[0].classList.add('active');
        }else{
            sliderImageList[currentIndex+1].classList.add('active');
            sliderDots[currentIndex+1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function(event){
    let targetDot = event.target.closest('.dot');
    if(!targetDot) return;

    if(targetDot.classList.contains('active')) return;

    document.querySelector('.dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider_img.active').classList.remove('active');

    sliderItems[targetDot.dataset.index].classList.add('active');
    scrollSlider(targetDot.dataset.index);
})