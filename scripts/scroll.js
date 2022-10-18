let container = document.querySelectorAll('#tratamientos article')
let yScroll

window.addEventListener('scroll', () => {
    yScroll = window.scrollY;

    if (yScroll > 0) {
        subHeader.style.display = "none"
        pageLogo.style.width = "63%"
    } else {
        subHeader.style.display = 'block'
        pageLogo.style.width = "100%"
    }

    if (yScroll > 2400) {
        container[0].style.left = 0
    }
    if (yScroll > 2700) {
        container[1].style.right = 0
    }
    if (yScroll > 3000) {
        container[2].style.left = 0
    }
});