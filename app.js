const circle = document.querySelector('#circle')

circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
    circle.classList.add('hover')
    circle.textContent = 'BOO!'
  }
})

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
    circle.classList.remove('hover')
    circle.textContent = 'peek-a'
  }
})