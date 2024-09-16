import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

let button = document.querySelector('.button');
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
