const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  const userData = {
    email: email.value,
    password: password.value,
  };

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Всі поля повинні бути заповнені.");
  }

  console.log(userData);
  event.currentTarget.reset();
}
