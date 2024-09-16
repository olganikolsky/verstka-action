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

but.addEventListener('click', function () {
  nowpice.style.color = 'grey';
  but.style.background = 'grey';
  priceHigh.style.color = 'grey';
});
