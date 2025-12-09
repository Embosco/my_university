// contact.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop normal form reload

      // Optional: show a short message (you can remove this if you like)
      alert("Message sent successfully! Redirecting...");

      // Optional: clear the form fields
      form.reset();

      // Redirect to thankyou.html
      window.location.href = "thankyou.html";
    });
  } else {
    console.error("Contact form not found — check the ID in HTML.");
  }
});
