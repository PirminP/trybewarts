//email: tryber@teste.com senha:123456
// let button = document.getElementById("forms-login");
// button.addEventListener("click", clickLogin());

function clickLogin(enterButton){
  
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  console.log(email, password);
  if (email.value === "tryber@teste.com" && password.value === "123456") {
    alert("Olá, Tryber!");
  }else{
    alert("Email ou senha inválidos.");
  }
  return enterButton;
}