// Display student info from localStorage
document.getElementById("studentName").textContent = localStorage.getItem("studentName") || "Student";
document.getElementById("studentEmail").textContent = localStorage.getItem("studentEmail") || "-";
document.getElementById("studentPhone").textContent = localStorage.getItem("studentPhone") || "-";
document.getElementById("studentFaculty").textContent = localStorage.getItem("studentFaculty") || "-";
document.getElementById("studentCourse").textContent = localStorage.getItem("studentCourse") || "-";
