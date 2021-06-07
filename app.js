const menu = document.querySelector('#mobile-menu')
const menulink = document.querySelector('.navbar__menu')
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active')
    menulink.classList.toggle('active')
})

const nav = document.querySelector('.navbar');

(function () {

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;



    var checkScroll = function () {


        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        }
        else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
        if (direction === 2 && curScroll > 52) {



            nav.classList.add('hide');
            prevDirection = direction;
        }
        else if (direction === 1) {
            nav.classList.remove('hide');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);

})();

