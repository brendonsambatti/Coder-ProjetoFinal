var header = document.getElementById('header')
var navigationHeader = document.getElementById('navigation_header')
var content = document.getElementById('content')
var showSidebar = false
var contador = 1

function toggleSidebar () {
  showSidebar = !showSidebar
  if (showSidebar) {
    navigationHeader.style.marginLeft = '-10vw'
    navigationHeader.style.animationName = 'showSidebar'
    content.style.filter = 'blur(2px)'
  } else {
    navigationHeader.style.marginLeft = '-100vw'
    navigationHeader.style.animationName = ''
    content.style.filter = ''
  }
}

function closeSidebar () {
  if (showSidebar) {
    showSidebar = true
    toggleSidebar()
  }
}

window.addEventListener('resize', function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    showSidebar = true
    toggleSidebar()
  }
})

document.getElementById('radio1').checked = true
setInterval(function () {
  nextImage()
}, 8000)

function nextImage () {
  contador++
  if (contador > 3) {
    contador = 1
  }
  document.getElementById('radio' + contador).checked = true
}
