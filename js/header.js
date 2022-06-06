const menu = () => {

    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = "rgba(255, 255, 255, 0.9)";
        } else {
            header.style.background = "";
        }
    });

};

export default menu;