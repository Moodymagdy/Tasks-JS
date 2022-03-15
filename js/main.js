let accordion = document.getElementsByClassName('accordion');
let desc = document.getElementsByClassName('desc'); 
console.log(desc);

for(let i=0; i< accordion.length; i++){
    accordion[i].addEventListener('click' , function(){
        this.classList.toggle('active') 
        if (desc[i].style.height == 0){
            desc[i].style.height = desc[i].scrollHeight + 'px'
        }else{
            desc[i].style.height = null;
        }
        })
        
}




let thumbnailImg = document.querySelectorAll('.thumbnail img');
let previewImg = document.querySelector('.preview img');

for (let i=0 ; i< thumbnailImg.length; i++){
    thumbnailImg[i].addEventListener('click' , function(){
        previewImg.src = thumbnailImg[i].src
    })
    
}






let counter = document.getElementsByClassName('counter');



for (let i = 0 ; i < counter.length ; i++){
    let upadateCount = ()=>{
        let target = +counter[i].getAttribute('data-target');
   let c = +counter[i].innerText ;
   let speed = target / 100;
   if (c < target){
       counter[i].innerText = c + speed;
       setTimeout(upadateCount , 5);
   } else{
       c.innerText = target
   }
    }
    upadateCount();
} 







let openBtn = document.getElementById('openBtn');
let addModal = document.getElementById('add-modal');
let backdrop = document.getElementById('backdrop');
let cancelBtn = document.getElementById('cancelBtn');
let inputData = document.querySelectorAll('.modal__content input');
let addBtn = document.querySelector('#addBtn');
let ui = document.getElementById('movie-list');
let entryText = document.getElementById('entry-text');


let movies = [];

let messgaeEmpty = () => {
    if (ui.childElementCount > 0) {
        entryText.classList.add('none')
    } else {
        entryText.classList.remove('none')
    }
}
let openModel = () => {
    addModal.classList.toggle('visible');
    backdrop.classList.toggle('visible');
}

let renderMovie = (title, img, rate) => {

    ui.innerHTML += `
<li class="movie-element">  
  <div class="movie-element__image">
<img src="${img}">
</div>
<div class="movie-element__info">
<h2> ${title} </h2> 
<p> ${rate}/5 starts </p> 
</div>
<button class="btn--danger delete"> Delete </button>
</li>`
}

let addMovie = () => {
    let titleMovie = inputData[0].value;
    let imgMovie = inputData[1].value;
    let rateMovie = inputData[2].value;
    if (titleMovie.trim() == '' || imgMovie.trim() == '' || rateMovie.trim() == '' ||
        +rateMovie < 0 || +rateMovie > 5) {
        alert('pleasea enter Valid Data');
    } else {
        let movieObject = {
            title: titleMovie,
            img: imgMovie,
            rate: rateMovie
        }
        movies.push(movieObject);
        console.log(movies);
        openModel();
        renderMovie(movieObject.title, movieObject.img, movieObject.rate);
        messgaeEmpty();
    }

}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        messgaeEmpty();
    }
})

openBtn.addEventListener('click', openModel);
backdrop.addEventListener('click', openModel);
cancelBtn.addEventListener('click', openModel);
addBtn.addEventListener('click', addMovie);