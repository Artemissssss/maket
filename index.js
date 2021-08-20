'use strict'

const navList = document.querySelector('.nav-list');
const button = document.querySelector('.nav-btn');
const nav = document.querySelector('.site-nav');


button.addEventListener('click', () => {
    if (navList.classList.contains('not-active')) {

        navList.classList.add('active');
        navList.classList.remove('not-active');

        button.classList.add('cross');
        button.classList.remove('burger');
    }
    else if (navList.classList.contains('active')) {
        navList.classList.add('not-active');
        navList.classList.remove('active');

        button.classList.remove('cross');
        button.classList.add('burger');

    }
})
window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled !== 0) {
        nav.style.transition = '1s';
        nav.style.opacity = '0.5';

    } else {
        nav.style.opacity = '1';
    };
};