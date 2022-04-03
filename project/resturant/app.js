//menu toggle
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
})

//slide

const body = document.body;
const slides = document.querySelectorAll('.slide');
const radios = document.querySelectorAll('.my-radio');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

const setActiveSlide = () => {
    slides.forEach((slide)=>slide.classList.remove('active-slide'));
    radios.forEach((radio)=>radio.classList.remove('active-radio'));

    slides[activeSlide].classList.add('active-slide');
    radios[activeSlide].classList.add('active-radio');

}

rightBtn.addEventListener('click', () => {

    activeSlide++;

    if(activeSlide > slides.length - 1){
        activeSlide = 0;
    }

    setActiveSlide();
})


leftBtn.addEventListener('click', () => {
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = slides.length - 1;
    }

    setActiveSlide();
})


function nextSlide(){
    activeSlide++;

    if(activeSlide > slides.length - 1){
        activeSlide = 0;
    }

    setActiveSlide();
}

setInterval(nextSlide, 4000);