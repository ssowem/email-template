const menuBtn = document.getElementById('menu__button');
const sendBtn = document.getElementById('send__button');
const boxCloseBtn = document.getElementById('close__button');

const mailBoxWrap = document.getElementById('mail-box__wrap');

menuBtn.addEventListener("click", () => {
    const sendBtn = document.getElementById('send__button');
    const sendWrap = document.getElementById('nav__send');
    const navWrap = document.getElementById('mail__nav');
    const menuWrap = document.getElementById('nav__menu');

    const navText = document.querySelectorAll('.txt');
    const menuItem = document.querySelectorAll('.menu__item');
    const itemInner = document.querySelectorAll('.item__inner');

    sendBtn.classList.toggle('button__active');
    sendWrap.classList.toggle('send__active')
    navWrap.classList.toggle('nav__active')
    menuWrap.classList.toggle('menu__active')

    navText.forEach(function(item){
        item.classList.toggle('text__active');
    })

    menuItem.forEach(function(item){
        item.classList.toggle('item__active');

    })

    itemInner.forEach(function(item){
        item.classList.toggle('inner__active')
    })
})

sendBtn.addEventListener("click", () => {
 
    mailBoxWrap.style.display="block";
})

boxCloseBtn.addEventListener("click", () => {
    mailBoxWrap.style.display="none";
})