

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

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});
