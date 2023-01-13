$(function () {
    $('.portfolio-slider').slick({
        dots: true,
        arrows: true,
        fade: true,
        speed: 700,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="../css/assets/png/arrowPrev.png" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../css/assets/png/arrowNext.png" alt="arrow-next"></button>',
        responsive: [
            {
                breakpoint: 1210,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    // $('header__menu-btn-inner').on('click', function(e) {
    //     e.preventDefault;
    //     $('.header__menu-btn').toggleClass('.header__menu-btn--active');
    // })
});

let switchTheme = document.querySelector('.header__button-bg');
let themeButton = document.querySelector('.header__themeswitcher-button');
let lightThemeOn = document.querySelector('.light-theme--active');
let lightBody = document.getElementById('body');

// let elementsArray = ['.header__contacts-wa-img', '.header__contacts-tg-img', '.header__menu-item-link', '.title, .about__box-text', '.skills__text', '.skills__tech-text', '.skills__interest-text', '.header__themeswitcher-text', '.about__box-text', '.maksim__info-name', '.maksim__info-profession', '.maksim__info-text', '.subtitle', '.skills__tech-text', '.skills__text', '.skills__interest-item', '.skills__tech-item', '.skills__language-text', '.skills__language-text-speak', '.skills__language-text-write', '.portfolio__task', '.portfolio__title', '.courses__school', '.academy-dark', '.ms-dark', '.vadim-dark'];
let themeSwitch = document.querySelectorAll('.header__contacts-wa-img, .header__contacts-tg-img, .header__menu-item-link, .title, .about__box-text, .skills__text, .skills__tech-text, .skills__interest-text, .header__themeswitcher-text, .about__box-text, .maksim__info-name, .maksim__info-profession, .maksim__info-text, .subtitle, .skills__tech-text, .skills__text, .skills__interest-item, .skills__tech-item, .skills__language-text, .skills__language-text-speak, .skills__language-text-write, .portfolio__task, .portfolio__title, .courses__school, .academy-dark, .ms-dark, .vadim-dark, .header, .bonus-btn, .bonus-btn-svg, .footer__contacts-wa, .footer__contacts-tg, .footer__behance, .footer__phone-link, .footer__mail-link, .courses__desc, .header__menu-btn, .header__menu');


switchTheme.addEventListener('click', () => {
    themeButton.classList.toggle('light-theme--active');
    lightBody.classList.toggle('light-theme');

    themeSwitch.forEach((changeTheme) => {
        changeTheme.classList.toggle('light-theme');
    })
});

let bonusButton = document.querySelector('.bonus-btn');
let memContent = document.querySelector('.bonus__inner');

bonusButton.addEventListener('click', () => {
    memContent.classList.toggle('bonus__inner--active');
});

let switchMenuButton = document.querySelector('.header__menu-btn-inner');
let switchButton = document.querySelector('.header__menu-btn');
let headerMenu = document.querySelector('.header__menu');

switchMenuButton.addEventListener('click', (e) => {
    e.preventDefault();
    switchButton.classList.toggle('header__menu-btn--active');
    headerMenu.classList.toggle('header_menu--active');
})
