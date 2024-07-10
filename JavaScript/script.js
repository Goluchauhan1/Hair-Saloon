let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navToggler = document.querySelector('.navToggler');
let phoneToggler = document.querySelector('.phoneToggler');


searchBtn.onclick = function(){
    searchBox.classList.add('active');
    searchBtn.classList.add('active');
    closeBtn.classList.add('active');
    searchBox.classList.add('active');
    navToggler.classList.add('hide');
    phoneToggler.classList.add('none');
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBox.classList.remove('active');
    navToggler.classList.remove('hide');
    phoneToggler.classList.remove('none');
}


$(document).ready(function () {
    var Slider = $("#Slider");
    var meetTeam = $("#meetTeam");

    Slider.owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        navText: [
            "<i class='fa-solid fa-chevron-left'></i>",
            "<i class='fa-solid fa-chevron-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            600: {
                dots: true,
                nav: true,
            }
        }
    })
    meetTeam.owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            600: {
                items: 2,
                margin:20,
            },
            1000: {
                dots: false,
                margin:20,
                items: 3,
                loop: false,
            }
        }
    })


});


AOS.init();