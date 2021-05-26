const overlay = document.getElementsByClassName('overlay')[0]
const images = document.getElementsByClassName('post-image')
const closeBtn = document.getElementsByClassName('close')[0]
const collapseL = document.getElementsByClassName('collapse')[0]
const collapseR = document.getElementsByClassName('collapse-2')[0]
const main = document.getElementsByTagName('main')[0]
const tabTitle = document.getElementsByClassName('tab-title')
const comment = document.getElementsByClassName('fa-comment')
const heart = document.getElementsByClassName('fa-heart')
const bookmark = document.getElementsByClassName('fa-bookmark')
const star = document.getElementsByClassName('fa-star')

for (let i = 0; i < images.length; i++) {
    images[i].onclick = () =>{
        titulopost=document.getElementById("BusquedaTitle").textContent="Título del meme"
        overlay.classList.toggle('hidden')
        document.getElementsByTagName('body')[0].classList.toggle('lockScroll')
    }
    
}
closeBtn.onclick = () =>{
    overlay.classList.toggle
    etElementsByTagName('body')[0].classList.toggle('lockScroll')
}

comment.onclick =() =>{
    titulopost=document.getElementById("BusquedaTitle").textContent="Título del meme"
    overlay.classList.toggle('hidden')
    document.getElementsByTagName('body')[0].classList.toggle('lockScroll')
}   




closeBtn.onclick = () =>{
    overlay.classList.toggle('hidden')
    document.getElementsByTagName('body')[0].classList.toggle('lockScroll')
}


function myFunction(x) {
    x.classList.toggle("fas");
  }

query1.onclick = () =>{
    overlay.classList.toggle('hidden')
    document.getElementsByTagName('body')[0].classList.toggle('lockScroll')
}   


function Buscar(x) {
    document.getElementById("section-title-h1").textContent= x
}
collapseL.onclick = () =>{
    if(main.classList.contains('collapseR')){
        main.classList.toggle('collapseBoth')
        main.classList.toggle('collapseR')
    }else if(main.classList.contains('collapseBoth')){
        main.classList.toggle('collapseBoth')
        main.classList.toggle('collapseR')
    }else{
        main.classList.toggle('collapseL')
    }
    for (let i = 0; i < tabTitle.length; i++) {
        tabTitle[i].classList.toggle('hide')
        
    }
    document.getElementById('user-data').classList.toggle('hide');
    document.getElementById('info').classList.toggle('hide');
    document.getElementById('user-profile').classList.toggle('collapsePad');
    document.getElementById('tabs').classList.toggle('collapsePad');
    document.getElementById('logout').classList.toggle('collapsePad');
    document.getElementsByClassName('notif-cant')[0].classList.toggle('hide');
    for (let i = 0; i < document.getElementsByClassName('tab-container').length; i++) {
        document.getElementsByClassName('tab-container')[i].classList.toggle('collapsePad');
        
    }
}