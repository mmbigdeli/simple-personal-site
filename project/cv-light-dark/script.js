const toggleSwitch = document.querySelector('input[type="checkbox"]');

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('click', switchTheme);





const boxes = document.querySelectorAll('.box');

window.addEventListener('load', checkBoxes);

window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    const triggerBox = window.innerHeight *0.85;


    boxes.forEach(box=>{




        





        const boxTop = box.getBoundingClientRect().top;
        const boxDown = box.getBoundingClientRect().bottom;
        if(boxTop < triggerBox){
            box.classList.add('show');
            
            
        }else{
            box.classList.remove('show');
        }
    })
}



    const counters = document.querySelectorAll('.counter');

    counters.forEach( counter => {
        counter.innerText = '0';
        
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 20;
            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 80);
            }else{
                counter.innerText = target;
            }
        }
        updateCounter();
})


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
