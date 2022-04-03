const navs = document.querySelectorAll('.nav-item');


function act(which){

    navs.forEach((nav)=>nav.classList.remove('active'));
    document.getElementById(which).classList.add('active');
    
}