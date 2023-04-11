

// Select all divs with class of section-container and place in nodelist
const containers = document.querySelectorAll('.section-container')

// when scroll, run function
window.addEventListener('scroll', viewContainer)
viewContainer()


function viewContainer() {
    const bottom = window.innerHeight / 5 * 4

    containers.forEach(container => {
        const top = container.getBoundingClientRect().top

        if (top < bottom) {
            container.classList.add('active')

        } else {
            container.classList.remove('active')
        }
    })
}

