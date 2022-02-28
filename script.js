const button = document.querySelector('#enter-button');
const submitButton = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const mainForm = document.querySelector('#evaluation-form');
const nameInput = document.querySelector('#input-name');
const lastNameInput = document.querySelector('#input-lastname');
const emailInput = document.querySelector('#input-email');
const houseChoice = document.querySelector('#house');

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

function characterCount(event) {
  const counter = document.querySelector('#counter');
  const characterText = event.target.value;
  // console.log (characterText.length);
  const numberCount = 500 - characterText.length;
  counter.innerText = numberCount;
}

function getFamily() {
  const familyChoice = document.querySelectorAll('input[name="family"]');
  let stringToReturn = '';
  for (let i = 0; i < familyChoice.length; i += 1) {
    if (familyChoice[i].checked) {
      stringToReturn = familyChoice[i].value;
      return stringToReturn;
    }
  }
}
function getRates() {
  const rateChoice = document.querySelectorAll('input[name="rate"]');
  let stringToReturn = '';
  for (let i = 0; i < rateChoice.length; i += 1) {
    if (rateChoice[i].checked) {
      stringToReturn = rateChoice[i].value;
      return stringToReturn;
    }
  }
}
function getMaterias() {
  const materiasChoice = document.querySelectorAll('.subject');
  const arrayToBeString = [];
  for (let i = 0; i < materiasChoice.length; i += 1) {
    if (materiasChoice[i].checked) {
      arrayToBeString.push(materiasChoice[i].value);
    }
  }
  return arrayToBeString.join(', ');
}

function makeParagraph(key, value) {
  const newParagraph = document.createElement('p');
  newParagraph.innerHTML = `${key}: ${value}`;
  return newParagraph;
}

function getText() {
  const obs = document.querySelector('#textarea').value;
  console.log(textArea);
  console.log(obs);
  return obs;
}

function getValues() {
  const ArrayFromValues = [];
  ArrayFromValues[0] = `${nameInput.value} ${lastNameInput.value}`;
  ArrayFromValues[1] = emailInput.value;
  ArrayFromValues[2] = houseChoice.value;
  ArrayFromValues[3] = getFamily();
  ArrayFromValues[4] = getMaterias();
  ArrayFromValues[5] = getRates();
  ArrayFromValues[6] = getText();
  return ArrayFromValues;
}

function changeForms() {
  const keyArray = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  const valueArray = getValues();
  mainForm.innerHTML = '';
  console.log(valueArray);
  for (let i = 0; i < keyArray.length; i += 1) {
    mainForm.appendChild(makeParagraph(keyArray[i], valueArray[i]));
  }
}

button.addEventListener('click', clickLogin);
agreementCheckbox.addEventListener('change', enableSubmit);
// Research keyup event: https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event
textArea.addEventListener('keyup', characterCount);
submitButton.addEventListener('click', changeForms);
