const logo_centro = document.querySelector('.logo_centro')
const cortina_direita = document.querySelector('.cortina_direita')
const cortina_esquerda = document.querySelector('.cortina_esquerda')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    logo_centro.style.marginTop = value * 1.5 + 'px'

    cortina_direita.style.marginLeft = -value + 'px'
    cortina_esquerda.style.marginLeft = +value + 'px'

})