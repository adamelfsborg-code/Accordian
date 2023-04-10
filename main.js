const accordian = document.querySelector('#accordian-1')

accordian.addEventListener('click', (e) => {
    if (!e.target.classList.contains('accordian-panel')) return;
    expandAccordianButton(e.target)
})

const expandAccordianButton = (panel) => {
    const buttons = accordian.querySelectorAll('.accordian-button')
    const buttonsLength = buttons.length;
    for (let i = 0; i < buttonsLength; i++) {
        buttons[i].setAttribute('aria-expanded', false)
    }

    panel.parentElement.setAttribute('aria-expanded', true)
}