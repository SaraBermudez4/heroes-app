const paneles = document.querySelectorAll('.panel')

paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains("active")) {
            panel.classList.remove('active')
        } else {
            removeActiveClass()
            panel.classList.add('active')
        }
    })
});

function removeActiveClass() {
    paneles.forEach(panel => {
        panel.classList.remove('active')
    })
}