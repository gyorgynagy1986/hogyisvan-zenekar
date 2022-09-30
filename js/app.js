//const  hideAlert = () => {
//  const el = document.querySelector('.alert');
//  if(el) el.parentElement.removeChild(el);
//};
//  
//  
//  
//const showAlert = () => {
//
//  const markup = `<div class="alert"><br>Hello</div>`
//  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
//
//  // window.setTimeout( hideAlert, 3000);
//};
// 
//
// window.setTimeout(showAlert, 3000);


//const alertContainer = document.querySelector('.alert-container');
//const removeClass = document.querySelector('.modal');
//const btnClost = document.querySelector('.close-modal');
//const overlay = document.querySelector('.overlay');
//
//
//  
// const showAlert = () => {
//   alertContainer.classList.remove('hidden'); 
//   removeClass.classList.remove('hidden'); 
//   overlay.classList.remove('hidden'); 
// };
//
// window.setTimeout(showAlert, 0);
//
// 
// btnClost.addEventListener('click', ()=> {
//   removeClass.classList.add('hidden'); 
//   overlay.classList.add('hidden'); 
//   alertContainer.classList.add('hidden'); 
// })
//
const hambika = document.getElementById('mobile-menu');

hambika.addEventListener('click', () => {

    if (document.querySelector('.header-ul').style.opacity = "0") {
        document.querySelector('.header-ul').style.opacity = "1";
        document.querySelector('.header-ul').style.marginTop = "0px";
        document.querySelector('.material-symbols-outlined').style.display = "none";
      }

});



const loader = document.getElementById('preloader');

window.addEventListener('load', function(load) {
  window.removeEventListener('load', load, false);               
  setTimeout(function(){loader.style.display = 'none'},3000);

},false);



document.addEventListener("mousemove" , parallax);
function parallax(e) {

  this.querySelectorAll('.move').forEach(mouse => {

  const speed = 5;

  const x = (window.innerHeight - e.pageX*speed) / 200 
  const y = (window.innerWidth - e.pageY*speed) / 200

  mouse.style.transform = `translateX(${x}px) translateY(${y}px)`

})

}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: false,

  // If we need paginatio

  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows

 
});


//SCROLL EFFECT

const sr = ScrollReveal({
  origin: 'top',
  distance: '10px',
  duration: 3000,
  delay: 150,
  //reset: true
})

// sr.reveal(`.header `, {distance: '0px', origin: 'right', duration: 500, delay: 300,} )
sr.reveal(`.wrapper `, {distance: '40px', origin: 'top', duration: 2000, delay: 1000,} )
sr.reveal(`.arrow `, {distance: '240px', origin: 'left', duration: 2000, delay: 450,} ) 
sr.reveal(`.contact-container `, {distance: '240px', origin: 'top', duration: 2000, delay: 450,} )
sr.reveal(`.photos-text `, {distance: '24px', origin: 'top', duration: 2000, delay: 200,} ) 



