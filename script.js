const YOUTUBE_API_KEY = "AIzaSyDHcfBVjH5-b3BDlBgbF9xJgr9mgKikI2Y";

const careerDatabase = [{
        id: 1,
        title: "Data Scientist",
        category: "Technology",
        match: 0,
        description: "Data scientists analyze and interpret complex data to help organizations make informed decisions. They use statistical techniques, machine learning, and data visualization tools.",
        salary: "₹95,000 - ₹1,65,000",
        growth: "31% (Much faster than average)",
        education: "Bachelor's in Data Science, Computer Science, or related field",
        skills: ["Programming", "Data Analysis", "Statistics", "Machine Learning", "Problem Solving", "Critical Thinking"],
        interests: ["Technology", "Analytics", "Research", "Mathematics"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "senior"
    },
    {
        id: 2,
        title: "UX/UI Designer",
        category: "Design",
        match: 0,
        description: "UX/UI designers create engaging and intuitive user experiences for digital products. They conduct user research, design interfaces, and test usability.",
        salary: "₹75,000 - ₹1,30,000",
        growth: "13% (Faster than average)",
        education: "Bachelor's in Design, HCI, or related field",
        skills: ["Design", "Creativity", "User Research", "Prototyping", "Communication", "Problem Solving"],
        interests: ["Design", "Technology", "Psychology", "Arts"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "mid"
    },
    {
        id: 3,
        title: "Software Engineer",
        category: "Technology",
        match: 0,
        description: "Software engineers design, develop, and maintain software applications. They work across various industries to create solutions for specific needs.",
        salary: "₹85,000 - ₹1,60,000",
        growth: "22% (Much faster than average)",
        education: "Bachelor's in Computer Science or related field",
        skills: ["Programming", "Problem Solving", "Algorithms", "Software Development", "Teamwork", "Critical Thinking"],
        interests: ["Technology", "Engineering", "Problem Solving", "Mathematics"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "senior"
    },
    {
        id: 4,
        title: "Digital Marketing Manager",
        category: "Marketing",
        match: 0,
        description: "Digital marketing managers develop and implement online marketing strategies to promote brands, products, and services across digital channels.",
        salary: "₹70,000 - ₹1,30,000",
        growth: "10% (Faster than average)",
        education: "Bachelor's in Marketing, Business, or related field",
        skills: ["Marketing", "Analytics", "Communication", "Strategy", "Creativity", "Leadership"],
        interests: ["Marketing", "Business", "Analytics", "Sales"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "mid"
    },
    {
        id: 5,
        title: "Product Manager",
        category: "Business",
        match: 0,
        description: "Product managers guide the success of a product and lead the cross-functional team that is responsible for improving it.",
        salary: "₹90,000 - ₹1,60,000",
        growth: "10% (Faster than average)",
        education: "Bachelor's in Business, Computer Science, or related field",
        skills: ["Leadership", "Communication", "Strategy", "Problem Solving", "Analytics", "Teamwork"],
        interests: ["Business", "Technology", "Management", "Strategy"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "hybrid"],
        salaryRange: "senior"
    },
    {
        id: 6,
        title: "Healthcare Administrator",
        category: "Healthcare",
        match: 0,
        description: "Healthcare administrators plan, direct, and coordinate medical and health services in various healthcare settings.",
        salary: "₹65,000 - ₹1,50,000",
        growth: "28% (Much faster than average)",
        education: "Bachelor's in Health Administration or related field",
        skills: ["Leadership", "Communication", "Management", "Problem Solving", "Analytics"],
        interests: ["Healthcare", "Management", "Business"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office"],
        salaryRange: "mid"
    },
    {
        id: 7,
        title: "Financial Analyst",
        category: "Finance",
        match: 0,
        description: "Financial analysts provide guidance to businesses and individuals making investment decisions.",
        salary: "₹60,000 - ₹1,20,000",
        growth: "6% (As fast as average)",
        education: "Bachelor's in Finance, Economics, or related field",
        skills: ["Analytics", "Finance", "Problem Solving", "Communication", "Critical Thinking"],
        interests: ["Finance", "Analytics", "Business", "Mathematics"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office"],
        salaryRange: "mid"
    },
    {
        id: 8,
        title: "Cybersecurity Analyst",
        category: "Technology",
        match: 0,
        description: "Cybersecurity analysts protect organizations' computer systems and networks from cyber threats.",
        salary: "₹80,000 - ₹1,40,000",
        growth: "33% (Much faster than average)",
        education: "Bachelor's in Cybersecurity, Computer Science, or related field",
        skills: ["Programming", "Problem Solving", "Analytics", "Critical Thinking", "Communication"],
        interests: ["Technology", "Security", "Problem Solving", "Analytics"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "remote", "hybrid"],
        salaryRange: "senior"
    },
    {
        id: 9,
        title: "Teacher/Educator",
        category: "Education",
        match: 0,
        description: "Teachers educate students in various subjects and grade levels, developing lesson plans and assessing student progress.",
        salary: "₹45,000 - ₹85,000",
        growth: "4% (As fast as average)",
        education: "Bachelor's in Education or related field",
        skills: ["Communication", "Leadership", "Creativity", "Problem Solving", "Patience"],
        interests: ["Education", "Mentoring", "Subject Matter"],
        minEducation: "bachelor",
        experienceLevel: "entry",
        workEnvironment: ["field"],
        salaryRange: "entry"
    },
    {
        id: 10,
        title: "Sales Manager",
        category: "Sales",
        match: 0,
        description: "Sales managers direct organizations' sales teams, setting goals, analyzing data, and developing training programs.",
        salary: "₹70,000 - ₹1,50,000+",
        growth: "5% (As fast as average)",
        education: "Bachelor's in Business, Marketing, or related field",
        skills: ["Leadership", "Communication", "Sales", "Strategy", "Analytics"],
        interests: ["Sales", "Business", "Management", "Communication"],
        minEducation: "bachelor",
        experienceLevel: "mid",
        workEnvironment: ["office", "field"],
        salaryRange: "mid"
    },
    {
        id: 11,
        title: "Filmmaker",
        category: "Media",
        description: "Creates visual stories through films and digital media.",
        salary: "₹30,000 - ₹1,00,000",
        growth: "8%",
        education: "Media or Film Studies",
        skills: ["Creativity", "Storytelling", "Video Editing"],
        interests: ["Creativity", "Arts", "Media"],
        minEducation: "highschool",
        experienceLevel: "entry",
        workEnvironment: ["field"],
        salaryRange: "mid"
    },
    {
        id: 12,
        title: "Video Editor",
        category: "Media",
        description: "Edits and assembles recorded footage into final content.",
        salary: "₹25,000 - ₹80,000",
        growth: "10%",
        education: "Media or Self Learning",
        skills: ["Video Editing", "Creativity"],
        interests: ["Media", "Creativity"],
        minEducation: "highschool",
        experienceLevel: "entry",
        workEnvironment: ["remote"],
        salaryRange: "mid"
    },
    {
        id: 13,
        title: "Web Developer",
        category: "Technology",
        description: "Builds and maintains websites and web applications.",
        salary: "₹40,000 - ₹1,20,000",
        growth: "13%",
        education: "Computer / IT",
        skills: ["HTML", "CSS", "JavaScript"],
        interests: ["Technology", "Problem Solving"],
        minEducation: "diploma",
        experienceLevel: "entry",
        workEnvironment: ["office", "remote"],
        salaryRange: "high"
    },
    {
        id: 14,
        title: "Data Analyst",
        category: "Technology",
        description: "Analyzes data to extract useful insights.",
        salary: "₹45,000 - ₹1,10,000",
        growth: "11%",
        education: "Computer / IT",
        skills: ["Analysis", "Statistics"],
        interests: ["Technology", "Data"],
        minEducation: "diploma",
        experienceLevel: "entry",
        workEnvironment: ["office"],
        salaryRange: "high"
    },
    {
        id: 15,
        title: "Mechanical Engineer",
        category: "Engineering",
        description: "Designs and maintains mechanical systems.",
        salary: "₹35,000 - ₹90,000",
        growth: "7%",
        education: "Mechanical Engineering",
        skills: ["Problem Solving", "CAD"],
        interests: ["Engineering", "Machines"],
        minEducation: "diploma",
        experienceLevel: "entry",
        workEnvironment: ["field", "office"],
        salaryRange: "mid"
    },

    {
  id: 16,
  title: "Electrical Engineer",
  category: "Engineering",
  description: "Electrical Engineers design, develop, and maintain electrical systems such as power generation, transmission, control systems, and electrical equipment. They ensure safe, efficient, and reliable electrical operations in industries and infrastructure projects.",
  salary: "₹40,000 - ₹95,000",
  growth: "8%",
  education: "Electrical Engineering",
  skills: ["Circuit Design", "Problem Solving", "Technical Skills"],
  interests: ["Engineering", "Electricity", "Power Systems"],
  minEducation: "diploma",
  experienceLevel: "entry",
  workEnvironment: ["field", "office"],
  salaryRange: "mid"
},

{
  id: 17,
  title: "Civil Engineer",
  category: "Engineering",
  description: "Civil Engineers plan, design, and supervise the construction of infrastructure projects such as buildings, roads, bridges, and water supply systems. They ensure structures are safe, durable, and cost-effective while following engineering standards.",
  salary: "₹38,000 - ₹1,00,000",
  growth: "6%",
  education: "Civil Engineering",
  skills: ["Structural Design", "Project Management", "Problem Solving"],
  interests: ["Engineering", "Construction", "Infrastructure"],
  minEducation: "diploma",
  experienceLevel: "entry",
  workEnvironment: ["field", "office"],
  salaryRange: "mid"
},

    {
        id: 18,
        title: "CAD Designer",
        category: "Engineering",
        description: "Creates detailed engineering drawings using CAD tools.",
        salary: "₹30,000 - ₹75,000",
        growth: "6%",
        education: "Mechanical / Civil",
        skills: ["CAD", "Design"],
        interests: ["Design", "Engineering"],
        minEducation: "diploma",
        experienceLevel: "entry",
        workEnvironment: ["office"],
        salaryRange: "mid"
    },
    {
        id: 19,
        title: "Graphic Designer",
        category: "Arts",
        description: "Creates visual content for branding and marketing.",
        salary: "₹25,000 - ₹70,000",
        growth: "9%",
        education: "Arts / Design",
        skills: ["Design", "Creativity"],
        interests: ["Arts", "Creativity"],
        minEducation: "highschool",
        experienceLevel: "entry",
        workEnvironment: ["remote", "office"],
        salaryRange: "mid"
    },
    {
        id: 20,
        title: "Accountant",
        category: "Commerce",
        description: "Manages financial records and taxation.",
        salary: "₹40,000 - ₹95,000",
        growth: "8%",
        education: "Commerce",
        skills: ["Accounting", "Analysis"],
        interests: ["Finance", "Business"],
        minEducation: "diploma",
        experienceLevel: "entry",
        workEnvironment: ["office"],
        salaryRange: "high"
    },
];

const courseDatabase = {
  "Mechanical Engineer": [
    "Diploma in Mechanical Engineering",
    "AutoCAD Mechanical",
    "SolidWorks",
    "CNC Programming",
    "Industrial Safety"
  ],

  "Electrical Engineer": [
    "Diploma in Electrical Engineering",
    "Power Systems",
    "PLC & SCADA",
    "Electrical Design",
    "Industrial Automation"
  ],

  "Civil Engineer": [
    "Diploma in Civil Engineering",
    "AutoCAD Civil",
    "Structural Design",
    "Quantity Surveying",
    "Construction Planning"
  ],

  "CAD Designer": [
    "AutoCAD",
    "SolidWorks",
    "Drafting Techniques",
    "Engineering Drawing",
    "3D Modeling"
  ],

  "Software Engineer": [
    "Data Structures & Algorithms",
    "Java Programming",
    "Python Programming",
    "Web Development",
    "Cloud Computing Basics"
  ],

  "Web Developer": [
    "HTML, CSS & JavaScript",
    "Frontend Development",
    "Backend Basics",
    "Git & GitHub",
    "Responsive Design"
  ],

  "Data Scientist": [
    "Python for Data Science",
    "Machine Learning",
    "Statistics",
    "SQL for Data Analysis",
    "Data Visualization"
  ],

  "Data Analyst": [
    "Excel for Data Analysis",
    "SQL",
    "Python Basics",
    "Statistics",
    "Power BI / Tableau"
  ],

  "Cybersecurity Analyst": [
    "Cyber Security Fundamentals",
    "Network Security",
    "Ethical Hacking",
    "Linux Basics",
    "Security Operations"
  ],

  "UX/UI Designer": [
    "UI Design Fundamentals",
    "UX Research",
    "Figma",
    "Design Thinking",
    "User Psychology"
  ],

  "Graphic Designer": [
    "Graphic Design Fundamentals",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Branding",
    "Visual Communication"
  ],

  "Filmmaker": [
    "Film Making Course",
    "Cinematography",
    "Direction & Screenplay",
    "Film Editing",
    "Sound Design"
  ],

  "Video Editor": [
    "Video Editing Basics",
    "Adobe Premiere Pro",
    "After Effects",
    "Color Grading",
    "Motion Graphics"
  ],

  "Digital Marketing Manager": [
    "Digital Marketing",
    "SEO",
    "Social Media Marketing",
    "Google Ads",
    "Content Strategy"
  ],

  "Sales Manager": [
    "Sales Techniques",
    "Customer Relationship Management",
    "Negotiation Skills",
    "Business Communication",
    "Market Analysis"
  ],

  "Product Manager": [
    "Product Management Basics",
    "Agile & Scrum",
    "Business Analysis",
    "UX Fundamentals",
    "Stakeholder Management"
  ],

  "Financial Analyst": [
    "Financial Accounting",
    "Financial Modeling",
    "Excel for Finance",
    "Investment Analysis",
    "Risk Management"
  ],

  "Accountant": [
    "Accounting Fundamentals",
    "Taxation",
    "Tally",
    "GST",
    "Auditing"
  ],

  "Healthcare Administrator": [
    "Healthcare Management",
    "Hospital Administration",
    "Medical Terminology",
    "Health Informatics",
    "Healthcare Operations"
  ],

  "Teacher/Educator": [
    "Teaching Methodologies",
    "Classroom Management",
    "Educational Psychology",
    "Lesson Planning",
    "Assessment Techniques"
  ]
};


// ================= INTERESTS & SKILLS =================
const interests = [
    "Technology", "Healthcare", "Business", "Education", "Arts",
    "Science", "Engineering", "Marketing", "Finance", "Design",
    "Writing", "Research", "Management", "Sales", "Analytics",
    "Psychology", "Mathematics", "Problem Solving", "Creativity", "Strategy"
];

const skills = [
    "Programming", "Data Analysis", "Project Management", "Communication",
    "Problem Solving", "Leadership", "Creativity", "Critical Thinking",
    "Teamwork", "Time Management", "Public Speaking", "Writing",
    "Research", "Design", "Marketing", "Sales", "Customer Service",
    "Analytics", "Strategy", "Technical Skills", "Interpersonal Skills"
];

// ================= DOM ELEMENTS =================
const interestsContainer = document.getElementById('interests-container');
const skillsContainer = document.getElementById('skills-container');
const recommendBtn = document.getElementById('recommend-btn');
const loadingElement = document.getElementById('loading');
const resultsContainer = document.getElementById('results-container');
const careerResults = document.getElementById('career-results');
const compareBtn = document.getElementById('compare-btn');
const comparisonContainer = document.getElementById('comparison-container');
const comparisonTable = document.getElementById('comparison-table');
const saveBtn = document.getElementById('save-btn');

// Step elements
const steps = document.querySelectorAll('.step');
const stepLines = document.querySelectorAll('.step-line');
const stepSections = {
    1: document.getElementById('step-1'),
    2: document.getElementById('step-2'),
    3: document.getElementById('step-3')
};

let currentStep = 1;

// ================= SESSION INFO =================
window.sessionInfo = null;


// ===== TOAST NOTIFICATION SYSTEM =====
function notify(msg) {
  let toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerText = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 1800);
}

const style = document.createElement("style");
style.innerHTML = `
.toast-message {
  position: fixed;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  
  background: rgba(40, 20, 70, 0.85);
  backdrop-filter: blur(6px);

  border: 1px solid rgba(140, 70, 255, 0.6);
  box-shadow: 0 0 12px rgba(140, 70, 255, 0.6),
              0 0 32px rgba(140, 70, 255, 0.3);

  color: #e6d6ff;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.4px;

  z-index: 9999999;
  opacity: 1;
  transition: opacity .35s ease, transform .35s ease;
}

.toast-message.hide {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}
`;
document.head.appendChild(style);


// ================= INIT =================
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    renderTags(interests, interestsContainer, 5);
    renderTags(skills, skillsContainer, 5);
    recommendBtn.addEventListener('click', generateRecommendations);
    compareBtn.addEventListener('click', toggleComparison);
    saveBtn.addEventListener('click', () => {
  generateCareerPDF({
    timestamp: new Date().toISOString(),
    user: {
      name: document.getElementById("name")?.value || "User",
      fieldOfStudy: document.getElementById("fieldOfStudy")?.value,
      salaryExpectation: document.getElementById("salary-expectation")?.value,
      workEnvironment: document.getElementById("work-environment")?.value,
    },
    careers: window.currentResults || []
  });
});
    updateStepIndicator();
    

      // ================= NAVBAR CONTROLS =================

  const homeModal = document.getElementById("home-modal");

document.getElementById("nav-home")?.addEventListener("click", () => {
  homeModal.classList.remove("hidden");
});

document.getElementById("home-cancel")?.addEventListener("click", () => {
  homeModal.classList.add("hidden");
});

document.getElementById("home-confirm")?.addEventListener("click", () => {
  unlockInputs(); // ✅ ensures fields clickable
  window.location.href = "onboarding.html";
});



  document.getElementById("nav-results")?.addEventListener("click", () => {
    if (!window.currentResults) {
      notify("Generate recommendations first");
      return;
    }

    resultsContainer.style.display = "block";
    comparisonContainer.style.display = "none";
    resultsContainer.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("nav-compare")?.addEventListener("click", () => {
    if (!window.currentResults) {
      notify("Generate recommendations first");
      return;
    }

    toggleComparison();
  });

  document.getElementById("nav-session")?.addEventListener("click", () => {
  showSessionInfo();
});



// ===== RESTORE SESSION IF EXISTS =====
// ===== RESTORE SESSION IF EXISTS =====
const saved = localStorage.getItem("careercraft_session");

if (saved) {
  const data = JSON.parse(saved);

  window.sessionInfo = data;
  window.currentResults = data.results || null;

  // ===== restore step 1 =====
  if (data.user) {
    document.getElementById("name").value = data.user.name || "";
    document.getElementById("education").value = data.user.education || "";
    document.getElementById("experience").value = data.user.experience || "";
    document.getElementById("fieldOfStudy").value = data.user.fieldOfStudy || "";
    const fd = document.getElementById("fieldDetails");
    if (fd) fd.value = data.user.fieldDetails || "";
    const ai = document.getElementById("additionalInfo");
    if (ai) ai.value = data.user.additionalInfo || "";

    document.getElementById("work-environment").value = data.user.workEnvironment || "";
    document.getElementById("salary-expectation").value = data.user.salaryExpectation || "";
  }

  // ===== restore interests =====
  if (data.user?.interests) {
    document.querySelectorAll("#interests-container .skill-tag")
      .forEach(tag => {
        if (data.user.interests.includes(tag.textContent)) {
          tag.classList.add("selected");
        }
      });
  }

  // ===== restore skills =====
  if (data.user?.skills) {
    document.querySelectorAll("#skills-container .skill-tag")
      .forEach(tag => {
        if (data.user.skills.includes(tag.textContent)) {
          tag.classList.add("selected");
        }
      });
  }

  // ===== restore results =====
  if (data.results?.length) {
    resultsContainer.style.display = "block";
    displayResults(data.results);
  }
}
// ===== AUTO SAVE INPUT CHANGES =====
document.querySelectorAll(
  "#name, #education, #experience, #fieldOfStudy, #fieldDetails, #additionalInfo, #work-environment, #salary-expectation"
).forEach(el => {
  el?.addEventListener("input", saveDraftSession);
  el?.addEventListener("change", saveDraftSession);
});


}

// ===== AUTO SAVE DRAFT SESSION =====
function saveDraftSession() {
  const draft = {
    user: {
      name: document.getElementById('name')?.value || "",
      education: document.getElementById('education')?.value || "",
      experience: document.getElementById('experience')?.value || "",
      fieldOfStudy: document.getElementById('fieldOfStudy')?.value || "",
      fieldDetails: document.getElementById('fieldDetails')?.value || "",
      additionalInfo: document.getElementById('additionalInfo')?.value || "",
      workEnvironment: document.getElementById('work-environment')?.value || "",
      salaryExpectation: document.getElementById('salary-expectation')?.value || "",

      interests: Array.from(
        document.querySelectorAll('#interests-container .skill-tag.selected')
      ).map(el => el.textContent),

      skills: Array.from(
        document.querySelectorAll('#skills-container .skill-tag.selected')
      ).map(el => el.textContent)
    },
    results: window.currentResults || null,
    savedAt: new Date().toISOString(),
    draft: true
  };

  localStorage.setItem("careercraft_session", JSON.stringify(draft));
}


function showSessionInfo() {
  if (!window.sessionInfo) {
    notify("No active session");
    return;
  }

  const sidebar = document.getElementById("session-sidebar");
  const content = document.getElementById("session-content");

  const isOpen = sidebar.classList.contains("open");

  // ✅ SIMPLE TOGGLE
  sidebar.classList.toggle("open");
  document.body.classList.toggle("session-open");

  if (!isOpen) {
    const u = window.sessionInfo.user || {};

    content.innerHTML = `
      <p><strong>Name:</strong> ${u.name}</p>
      <p><strong>Education:</strong> ${u.education}</p>
      <p><strong>Experience:</strong> ${u.experience}</p>
      <p><strong>Field:</strong> ${u.fieldOfStudy}</p>
      <p><strong>Work Environment:</strong> ${u.workEnvironment}</p>
      <p><strong>Salary Expectation:</strong> ${u.salaryExpectation}</p>
      <p><strong>Interests:</strong> ${u.interests.join(", ")}</p>
      <p><strong>Skills:</strong> ${u.skills.join(", ")}</p>
      <p style="opacity:.6;margin-top:10px;">
        Generated on: ${new Date().toLocaleString("en-GB")}
      </p>
    `;
  }
}


// ================= STEP NAVIGATION =================
function goToStep(step) {
    // Validate current step before moving forward
    if (step > currentStep) {
        if (!validateStep(currentStep)) {
            return;
        }
    }

    // Hide current step
    if (stepSections[currentStep]) {
        stepSections[currentStep].classList.add('hidden');
    }

    // Show new step
    currentStep = step;
    if (stepSections[currentStep]) {
        stepSections[currentStep].classList.remove('hidden');
    }

    // Update step indicator
    updateStepIndicator();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function unlockInputs() {
  document.querySelectorAll("input, textarea").forEach(el => {
    el.disabled = false;
    el.style.pointerEvents = "auto";
  });

  // also ensure overlays aren't blocking clicks
  loadingElement.style.display = "none";
}

function validateStep(step) {
    if (step === 1) {
        const name = document.getElementById('name').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;
        const fieldOfStudy = document.getElementById('fieldOfStudy').value;

        if (!name || !education || !experience || !fieldOfStudy) {
            notify("Please fill all required fields in Personal Information");
            unlockInputs();
            return false;
        }
    } else if (step === 2) {
        const selectedInterests = document.querySelectorAll('#interests-container .skill-tag.selected');
        const selectedSkills = document.querySelectorAll('#skills-container .skill-tag.selected');

        if (selectedInterests.length < 3) {
            notify("Please select at least 3 interests");
            unlockInputs();
            return false;
        }
        if (selectedSkills.length < 3) {
            notify("Please select at least 3 skills");
            unlockInputs();
            return false;
        }
    }
    return true;
}

function updateStepIndicator() {
    steps.forEach((step, index) => {
        const stepNum = index + 1;
        step.classList.remove('active', 'completed');

        if (stepNum === currentStep) {
            step.classList.add('active');
        } else if (stepNum < currentStep) {
            step.classList.add('completed');
        }
    });

    stepLines.forEach((line, index) => {
        if (index < currentStep - 1) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });
}

// ================= TAG RENDER =================
function renderTags(list, container, limit) {
    list.forEach(item => {
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.textContent = item;

        tag.addEventListener('click', () => {
            const selected = container.querySelectorAll('.skill-tag.selected');
            if (selected.length < limit || tag.classList.contains('selected')) {
                tag.classList.toggle('selected');
                saveDraftSession();
            } else {
                notify(`Select maximum ${limit}`);
               setTimeout(unlockInputs, 0);   // ❗ async fix
              return;
            }
        });

        container.appendChild(tag);
    });
}

// ================= MATCH LOGIC =================

const fieldKeywordMap = {
  computer: ["software", "data", "web", "cyber", "ai"],
  mechanical: ["mechanical", "cad", "manufacturing"],
  electrical: ["electrical", "power", "control"],
  civil: ["civil", "structural", "site"],
  media: ["film", "video", "content", "media"],
  arts: ["design", "graphic", "ui", "ux"],
  commerce: ["account", "business", "finance", "marketing"],
  science: ["research", "lab", "data"]
};

function calculateCareerMatch(career, userData) {
    let score = 0;
    let fieldMatched = false;

      // Field of study matching 

if (userData.fieldOfStudy && fieldKeywordMap[userData.fieldOfStudy]) {
    const keywords = fieldKeywordMap[userData.fieldOfStudy];

    for (let i = 0; i < keywords.length; i++) {
        if (
             career.title.toLowerCase().includes(keywords[i]) ||
             career.description.toLowerCase().includes(keywords[i])
            ) {

            score += 40;
            fieldMatched = true;
            break; // ⭐ STOP after first match
        }
    }
}

 userData.skills.forEach(skill => {
        if (career.skills.includes(skill)) score += 3;
    });

    userData.interests.forEach(interest => {
        if (career.interests.includes(interest)) score += 4;
    });

    if (!fieldMatched) {
    score -= 10;
    } 
    return Math.max(0, Math.min(100, score));
    }

// ================= IMPROVED SCORING ENGINE (S2 + W2 + PERSONAL-FIRST) =================

function calculateCareerMatch(career, user) {
  let score = 0;

  // FIELD OF STUDY BOOST (max 40)
  if (user.fieldOfStudy && fieldKeywordMap[user.fieldOfStudy]) {
    const keywords = fieldKeywordMap[user.fieldOfStudy];
    for (let i = 0; i < keywords.length; i++) {
      if (
        career.title.toLowerCase().includes(keywords[i]) ||
        career.description.toLowerCase().includes(keywords[i])
      ) {
        score += 40;
        break;
      }
    }
  }

  // INTERESTS MATCH (max ~20)
  user.interests.forEach(interest => {
    if (career.interests?.includes(interest)) score += 4;
  });

  // SKILLS MATCH (max ~15)
  user.skills.forEach(skill => {
    if (career.skills?.includes(skill)) score += 3;
  });

  // ================= FEASIBILITY PENALTIES =================

  // EDUCATION mismatch
  if (career.minEducation && user.education) {
    const eduOrder = ["highschool", "diploma", "associate", "bachelor", "master", "phd"];
    const userIndex = eduOrder.indexOf(user.education);
    const reqIndex = eduOrder.indexOf(career.minEducation);
    if (userIndex < reqIndex) score -= 10;
  }

  // EXPERIENCE mismatch
  const expNum = Number(user.experience || 0);
  if (career.experienceLevel === "mid" && expNum < 3) score -= 8;
  if (career.experienceLevel === "senior" && expNum < 5) score -= 8;

  // SALARY mismatch (user wants more than role typically offers)
  if (user.salaryExpectation && career.salaryRange) {
    const order = ["entry", "mid", "senior", "executive"];
    const userIdx = order.indexOf(user.salaryExpectation);
    const roleIdx = order.indexOf(career.salaryRange);
    if (userIdx > roleIdx) score -= 10;
  }

  // WORK ENV mismatch (remote/hybrid/field)
  if (user.workEnvironment && career.workEnvironment) {
    if (!career.workEnvironment.includes(user.workEnvironment)) {
      score -= 12;
    }
  }

  return Math.max(0, Math.min(100, score));
}


// ================= MAIN RECOMMENDATIONS LOGIC =================

function killLoader() {
  loadingElement.style.display = "none";
}

async function generateRecommendations() {

  const name = document.getElementById('name').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const workEnvironment = document.getElementById('work-environment').value;
  const salaryExpectation = document.getElementById('salary-expectation').value;
  const fieldOfStudy = document.getElementById('fieldOfStudy').value;
  const fieldDetails = document.getElementById('fieldDetails').value;
  const additionalInfo = document.getElementById('additionalInfo').value;

  // Validations like before
 if (!name || !education || !experience || !workEnvironment || !salaryExpectation || !fieldOfStudy) {
  notify("Fill all required fields");
  unlockInputs();
  stepSections[3].classList.remove("hidden"); // 🔹 re-show step
  return;
}

  const selectedInterests = Array.from(
    document.querySelectorAll('#interests-container .skill-tag.selected')
  ).map(el => el.textContent);

  const selectedSkills = Array.from(
    document.querySelectorAll('#skills-container .skill-tag.selected')
  ).map(el => el.textContent);

  if (selectedInterests.length < 3 || selectedSkills.length < 3) {
    notify("Select at least 3 interests and 3 skills");
    unlockInputs();
    stepSections[3].classList.remove("hidden");
    return;
  }

  // UI loading state
  stepSections[3].classList.add("hidden");
   loadingElement.style.display = "block";
  resultsContainer.style.display = "none";
  comparisonContainer.style.display = "none";

  const user = {
    name,
    education,
    experience,
    workEnvironment,
    salaryExpectation,
    fieldOfStudy,
    interests: selectedInterests,
    skills: selectedSkills,
    fieldDetails,
    additionalInfo,
  };

  // SCORE ALL CAREERS
  const scored = careerDatabase.map(c => ({
    ...c,
    match: calculateCareerMatch(c, user)
  }));

  // GET TOP 5 RULE-BASED
  const topCareers = scored.sort((a,b) => b.match - a.match).slice(0, 5);

  // ===== MODE DETECTION =====
function detectAspiration(text) {
  const t = text.toLowerCase();
  const triggers = ["i want to", "i want to be", "i want to become", "my dream", "my goal", "aspire", "esports", "gaming", "stream", "youtube"];
  return triggers.some(x => t.includes(x));
}

function detectFieldInterestConflict(field, interests) {
  const domainMap = {
    computer: "tech",
    mechanical: "engineering",
    electrical: "engineering",
    civil: "engineering",
    commerce: "business",
    arts: "creative",
    media: "creative",
    science: "science"
  };
  const fieldDomain = domainMap[field] || null;
  const interestDomain = interests.some(i => ["Gaming","Film","Music","Esports","Content","Design","Media"].includes(i)) ? "creative" : fieldDomain;
  return fieldDomain && interestDomain && fieldDomain !== interestDomain;
}

const freeText = (fieldDetails + " " + additionalInfo).trim();
const hasAspiration = detectAspiration(freeText);
const hasConflict = detectFieldInterestConflict(fieldOfStudy, selectedInterests);

let mode = "base-context";
if (hasAspiration) mode = "aspiration-context";
else if (freeText && hasConflict) mode = "interest-context";

user.mode = mode;

  let refined = null;
  try {
    refined = await window.careerAI.refine({
      user,
      topCareers,
      fullDatabase: careerDatabase,
    freeTextStrength: (fieldDetails.trim() || additionalInfo.trim()) ? "strong" : "none"
    });
    console.log("AI returned:", refined);
  } catch (err) {
    console.warn("AI refinement failed:", err);
  }

  let finalCareers = topCareers;

if (refined && refined.careers) {
  // Convert AI careers into UI format
  finalCareers = refined.careers.map(c => ({
    id: "ai_" + crypto.randomUUID(),
    title: c.title,
    match: c.match,
    description: c.description,
    salary: c.salary,
    growth: c.growth,
    recommendedCourses: c.recommendedCourses,
    isAI: true
  }));
}

// Sort best first
finalCareers.sort((a,b) => b.match - a.match);

// Render UI (single section)
careerResults.innerHTML = "";
displayResults(finalCareers);

window.currentResults = finalCareers;


// ===== SAVE SESSION =====
localStorage.setItem("careercraft_session", JSON.stringify({
  user,
  results: finalCareers,
  savedAt: new Date().toISOString()
}));

window.sessionInfo = { user, results: finalCareers };


loadingElement.style.display = "none";
resultsContainer.style.display = "block";
currentStep = 4;
updateStepIndicator();
resultsContainer.scrollIntoView({ behavior: 'smooth' });


// ===== PATCH C END =====


 function displayCareerSection(title, careers) {
  const section = document.createElement("div");
  section.className = "career-section";

  const header = document.createElement("h3");
  header.className = "career-section-title";
  header.textContent = title;
  section.appendChild(header);

  careers.forEach((career, index) => {
    const card = document.createElement("div");
    card.className = "career-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="career-title">${career.title}</div>
      <div class="career-match">${career.match ?? 0}% Match</div>
      <div class="career-description">${career.description ?? ""}</div>
      <button class="btn btn-outline view-course-btn"
        onclick="showCourses('${career.id}', '${career.title}')">
        View Courses
      </button>
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" style="width: 0%"></div>
        </div>
      </div>
    `;

    section.appendChild(card);

    setTimeout(() => {
      card.querySelector('.progress-fill').style.width = `${career.match ?? 0}%`;
    }, 100 + index * 100);
  });

  careerResults.appendChild(section);
}


  loadingElement.style.display = "none";
  resultsContainer.style.display = "block";
  currentStep = 4;
  updateStepIndicator();
  resultsContainer.scrollIntoView({ behavior: 'smooth' });
}


// ================= DISPLAY =================
// ================= DISPLAY RESULTS (AI + DB SUPPORT) =================

function displayResults(careers) {
  careerResults.innerHTML = "";

  if (!careers || !careers.length) {
    careerResults.innerHTML = `<p style="color: var(--text-secondary); text-align: center;">No matching careers found.</p>`;
    return;
  }

  careers.forEach((career, index) => {
    const card = document.createElement("div");
    card.className = "career-card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <div class="career-title">${career.title}</div>
      <div class="career-match">${career.match}% Match</div>
      <div class="career-description">${career.description}</div>
      <button class="btn btn-outline view-course-btn"
        onclick="showCourses('${career.id}', '${career.title}')">
        View Courses
      </button>
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" style="width: 0%"></div>
        </div>
      </div>
    `;

    careerResults.appendChild(card);

    setTimeout(() => {
      card.querySelector('.progress-fill').style.width = `${career.match}%`;
    }, 100 + index * 100);
  });
}


// ================= COMPARISON =================

function toggleComparison() {
  if (!window.currentResults) {
    notify("Generate recommendations first");
    unlockInputs();
    return;
  }

  if (comparisonContainer.style.display === "block") {
    comparisonContainer.style.display = "none";
    return;
  }

  comparisonTable.innerHTML = `
    <thead>
      <tr>
        <th>Career</th>
        <th>Match</th>
        <th>Salary</th>
        <th>Growth</th>
      </tr>
    </thead>
    <tbody>
      ${window.currentResults.map(c => `
        <tr>
          <td>${c.title}</td>
          <td>${c.match}%</td>
          <td>${c.salary ?? "Varies"}</td>
          <td>${c.growth ?? "Unknown"}</td>
        </tr>
      `).join("")}
    </tbody>
  `;

  comparisonContainer.style.display = "block";
  comparisonContainer.scrollIntoView({ behavior: 'smooth' });
}

// ================= SAVE =================
// ================= SAVE RESULTS =================


function safeText(value) {
  if (!value) return "N/A";
  if (Array.isArray(value)) return value.join(", ");

  return String(value)
    .replace(/₹/g, "Rs.")
    .replace(/&/g, "")
    .trim();
}


function generateCareerPDF(data) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 20;
  const lineHeight = 6;
  const pageHeight = 280;

  function addPageIfNeeded(extra = 10) {
    if (y + extra > pageHeight) {
      doc.addPage();
      y = 20;
    }
  }

  // ===== TITLE =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("CareerCraft – Career Recommendation Report", 20, y);
  y += 10;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(`Generated on: ${new Date(data.timestamp).toDateString()}`, 20, y);
  y += 10;

  // ===== USER DETAILS =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("User Details", 20, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  doc.text(`Name: ${data.user.name || "N/A"}`, 20, y); y += lineHeight;
  doc.text(`Field of Study: ${data.user.fieldOfStudy}`, 20, y); y += lineHeight;
  doc.text(`Salary Expectation: ${data.user.salaryExpectation}`, 20, y); y += lineHeight;
  doc.text(`Work Environment: ${data.user.workEnvironment}`, 20, y); y += 10;

  // ===== CAREER RESULTS =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Recommended Careers", 20, y);
  y += 10;

  data.careers.forEach((career, index) => {
    addPageIfNeeded(40);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`${index + 1}. ${career.title} (${career.match}% match)`, 20, y);
    y += lineHeight;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(`Salary: ${safeText(career.salary)}`, 22, y); y += lineHeight;
    doc.text(`Growth: ${career.growth || "N/A"}`, 22, y); y += lineHeight;

    // Description (wrapped properly)
    const descLines = doc.splitTextToSize(
      career.description || "",
      165
    );
    doc.text(descLines, 22, y);
    y += descLines.length * lineHeight;

    // Courses
    if (career.recommendedCourses?.length) {
      y += 4;
      doc.text("Recommended Courses:", 22, y);
      y += lineHeight;

      career.recommendedCourses.forEach(course => {
        addPageIfNeeded(10);
        doc.text(`• ${course}`, 26, y);
        y += lineHeight;
      });
    }

    y += 6;
  });

  doc.save("CareerCraft_Career_Report.pdf");
}




document.getElementById("change-career-btn").addEventListener("click", function () {
  resultsContainer.style.display = "none";
  comparisonContainer.style.display = "none";

  // re-show wizard from start
  Object.values(stepSections).forEach(step => step.classList.add('hidden'));
  stepSections[1].classList.remove('hidden');

  currentStep = 1;
  updateStepIndicator();

  window.scrollTo({ top: 0, behavior: "smooth" });
});


//Show courses

function showCourses(careerId, careerTitle) {
  const courseSection = document.getElementById("course-section");
  const courseResults = document.getElementById("course-results");
  courseResults.innerHTML = "";

  // Find matching role from current results
  const role = window.currentResults.find(r => r.id === careerId);

  let courses = [];

if (role?.recommendedCourses?.length) {
  courses = role.recommendedCourses.slice(0,5);
} else if (courseDatabase[careerTitle]) {
  courses = courseDatabase[careerTitle].slice(0,5);
}

  if (!courses.length) {
    courseResults.innerHTML = `<p>No courses available.</p>`;
  } else {
    courseResults.innerHTML = `
      <h3 style="margin-bottom: 1rem;">Courses for ${careerTitle}</h3>
      <div class="course-grid">
        ${courses.map(course => `
          <div class="course-card" onclick="showVideos('${course}')">
            <div class="course-title">${course}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  courseSection.classList.remove("hidden");
  courseSection.scrollIntoView({ behavior: "smooth" });
}

///


async function fetchYouTubeVideos(courseName) {
  const query = encodeURIComponent(courseName + " full course");
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=3&q=${query}&key=${YOUTUBE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("YouTube API Error:", error);
    return [];
  }
}

//show videos

async function showVideos(courseName) {
  const courseResults = document.getElementById("course-results");
  courseResults.innerHTML = `<h3>${courseName} - Video Resources</h3>`;

  const videos = await fetchYouTubeVideos(courseName);

  if (!videos.length) {
    courseResults.innerHTML += "<p>No videos found.</p>";
    return;
  }

  const videoGrid = document.createElement("div");
  videoGrid.className = "course-grid";

  videos.forEach(video => {
    const videoCard = document.createElement("div");
    videoCard.className = "course-card";

    videoCard.innerHTML = `
      <img src="${video.snippet.thumbnails.medium.url}" style="width:100%; border-radius:10px;">
      <p style="margin-top:8px;">${video.snippet.title}</p>
    `;

    videoCard.onclick = () => {
      window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, "_blank");
    };

    videoGrid.appendChild(videoCard);
  });

  courseResults.appendChild(videoGrid);
}

/////

window.addEventListener("load", () => {
  const loader = document.getElementById("app-loader");
  const app = document.querySelector(".app-container");

  if (loader && app) {
    // keep loader visible for 1.5 seconds
    setTimeout(() => {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
        app.style.visibility = "visible"; // show app content
      }, 400);

    }, 1500);
  }
});

// — SAFETY: prevent stuck loader on errors —
window.addEventListener("error", () => {
  loadingElement.style.display = "none";
});

//bird loader
window.addEventListener("load", () => {
    const loader = document.getElementById("app-loader");
    const app = document.querySelector(".app-container");

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            app.style.visibility = "visible";
        }, 400);
    }, 3000); // delay 1.2 sec to show animation
});


// ================= THEME TOGGLE SYSTEM =================

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Ensure dark mode default
  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("cc_theme");
  if (savedTheme === "light") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  toggleBtn?.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("cc_theme", "light");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("cc_theme", "dark");
    }
  });
});
