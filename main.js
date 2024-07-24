const bars = document.querySelector('.bars')
const iconDiv = document.querySelector('.header')
const times = document.querySelector('.times')
const body = document.querySelector('.container')
const li = document.querySelectorAll('li')


bars.addEventListener('click', () => {
    iconDiv.classList.add('active');
    iconDiv.style.position = 'absolute';
    body.classList.add('body-active')
    li.forEach( (li , index ) => {
        li.style.transform = `translate(${200 + (index * 20) }px , 0)`
    })
})
times.addEventListener('click', () => {
    iconDiv.classList.remove('active')
    iconDiv.style.position = 'fixed';
    body.classList.remove('body-active')
    li.forEach( (li , index ) => {
        li.style.transform = 'translate(0,0)'
    })
})