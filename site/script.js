const logo_centro = document.getElementById('logo_centro')
const cortina_direita = document.getElementById('cortina_direita')
const cortina_esquerda = document.getElementById('cortina_esquerda')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    logo_centro.style.marginTop = value * 1.1 + 'px'

    cortina_direita.style.marginLeft = -value *1.2 + 'px'
    cortina_esquerda.style.marginLeft = +value *1.2 + 'px'

})