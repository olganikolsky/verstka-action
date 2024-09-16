import './style.css';
let whitebox = document.querySelector('.whitebox');

let but = document.querySelector('.button');
but.addEventListener('click', function () {
  whitebox.insertAdjacentHTML(
    'beforeend',
    `
    <div class="rightbox">
      <p class="head3">Total:</p>
      <div class="row">
        <p class="head4">Gabrielle Essence<br> Eau De Parfum</p>
        <p class="price1">$149.99</p> 
        <p class="tickets">1</p> 
        <p class="price2">$149.99</p> 
      </div>
      <p class="price3">$149.99</p> 
    </div>
  `
  );
});

let nowpice = document.querySelector('.now');
let priceHigh = document.querySelector('.price3');
let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');
let circle3 = document.querySelector('.circle3');

circle1.addEventListener('click', function () {
  nowpice.style.color = 'rgb(61, 129, 104)';
  but.style.background = 'rgb(61, 129, 104)';
  priceHigh.style.color = 'rgb(61, 129, 104)';
});

circle2.addEventListener('click', function () {
  nowpice.style.color = 'rgba(158, 148, 148, 0.882)';
  but.style.background = 'rgba(158, 148, 148, 0.882)';
  priceHigh.style.color = 'rgba(158, 148, 148, 0.882)';
});

circle3.addEventListener('click', function () {
  nowpice.style.color = 'rgb(28, 35, 43)';
  but.style.background = 'rgb(28, 35, 43)';
  priceHigh.style.color = 'rgb(28, 35, 43)';
});
