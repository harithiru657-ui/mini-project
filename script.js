function signup() {
  alert("Signup successful!");
  window.location.href = "home page.html";
}

function login() {
  window.location.href = "home page.html";
}

function checkScam(answer) {
  let correct = true; 
  let result = document.getElementById("result");

  if (answer === correct) {
    result.innerHTML = " Correct! This is a scam message.";
    result.style.color = "lightgreen";
  } else {
    result.innerHTML = " Wrong! This message is a scam.";
    result.style.color = "red";
  }
}