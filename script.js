const button = document.querySelector('#enter-button');

function clickLogin(enterButton) {
  enterButton.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log(email, password);
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
// Função para gerar radio buttons (optei por essa forma para não precisar colocar 1 linha a mais no html para cada botão), *precisa de ajustes*

// console.log(document.getElementById('label-rate').innerText)
// function generateRateButton() {
//   for (let index = 1; index <= 10; index += 1) {
//     const rateButton = document.createElement('input');
//     rateButton.type = 'radio';
//     rateButton.name = 'rate-button';
//     rateButton.value = index;
//     rateButton.innerText = index;
//     document.getElementById('label-rate').appendChild(rateButton);
//   }
// }

// generateRateButton();
button.addEventListener('click', clickLogin);
