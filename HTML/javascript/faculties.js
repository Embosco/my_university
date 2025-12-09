const facultyDetails = {
  science: {
    title: "Faculty of Science",
    text: "Our Science Faculty drives innovation through research in Physics, Chemistry, Biology, and Environmental Science. Students engage in hands-on projects and scientific explorations."
  },
  arts: {
    title: "Faculty of Arts",
    text: "Where imagination meets expression. We nurture creativity through language, literature, fine arts, and cultural studies."
  },
  engineering: {
    title: "Faculty of Engineering",
    text: "A hub for innovation and design, building sustainable technologies to solve real-world challenges."
  },
  law: {
    title: "Faculty of Law",
    text: "Equipping students with legal knowledge, ethics, and a commitment to justice in society."
  },
  medicine: {
    title: "Faculty of Medicine",
    text: "Focused on training world-class doctors, advancing research, and providing exceptional healthcare."
  },
  education: {
    title: "Faculty of Education",
    text: "Shaping professional educators to transform lives through teaching and innovation."
  },
  business: {
    title: "Faculty of Business Administration",
    text: "Empowering students with entrepreneurial and leadership skills for the global economy."
  },
  computer: {
    title: "Faculty of Computer Science",
    text: "Pioneering digital transformation through coding, AI, and software innovation."
  },
  social: {
    title: "Faculty of Social Sciences",
    text: "Understanding people, policy, and society through critical and analytical thinking."
  },
  nursing: {
    title: "Faculty of Nursing",
    text: "Dedicated to compassionate service and professional nursing excellence."
  },
  pharmacy: {
    title: "Faculty of Pharmacy",
    text: "Innovating new drugs, therapies, and pharmaceutical sciences to improve healthcare."
  },
  theology: {
    title: "Faculty of Theology",
    text: "Developing spiritual leaders rooted in truth, service, and compassion."
  },
  communication: {
    title: "Faculty of Communication",
    text: "Teaching effective media communication in the age of information and technology."
  },
  agriculture: {
    title: "Faculty of Agriculture",
    text: "Enhancing agricultural practices and sustainability for a better future."
  },
  environmental: {
    title: "Faculty of Environmental Studies",
    text: "Promoting eco-conscious development and sustainability through research and innovation."
  }
};

function openModal(faculty) {
  const modal = document.getElementById('facultyModal');
  document.getElementById('modalTitle').textContent = facultyDetails[faculty].title;
  document.getElementById('modalText').textContent = facultyDetails[faculty].text;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('facultyModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('facultyModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

