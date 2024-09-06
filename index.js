// Menu Button Control
let menuBtn = document.querySelector('.menu-button');
let navLinks = document.querySelector('.links');
menuBtn.addEventListener('click', () => {
     menuBtn.classList.toggle('menu-button-active');
     navLinks.classList.toggle('links-active');
})
window.addEventListener('scroll', () => {
     menuBtn.classList.remove('menu-button-active');
     navLinks.classList.remove('links-active')
})
// Range Value Control
let rangeValue_1 = document.querySelector('.range-value-1');
let percenTage_1 = document.querySelector('.percentage-1');
let rangeValue_2 = document.querySelector('.range-value-2');
let percenTage_2 = document.querySelector('.percentage-2');
let rangeValue_3 = document.querySelector('.range-value-3');
let percenTage_3 = document.querySelector('.percentage-3');
let rangeValue_4 = document.querySelector('.range-value-4');
let percenTage_4 = document.querySelector('.percentage-4');
percenTage_1.style.width = rangeValue_1.innerText;
percenTage_2.style.width = rangeValue_2.innerText;
percenTage_3.style.width = rangeValue_3.innerText;
percenTage_4.style.width = rangeValue_4.innerText;
