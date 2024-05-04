const responsiveMenu = () => {

    const menu = document.querySelector('.responsive-menu')
    const menuButton = document.querySelector('.menu-button')
    const closeButton = document.querySelector('.close-button')

    const toggleMenu = () => {
        if (menu.classList.contains('grid')) {
            menu.classList.add('hidden')
            menu.classList.remove('grid')
        } else {
            menu.classList.remove('hidden')
            menu.classList.add('grid')
        }
    }

    menuButton.addEventListener('click', toggleMenu)
    closeButton.addEventListener('click', toggleMenu)
}

responsiveMenu()