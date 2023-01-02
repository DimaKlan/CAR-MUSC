const menuIcon = document.querySelector('.menu__icon');
const menuHeader = document.querySelector('.header__menu');

if (menuIcon) {
    menuIcon.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
    });
};


const menuLinks = document.querySelectorAll('.header__link[data-goto]');

if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(menuIcon.classList.contains('_active')){
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');
                menuHeader.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    };

};


let preLoader = document.getElementById('preloader');

document.body.onload = function () {

  setTimeout(function() {
    if( !preLoader.classList.contains('done') )
    {
      preLoader.classList.add('done')
    }
  }, 3000);

}

new Swiper('.slider-swiper', {

    loop: true,

    slidesPerView:3,

    spaceBetween: 24,

    breakpoints: {
        320: {
          slidesPerView:1,
        },
        1053: {
          slidesPerView:2,
        },
        1489: {
          slidesPerView:3,
      },
    },

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

new Swiper('.advantages__swiper', {

  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  effect: "cube",

  navigation: {
    nextEl: '.next__new',
    prevEl: '.prev__new',
  },

});

new Swiper('.advantages2__swiper', {

  centeredSlides: true,
  spaceBetween: 40,
  loop: true,

  navigation: {
    nextEl: '.next2__new',
    prevEl: '.prev2__new',
  },

});