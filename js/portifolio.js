
var menu= document.getElementById('menu')
document.getElementById('btnMenu').addEventListener('click',
function () {
    if (menu.getAttribute('class')=='show') {
       menu.setAttribute('class','menu')
    }else{
        menu.setAttribute('class','show')
    }  
})

/*btn-ver mais section Sobre*/
var sobre=document.getElementById('sobre')
var project_list=document.getElementById('project-list')
let btn_ver_sobre=document.getElementById('btn-ver-sobre')
let btn_ver_project=document.getElementById('btn-ver-project')

btn_ver_sobre.addEventListener('click',verMais)
btn_ver_project.addEventListener('click',verMais)
function verMais() {
  sobre.classList.toggle('hide')
  if (sobre.getAttribute('class')=='hide') { 
    btn_ver_sobre.textContent='ver mais...'
 }else{
     btn_ver_sobre.textContent='ver menos'
 }
 project_list.classList.toggle('hide')
 if (sobre.getAttribute('class')=='hide') { 
    btn_ver_project.textContent='ver mais...'
 }else{
     btn_ver_project.textContent='ver menos'
 }
}

/*Slider animation Photos*/

const slider = document.querySelector('.slider-content');
const projects = document.querySelectorAll('.slider-content li');
const projectWidth = projects[1].offsetWidth;
let cont= 0;
let btn_next=document.getElementById('btn-next')
let btn_prev=document.getElementById('btn-prev')

btn_next.addEventListener('click',nextProject)
btn_prev.addEventListener('click',prevProject)
function showProject(index) { 
    //slide.style.marginLeft=-index*25+'%'
    const next_prev = -index * 100;
    slider.style.transform = `translateX(${next_prev}%)`;

 }
function nextProject() {
    cont++
    if (cont>6) {
        cont=0
    }
    showProject(cont)
}
function prevProject() {
    cont--
    if (cont<0) {
        cont=6
    }
    showProject(cont)
    
}

    setInterval(() => { 
        if(window.innerWidth<992){
        nextProject()
        }else{
            window.location.reload()
        }
    },18000)
    
/*form Filset validation*/
document.getElementById('nome').addEventListener('invalid',function(disableCustom) {
    disableCustom.preventDefault()
    if (!this.validity.valid) {
        alert('Digite seu nome no campo indicado, por favor!')
    }
})
document.getElementById('assunto').addEventListener('invalid',function () {
    this.setCustomValidity('')
    if (!this.validity.valid) {
        this.setCustomValidity('Escreva sobre o assunto que deseja abordar, por favor!')
    }
  })

document.getElementById('isms').addEventListener('invalid',function(s) {
    s.preventDefault
    if (!this.validity.valid) {
    setCustomValidity('iwjiqwj')
    }
})

/*Iluminar btn link of the blank site*/

const btn_link=document.querySelectorAll('.slider-content li figcaption a')
function iluminar() {
    for (let index = 0; index < btn_link.length; index++) {
        btn_link[index].classList.toggle('acender')
        
    }
  
}

setInterval(() => {
    iluminar()
},3000)
