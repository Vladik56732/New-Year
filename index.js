const moroz = document.querySelector('.moroz')
const background = document.querySelector('.background')
const decoration = document.querySelector('.decoration')
const button = document.querySelector('button')
const modalWindow = document.querySelector('.modalWindow')
const clientWidth = document.body.clientWidth

const wishes = [
    'Happiness<br>Love',
    'Healthy<br>Love',
    'Wise<br>Love',
    'Luck<br>Love',
    'Rich<br>Love',
]

function getRandomIndex(maxNumber) {
    return Math.round(Math.random() * maxNumber)
}

button.addEventListener('click', () => {
    modalWindow.style.display = 'flex'

    modalWindow.innerHTML = `   <div class="modalContent"><h1>${
        wishes[getRandomIndex(wishes.length - 1)]
    }</h1></div>`
    setTimeout(() => {
        modalWindow.style.opacity = 1
    }, 500)
})
modalWindow.addEventListener('click', () => {
    modalWindow.style.opacity = 0
    setTimeout(() => {
        modalWindow.style.display = 'none'
    }, 500)
})

document.addEventListener('DOMContentLoaded', () => {
    background.style.transform = 'translateX(50%)'

    setTimeout(() => {
        moroz.style.opacity = '1'
        if (clientWidth > 1200) {
            moroz.style.bottom = '  -120px'
        } else if (clientWidth <= 1200 && clientWidth > 850) {
            moroz.style.bottom = '  -95px'
        } else if (clientWidth <= 850 && clientWidth > 700) {
            moroz.style.bottom = '  85px'
        } else {
            moroz.style.bottom = '  -45px'
        }
    }, 500)

    decoration.style.opacity = '1'
})
