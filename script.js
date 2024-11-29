const menuBtn = document.getElementById('menu__button');

menuBtn.addEventListener("click", function() {
    const sendBtn = document.getElementById('send__button');
    const sendWrap = document.getElementById('nav__send');
    const navWrap = document.getElementById('mail__nav');

    const navText = document.querySelectorAll('.txt');
    const menuItem = document.querySelectorAll('.menu__item');

    sendBtn.classList.toggle('button__active');
    sendWrap.classList.toggle('send__active')
    navWrap.classList.toggle('nav__active')

    navText.forEach(function(item){
        item.classList.toggle('text__active');
    })

    menuItem.forEach(function(item){
        item.classList.toggle('item__active');
    })
})