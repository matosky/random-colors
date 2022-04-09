let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('button')


let colors = ['limegreen','sky-blue','red','black']




btn.addEventListener('click', change)


function change(e){
   let random = (Math.floor(Math.random()*colors.length));
   
   wrapper.style.background = colors[random]
}