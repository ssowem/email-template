const menuBtn = document.getElementById('menu__button');
const sendBtn = document.getElementById('send__button');
const boxCloseBtn = document.getElementById('close__button');
const toogleSizeBtn = document.getElementById('toggle-size__button')

const mailBoxWrap = document.getElementById('mail-box__wrap');
const mailBox = document.getElementById('mail-box');


window.onload = function () {
    setTimeout(function() {
        document.getElementById('loading-wrap').style.visibility = 'hidden';
        document.getElementById('loading-wrap').style.opacity = 0;
    }, 1000);
}

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
    mailBoxWrap.style.display = "block";
})

// 편지쓰기 모달 닫기 버튼 클릭했을때
boxCloseBtn.addEventListener("click", () => {
    mailBoxWrap.style.display = "none";
    mailBoxWrap.classList.remove('box-wrap__active');
    mailBox.classList.remove('box__active');
    isActive = false;
    modalHandle();
})

// 편지쓰기 모달크기 확대 버튼에 대한 변수(창열었을떄 = 기본크기일때 false);
let isActive = false;

toogleSizeBtn.addEventListener("click", () => {
    isActive = !isActive;
    console.log(isActive)
    if(isActive === true) {
        mailBoxWrap.classList.add('box-wrap__active');
        mailBox.classList.add('box__active');
    } else {
        mailBoxWrap.classList.remove('box-wrap__active');
        mailBox.classList.remove('box__active');
    }
    // mailBoxWrap.classList.toggle('box-wrap__active');
    // mailBox.classList.toggle('box__active');
    modalHandle();
})


function modalHandle() {
    const modalBg = document.getElementById("modal-bg");
    if(isActive === true) {
        modalBg.style.display = "block";
    }else {
        modalBg.style.display = "none";
    }

    // if(mailBoxWrap.classList.contains('box-wrap__active')) {
    //     modalBg.style.display = "block";
    // } else {
    //     modalBg.style.display = "none";
    // }
}