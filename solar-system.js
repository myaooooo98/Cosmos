const body = document.body
const universe = document.getElementbyId('universe')
const solarsys = document.getElementbyId('solar-system')

const init = function() {
  body
    .classList.remove('view-2D opening')
    .classList.add('view-3D')
    .delay(2000)
}
