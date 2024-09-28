"use strict"

// Сверстать сайт из 4 блоков, при достижении середины третьего блока вывести небольшое окно с номером телефона

let modal = document.querySelector(".modal");
let third = document.querySelector(".third");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        modal.classList.add("active");
      } else {
        modal.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(third);