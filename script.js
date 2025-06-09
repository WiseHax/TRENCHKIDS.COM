console.log("Hello from JavaScript!");
alert("Welcome to TRNCHKDS");


function login() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert("Please enter your username.");
    return;
  }
  if (!localStorage.getItem(username)) {
    alert("User not found. Please register first.");
    return;
  }
  window.location.href = `main.html?user=${encodeURIComponent(username)}`;
}
 
function register() {
  const username = document.getElementById('new-username').value.trim();
  if (!username) {
    alert("Please enter a username.");
    return;
  }
  if (localStorage.getItem(username)) {
    alert("Username already taken, please choose another.");
    return;
  }
  localStorage.setItem(username, JSON.stringify({ username }));
  window.location.href = `main.html?user=${encodeURIComponent(username)}`;
}
