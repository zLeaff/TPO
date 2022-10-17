let container = document.querySelectorAll('#tratamientos article')
let yScroll

window.addEventListener('scroll', () => {
    yScroll = window.scrollY;

    if (yScroll > 0) {
        subHeader.style.display = "none"
        subHeader.style.transitionDelay = "0.33s ease"
        pageLogo.style.width = "63%"
    } else {
        subHeader.style.display = 'block'
        pageLogo.style.width = "100%"
    }

    if (yScroll > 2500) {
        container[0].style.left = 0
    }
    if (yScroll > 3000) {
        container[1].style.right = 0
    }
    if (yScroll > 3500) {
        container[2].style.left = 0
    }
});