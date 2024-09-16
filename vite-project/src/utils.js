let button = document.getElementById('button');
button.addEventListener('click', function () {
  document.body.innerHTML += `<div class = "rightbox">
    <p class="head3">Total:</p>
    <div class="row">
    <p class="head4">Gabrielle Essence<br> Eau De Parfum</p>
    <p class="price1">$149.99</p> 
    <p class="tickets">1</p> 
    <p class="price2">$149.99</p> 
  </div>
    <p class="price3">$149.99</p> 
  </div>`;
});
