// Accordion for FAQs
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    const panel = acc.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Form submission
document.getElementById("admissionFormElement").addEventListener("submit", function(e){
  e.preventDefault();

  // Get values
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const faculty = document.getElementById("faculty").value;
  const course = document.getElementById("course").value;

  // Save in localStorage for dashboard
  localStorage.setItem("studentName", fullname);
  localStorage.setItem("studentEmail", email);
  localStorage.setItem("studentPhone", phone);
  localStorage.setItem("studentFaculty", faculty);
  localStorage.setItem("studentCourse", course);

  // Redirect to dashboard
  window.location.href = "new-dashboard.html";
});
