// Toggle between login and signup
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const formTitle = document.getElementById("formTitle");

document.getElementById("showSignup").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "block";
  formTitle.textContent = "Create a new account";
});

document.getElementById("showLogin").addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.textContent = "Login to continue";
});

// Handle login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("role").value;

  if (role === "student") {
    alert("Login successful! Redirecting to student dashboard...");
    window.location.href = "student-dashboard.html";
  } else if (role === "staff") {
    alert("Login successful! Redirecting to staff dashboard...");
    window.location.href = "staff-dashboard.html";
  } else {
    alert("Please select your role before logging in.");
  }
});

// Handle signup
signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("signupRole").value;
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;

  if (!role || !name || !email) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Account created successfully for ${name}! You can now login.`);
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  formTitle.textContent = "Login to continue";
});
