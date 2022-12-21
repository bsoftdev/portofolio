const menu = document.querySelector('header nav#menu')
const navegacao = document.querySelector('header button')
const sec = document.getElementsByTagName('section')[0]

navegacao.addEventListener('click', () =>{
    menu.style.height ='140px'
    menu.style.transition ='.7s all'
    sec.style.marginTop ='200px'
    sec.style.transition='.7s all'
})
menu.addEventListener('click', () =>{
    menu.style.height ='0'
    sec.style.marginTop='10px'
})