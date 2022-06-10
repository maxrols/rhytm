const menu = () => {

    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu');
    const menuList = document.querySelector('.menu__list');
    const menuLinks = document.querySelectorAll('.menu__link');
    const burger = document.querySelector('.burger');
    const closeBtn = document.querySelector('.close-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.background = "rgba(255, 255, 255, 0.9)";
            menu.style.marginLeft = "auto";
        } else {
            header.style.background = "";
            menu.style.marginLeft = "";
        }
    });

    burger.addEventListener('click', () => {
        menuList.style.transform = "translateX(0)";
    });

    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menuList.style.transform = "translateX(100%)";
        });
    });

    closeBtn.addEventListener('click', () => {
        menuList.style.transform = "translateX(100%)";
    });
    

};

export default menu;



