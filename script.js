const button = document.querySelector('#enter-button');
const submitButton = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');

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

// Research !x: Reverse boolean value: https://stackoverflow.com/questions/40306852/what-does-means-in-javascript
function enableSubmit() {
  submitButton.disabled = !agreementCheckbox.checked;
}

button.addEventListener('click', clickLogin);
agreementCheckbox.addEventListener('change', enableSubmit);
