function clickLogin(enterButton) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  console.log(email, password);
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  return enterButton;
}

const button = document.getElementById('forms-login');
button.addEventListener('click', clickLogin());
