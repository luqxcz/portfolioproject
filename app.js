const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sections = document.querySelectorAll('.control');
const allsections = document.querySelectorAll('.main-content');

function PageTransitions(){
  //Button click active class
  for(let i=o; i<sectBtns.length; i++){
    sectBtn[i].addEventListener('click', () =>{
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].classList= currentBtn[0].className.replace('active-btn', '');
        this.className += 'active-btn'
    })
  }
}

PageTransitions();