let current = window.pageYOffset;

const NAVBAR = document.querySelector('header');

window.onscroll = function(){
    let onMoving = window.pageYOffset;
    if (current >= onMoving){
        NAVBAR.style.top = '0';
    }
    else {
        NAVBAR.style.top = '-90px';
    }
    current = onMoving;
}