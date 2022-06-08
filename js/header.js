const menu = () => {

    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = "rgba(255, 255, 255, 0.9)";
            menu.style.marginLeft = "auto";
        } else {
            header.style.background = "";
            menu.style.marginLeft = "";
        }
    });

};

export default menu;