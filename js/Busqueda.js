const overlay = document.getElementsByClassName('overlay')[0]
const images = document.getElementsByClassName('post-image')
const closeBtn = document.getElementsByClassName('close')[0]

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

query1.onclick =() =>{
    titulopost=document.getElementById("BusquedaTitle").textContent=document.getElementById('textobusqueda').value
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

function Buscar(x) {
    document.getElementById("section-title-h1").textContent= x
}