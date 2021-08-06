window.addEventListener('DOMContentLoaded', function() {
  
  const close = document.querySelector('.close'),
    menu = document.querySelector('.menu'),
    Hamburger = document.querySelector('.Humburger-link');
  
  close.addEventListener('click',(event)=> {
    menu.style.cssText = 'display: none;';
       });

  Hamburger.addEventListener('click', (event) => {
    menu.style.display = 'block';
  });
  













});