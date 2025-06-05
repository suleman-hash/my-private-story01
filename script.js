function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "suleman123"; // Match this password
  const error = document.getElementById("error-msg");

  if (input === correctPassword) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    error.textContent = "Wrong password. Try again.";
  }
}
