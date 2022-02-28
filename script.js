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

button.addEventListener('click', clickLogin);
