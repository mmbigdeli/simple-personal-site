let myNav = document.querySelector('nav');
let menu = document.querySelector('#menu-bars');

function show(){
    myNav.classList.toggle('show');
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
}

function hide(){
    let x = window.innerWidth;
    if(x<=700){
        show();
    }
}