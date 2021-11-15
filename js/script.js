$(".carousel_card_inner").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
});

const hamburger = document.querySelector('.header .header_top .navbar .hamburger');
const mobile_menu = document.querySelector('.header .header_top .navbar ul');
const menu_item = document.querySelectorAll('.header .header_top .navbar ul li a');
const header = document.querySelector('.header.containers');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',() =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }
})

menu_item.forEach(item=>{
    item.addEventListener('click',() =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});