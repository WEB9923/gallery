let imgs = document.querySelectorAll('img')
let modal = document.getElementById('modal')
let modalImg = document.getElementById('modalimg')
let closeicon = document.querySelector('.closeicon')

imgs.forEach( (item) => {
    item.addEventListener('click', (img) => {
     modal.classList.add('active')
     modalImg.src = img.target.src
    }) 
})

closeicon.addEventListener('click', () => {
     modal.classList.remove('active')
})

modal.addEventListener('click', (img) => {
     if(img.target != modalImg) {
          modal.classList.remove('active')
     }
})



