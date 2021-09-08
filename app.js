const plusBtn = document.querySelector('.plus')
const favBtn = document.querySelector('.fav-btn')
const cancelBtn = document.querySelector('.cancel')
const addBtn = document.querySelector('.add')
const mainColor = document.querySelector('.main-clr')
const circle = document.querySelector('.circle')


let openForm = function() {
    const projectForm = document.querySelector('.project-form')
    projectForm.classList.add('show-form')
}
const changeColor = function() {
    
    mainColor.classList.toggle('main-clr-animation')
    circle.classList.toggle('circle-animation')
}
const hideForm = function() {
    const projectForm = document.querySelector('.project-form')
    projectForm.classList.remove('show-form')
    mainColor.classList.remove('main-clr-animation')
    circle.classList.remove('circle-animation')
}
const addNewProject = function() {
    const name = document.getElementById('name')
    const ul = document.querySelector('.project-list ul')
    const li = document.createElement('li')
    const text = name.value
    li.innerHTML = `<i class="fas fa-circle"></i>${text}`  
    li.style.cursor = 'pointer'
    ul.appendChild(li) 
    // coloring the circle 
    const circleLastChild = ul.lastChild
    const circle = circleLastChild.querySelector('i')
    const color = document.getElementById('color')
    colorText = color.value
    circle.style.color = colorText
    name.value = ''
    color.value = 'charcoal'
}
// eventListeners
plusBtn.addEventListener('click',openForm)
cancelBtn.addEventListener('click',hideForm)
addBtn.addEventListener('click',addNewProject)
favBtn.addEventListener('click',changeColor)
