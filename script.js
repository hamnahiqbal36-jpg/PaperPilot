
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* =====================================================
   1. MUET DEPARTMENTS AND SEMESTER-WISE SUBJECTS
   Based on the course lists supplied by the user.
   Verify the applicable official curriculum for each batch.
===================================================== */

const departments = [
  {
    name: "Software Engineering",
    degree: "B.E.",
    icon: "⌘",
    description: "Software design, development, testing and project management.",
    semesters: [
      [
        "Applied Calculus",
        "Programming Fundamentals",
        "Introduction to Information and Communication Technologies (ICT)",
        "Functional English",
        "Applied Physics"
      ],
      [
        "Object-Oriented Programming (OOP)",
        "Professional Practices",
        "Linear Algebra and Analytical Geometry",
        "Introduction to Software Engineering",
        "Pakistan Studies",
        "Islamic Studies / Ethics"
      ],
      [
        "Data Structures and Algorithms",
        "Database Systems",
        "Software Requirements Engineering",
        "Software Economics and Management",
        "Operations Research"
      ],
      [
        "Operating Systems",
        "Computer Networks",
        "Software Design and Architecture",
        "Data Warehousing",
        "Communication Skills",
        "Statistics and Probability"
      ],
      [
        "Software Construction and Development",
        "Information Security",
        "Web Engineering",
        "Technical and Business Writing",
        "Agent-Based Intelligent Systems",
        "Human-Computer Interaction (HCI) / relevant elective"
      ],
      [
        "Software Project Management",
        "Discrete Structures",
        "Data Science and Analytics",
        "Mobile Application Development",
        "Software Quality Engineering / relevant elective"
      ],
      [
        "Simulation and Modeling",
        "Software Quality Engineering",
        "Entrepreneurship and Creativity",
        "Thesis / Final Year Project I"
      ],
      [
        "Multimedia Communication",
        "Cloud Computing",
        "Software Re-engineering",
        "Thesis / Final Year Project II"
      ]
    ]
  },

  {
    name: "Computer Systems Engineering",
    degree: "B.E.",
    icon: "⚙",
    description: "Computer hardware, systems, networks and embedded technology.",
    semesters: [
      [
        "Applied Calculus",
        "Introduction to Information and Communication Technologies",
        "Computer Programming",
        "Functional English",
        "Basic Electrical Engineering"
      ],
      [
        "Linear Algebra and Analytical Geometry",
        "Electronic Circuits and Devices",
        "Object-Oriented Programming",
        "Islamic Studies / Ethics",
        "Pakistan Studies"
      ],
      [
        "Digital Logic and Design",
        "Communication Skills",
        "Data Structures and Algorithms",
        "Discrete Structures",
        "Differential Equations",
        "Engineering Economics and Project Management"
      ],
      [
        "Signals and Systems",
        "Fourier Series and Transforms",
        "Database Management Systems",
        "Computer Architecture and Assembly Programming",
        "Operating Systems"
      ],
      [
        "Microprocessors and Interfacing",
        "Computer Networks",
        "Software Engineering",
        "Statistics and Probability",
        "Web Engineering"
      ],
      [
        "Technical and Scientific Writing",
        "System and Network Security",
        "Artificial Intelligence",
        "Embedded Systems",
        "Digital Image Processing",
        "Community Service"
      ],
      [
        "Computer Engineering Depth Elective",
        "Mobile Application and Game Development",
        "Data Science and Analytics",
        "Entrepreneurship",
        "Final Year Project I"
      ],
      [
        "Cloud and Distributed Computing",
        "Multidisciplinary Engineering Elective",
        "Human-Computer Interaction",
        "Organizational Behavior",
        "Final Year Project II"
      ]
    ]
  },

  {
    name: "Electronic Engineering",
    degree: "B.E.",
    icon: "ϟ",
    description: "Electronics, circuits, digital systems and control technologies.",
    semesters: [
      [
        "Functional English",
        "Applied Calculus",
        "Applied Physics",
        "Electrical Circuits",
        "Electronics Workshop",
        "Introduction to Computing"
      ],
      [
        "Linear Algebra and Analytical Geometry",
        "Computer Programming",
        "Basic Electronics",
        "Professional Ethics",
        "Pakistan Studies",
        "Islamic Studies / Ethics"
      ],
      [
        "Differential Equations and Fourier Series",
        "Electronic Circuit Design",
        "Digital Electronics",
        "Measurements and Instrumentation",
        "Communication Skills",
        "Computer-Aided Engineering Design"
      ],
      [
        "Complex Variables and Transforms",
        "Electrical Machines",
        "Probability and Random Signals",
        "Electromagnetic Field Theory",
        "Integrated Electronics",
        "Introduction to Embedded Systems"
      ],
      [
        "Technical and Scientific Writing",
        "Entrepreneurship",
        "Signals and Systems",
        "Power Electronics",
        "Numerical Methods"
      ],
      [
        "Digital Signal Processing",
        "Control Systems",
        "Sociology for Engineers",
        "FPGA-Based Digital Design",
        "Communication Systems",
        "Community Service"
      ],
      [
        "Digital Control System",
        "Engineering Management",
        "Optoelectronics",
        "Artificial Intelligence and Edge Computing",
        "Electronic Engineering Project I"
      ],
      [
        "Industrial Electronics",
        "Robotics and Mechatronic Systems Design",
        "Computer Communication and Networking",
        "Electronic Engineering Project II"
      ]
    ]
  },

  {
    name: "Telecommunication Engineering",
    degree: "B.E.",
    icon: "⌁",
    description: "Communication systems, wireless networks and signal processing.",
    semesters: [
      [
        "Applied Calculus",
        "Applied Physics",
        "Introduction to Computing and Programming",
        "Functional English",
        "Islamic Studies / Ethics",
        "Pakistan Studies"
      ],
      [
        "Basic Electronics",
        "Object-Oriented Programming",
        "Introduction to Simulation",
        "Circuit Analysis",
        "Linear Algebra and Analytical Geometry"
      ],
      [
        "Amplifiers and Oscillators",
        "Digital Logic Design",
        "Differential Equations and Fourier Series",
        "Engineering Management",
        "Communication Skills",
        "Occupational Health and Safety"
      ],
      [
        "Microprocessors and Microcontrollers",
        "Technical Report Writing Skills",
        "Entrepreneurship",
        "Complex Variables and Transforms",
        "Telecommunication Policies and Standards",
        "Professional Ethics"
      ],
      [
        "Communication Systems",
        "Electromagnetics",
        "Probability and Stochastic Processes",
        "Signals and Systems",
        "Numerical Analysis and Computer Applications"
      ],
      [
        "Digital Communication",
        "Computer Communication and Networking",
        "Optoelectronics",
        "Antennas and Wave Propagation",
        "Digital Signal Processing",
        "Community Service"
      ],
      [
        "Microwave Engineering",
        "Fiber Optic Communication Systems",
        "Queueing Theory",
        "Wireless Communications",
        "Telecommunication Studio",
        "Thesis / Project"
      ],
      [
        "Satellite and Radar Communications",
        "Emerging Wireless Technologies and RF Planning",
        "Network Protocols and Architecture",
        "Transmission and Switching Systems",
        "Thesis / Project"
      ]
    ]
  },

  {
    name: "Textile Engineering",
    degree: "B.E.",
    icon: "▦",
    description: "Textile fibres, yarn, fabrics, manufacturing and quality control.",
    semesters: [
      [
        "Introduction to Textile Engineering",
        "Applied Chemistry",
        "Engineering Drawing",
        "Electrical Engineering",
        "Calculus",
        "Islamic Studies / Ethics",
        "Pakistan Studies"
      ],
      [
        "Textile Raw Materials",
        "Textile Mechanics",
        "Electronics Engineering",
        "Differential Equations and Laplace Transform",
        "Functional English",
        "Workshop Practice"
      ],
      [
        "Fibre Science",
        "Yarn Manufacturing – I",
        "Applied Physics",
        "Introduction to Computers and C++ Programming",
        "Textile Engineering Utilities and Services"
      ],
      [
        "Synthetic Fibre Manufacturing",
        "Yarn Manufacturing – II",
        "Fabric Manufacturing – I",
        "Textile Pretreatment",
        "Numerical Analysis and Computer Applications"
      ],
      [
        "Yarn Manufacturing – III",
        "Fabric Manufacturing – II",
        "Textile Dyes and Dyeing",
        "Automation and Control Engineering",
        "Communication Skills"
      ],
      [
        "Yarn Manufacturing – IV",
        "Fabric Design and Structure",
        "Textile Testing and Quality Control",
        "Colour Physics",
        "Environmental Engineering",
        "Statistics and Probability"
      ],
      [
        "Fabric Manufacturing – III",
        "Textile Printing",
        "Textile Marketing and Merchandising",
        "Technical and Scientific Writing",
        "Entrepreneurship",
        "Thesis / Project I"
      ],
      [
        "Yarn Manufacturing – V",
        "Fabric Manufacturing – IV",
        "Textile Finishing",
        "Production Management",
        "Thesis / Project II"
      ]
    ]
  }
];

/* =====================================================
   2. STORAGE AND DEMO RESOURCE DATA
===================================================== */

const defaultResources = [
  {
    id: "demo-1",
    title: "Programming Fundamentals — Sample Notes",
    department: "Software Engineering",
    semester: 1,
    subject: "Programming Fundamentals",
    type: "Notes",
    format: "PDF",
    uploader: "PaperPilot Demo",
    description: "Example resource entry. This is not an actual course PDF.",
    filename: "programming-fundamentals-demo.pdf",
    demo: true
  },
  {
    id: "demo-2",
    title: "OOP — Sample Slides",
    department: "Software Engineering",
    semester: 2,
    subject: "Object-Oriented Programming (OOP)",
    type: "PPT",
    format: "PPTX",
    uploader: "PaperPilot Demo",
    description: "Example presentation entry.",
    filename: "oop-slides-demo.pptx",
    demo: true
  },
  {
    id: "demo-3",
    title: "Computer Networks — Sample Viva Questions",
    department: "Software Engineering",
    semester: 4,
    subject: "Computer Networks",
    type: "Viva Questions",
    format: "PDF",
    uploader: "PaperPilot Demo",
    description: "Example viva resource entry.",
    filename: "computer-networks-viva-demo.pdf",
    demo: true
  }
];

function loadStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

let resources = loadStored("paperpilot_muet_resources", defaultResources);
let drafts = loadStored("paperpilot_muet_drafts", []);

let selectedDepartment = "";
let selectedSemester = 1;
let selectedSubject = "";
let currentFilter = "All";
let currentResource = null;
let previousPage = "subjectPage";
let selectedUploadFile = null;
let toastTimer;

function saveResources() {
  // Browser object URLs are temporary and must not be treated as permanent links.
  const safeResources = resources.map(({ objectUrl, ...resource }) => resource);
  localStorage.setItem("paperpilot_muet_resources", JSON.stringify(safeResources));
}

function saveDrafts() {
  localStorage.setItem("paperpilot_muet_drafts", JSON.stringify(drafts));
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  const toggle = $("#themeToggle");

  document.body.dataset.theme = isDark ? "dark" : "light";
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  toggle.title = `Switch to ${isDark ? "light" : "dark"} theme`;
  toggle.querySelector("span").textContent = isDark ? "☀" : "☾";
  toggle.querySelector(".theme-label").textContent = isDark ? "Light mode" : "Dark mode";
  localStorage.setItem("paperpilot_muet_theme", theme);
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getDepartment(name) {
  return departments.find(department => department.name === name);
}

function getSubjects(departmentName, semester) {
  const department = getDepartment(departmentName);
  return department?.semesters[Number(semester) - 1] || [];
}

function showToast(message, status = "notice") {
  const toast = $("#toast");
  toast.dataset.status = status;
  if (status.startsWith("download-")) {
    const icon = document.createElement("span");
    icon.className = "toast-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = status === "download-complete" ? "✓" : "…";
    const text = document.createElement("span");
    text.textContent = message;
    toast.replaceChildren(icon, text);
  } else {
    toast.textContent = message;
  }
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

function syncStyledSelects() {
  $$(".select-native").forEach(select => select.syncStyledSelect?.());
}

/* =====================================================
   3. DROPDOWNS AND DEPARTMENT CARDS
===================================================== */

function populateDepartmentDropdowns() {
  const options = departments.map(department =>
    `<option value="${escapeHTML(department.name)}">${escapeHTML(department.name)}</option>`
  ).join("");

  $("#departmentSelect").insertAdjacentHTML("beforeend", options);
  $("#libraryDepartment").insertAdjacentHTML("beforeend", options);
  $("#uploadDepartment").insertAdjacentHTML("beforeend", options);
}

function initializeStyledSelects() {
  const fallbackLabels = {
    libraryDepartment: "Department",
    libraryType: "Resource type"
  };

  $$("select").forEach(select => {
    const label = select.closest("label");
    const labelText = label
      ? [...label.childNodes]
        .filter(node => node.nodeType === Node.TEXT_NODE)
        .map(node => node.textContent.trim())
        .join(" ")
        .replace(/\s+/g, " ")
      : "";
    const accessibleName = select.getAttribute("aria-label") ||
      labelText || fallbackLabels[select.id] || "Choose an option";
    const field = document.createElement("div");
    field.className = "select-field";
    const control = document.createElement("div");
    control.className = "select-control";

    if (label) {
      const caption = document.createElement("span");
      caption.className = "select-field-label";
      caption.classList.add(...label.classList);
      caption.textContent = labelText;
      caption.id = `${select.id}-label`;
      label.parentNode.insertBefore(field, label);
      label.remove();
      field.append(caption, control);
    } else {
      select.parentNode.insertBefore(field, select);
      field.append(control);
    }

    control.append(select);
    select.classList.add("select-native");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "select-trigger";
    trigger.setAttribute("role", "combobox");
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", accessibleName);
    trigger.setAttribute("aria-controls", `${select.id}-listbox`);
    if (select.required) trigger.setAttribute("aria-required", "true");

    const value = document.createElement("span");
    value.className = "select-value";
    const chevron = document.createElement("span");
    chevron.className = "select-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "⌄";
    trigger.append(value, chevron);

    const menu = document.createElement("div");
    menu.className = "custom-select-menu";
    menu.id = `${select.id}-listbox`;
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-label", `${accessibleName} options`);
    menu.hidden = true;
    control.append(trigger, menu);

    const error = document.createElement("span");
    error.className = "select-error";
    error.id = `${select.id}-error`;
    error.hidden = true;
    field.append(error);

    const closeMenu = () => {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      control.classList.remove("is-open");
    };

    const focusOption = index => {
      const options = [...menu.querySelectorAll(".custom-select-option:not(:disabled)")];
      if (!options.length) return;
      options[Math.max(0, Math.min(index, options.length - 1))].focus();
    };

    const openMenu = () => {
      if (select.disabled) return;
      menu.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      control.classList.add("is-open");
      const selectedIndex = [...menu.children].findIndex(item => item.getAttribute("aria-selected") === "true");
      focusOption(selectedIndex < 0 ? 0 : selectedIndex);
    };

    const sync = () => {
      const selected = select.selectedOptions[0];
      value.textContent = selected?.textContent || "Choose an option";
      trigger.disabled = select.disabled;
      control.classList.toggle("is-disabled", select.disabled);
      menu.replaceChildren();

      [...select.options].forEach((option, index) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "custom-select-option";
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", String(option.selected));
        item.dataset.optionIndex = String(index);
        item.textContent = option.textContent;
        item.disabled = option.disabled || select.disabled;
        if (option.hidden) item.hidden = true;
        menu.append(item);
      });

      if (select.value && field.classList.contains("is-invalid")) {
        field.classList.remove("is-invalid");
        error.hidden = true;
        trigger.removeAttribute("aria-invalid");
        trigger.removeAttribute("aria-describedby");
      }
    };

    select.syncStyledSelect = sync;
    select.addEventListener("change", sync);
    select.addEventListener("input", sync);
    select.addEventListener("invalid", event => {
      event.preventDefault();
      field.classList.add("is-invalid");
      error.textContent = `${accessibleName} is required.`;
      error.hidden = false;
      trigger.setAttribute("aria-invalid", "true");
      trigger.setAttribute("aria-describedby", error.id);
      trigger.focus();
    });
    select.form?.addEventListener("reset", () => queueMicrotask(sync));

    trigger.addEventListener("click", () => {
      if (menu.hidden) openMenu();
      else closeMenu();
    });
    trigger.addEventListener("keydown", event => {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        openMenu();
      }
    });

    menu.addEventListener("click", event => {
      const item = event.target.closest("[data-option-index]");
      if (!item || item.disabled) return;
      const option = select.options[Number(item.dataset.optionIndex)];
      if (!option) return;
      select.value = option.value;
      select.dispatchEvent(new Event("input", { bubbles: true }));
      select.dispatchEvent(new Event("change", { bubbles: true }));
      closeMenu();
      trigger.focus();
    });

    menu.addEventListener("keydown", event => {
      const options = [...menu.querySelectorAll(".custom-select-option:not(:disabled)")];
      const currentIndex = options.indexOf(document.activeElement);
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        trigger.focus();
      } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        const nextIndex = event.key === "Home" ? 0
          : event.key === "End" ? options.length - 1
            : currentIndex + (event.key === "ArrowDown" ? 1 : -1);
        focusOption(nextIndex);
      }
    });

    sync();
  });

  document.addEventListener("click", event => {
    $$(".select-control.is-open").forEach(control => {
      if (!control.contains(event.target)) {
        control.querySelector(".select-trigger")?.click();
      }
    });
  });
}

function renderDepartmentCards() {
  $("#departmentGrid").innerHTML = departments.map(department => `
    <button class="department-card"
      data-department="${escapeHTML(department.name)}">
      <div class="department-top">
        <span class="department-icon">${department.icon}</span>
        <span class="arrow">↗</span>
      </div>
      <h3>${escapeHTML(department.name)}</h3>
      <p>${escapeHTML(department.degree)} · 8 Semesters</p>
      <p>${escapeHTML(department.description)}</p>
      <p><strong>View Subjects →</strong></p>
    </button>
  `).join("");
}

/* =====================================================
   4. PAGE NAVIGATION
===================================================== */

function showPage(pageId, heading) {
  $$(".page").forEach(page => {
    page.classList.toggle("active", page.id === pageId);
  });

  $$(".nav-link").forEach(link => link.classList.remove("active"));

  const navMap = {
    dashboardPage: '[data-home]',
    browsePage: "#allSubjectsBtn",
    subjectPage: "#resourcesNav",
    libraryPage: "#resourcesNav",
    uploadPage: "#uploadNav"
  };

  const activeLink = document.querySelector(navMap[pageId]);
  if (activeLink) activeLink.classList.add("active");

  $("#topHeading").textContent = heading;
  $("#searchResults").classList.add("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
  syncStyledSelects();
}

function goHome() {
  showPage("dashboardPage", "Dashboard");
}

/* =====================================================
   5. DEPARTMENT → SEMESTER → SUBJECT
===================================================== */

function openDepartment(departmentName) {
  const department = getDepartment(departmentName);
  if (!department) return;

  selectedDepartment = departmentName;
  selectedSemester = 1;

  $("#departmentTitle").textContent = `${department.name} (${department.degree})`;
  $("#departmentDescription").textContent =
    `${department.description} Select a semester to view its complete subject list.`;

  renderSemesters();
  $("#subjectSection").classList.add("hidden");
  showPage("browsePage", department.name);
}

function renderSemesters() {
  $("#semesterGrid").innerHTML = Array.from({ length: 8 }, (_, index) => {
    const semester = index + 1;
    const subjectCount = getSubjects(selectedDepartment, semester).length;

    return `
      <button class="semester-card ${semester === selectedSemester ? "selected" : ""}"
        data-semester="${semester}">
        <span class="semester-number">${String(semester).padStart(2, "0")}</span>
        <span>
          <strong>Semester ${semester}</strong>
          <small>${subjectCount} subjects · View Subjects →</small>
        </span>
      </button>
    `;
  }).join("");
}

function openSemester(semester) {
  selectedSemester = Number(semester);
  renderSemesters();

  const subjects = getSubjects(selectedDepartment, selectedSemester);

  $("#semesterEyebrow").textContent =
    `${selectedDepartment.toUpperCase()} · SEMESTER ${selectedSemester}`;

  $("#subjectHeading").textContent = `Semester ${selectedSemester} Subjects`;

  $("#subjectGrid").innerHTML = subjects.map((subject, index) => {
    const count = resources.filter(resource =>
      resource.department === selectedDepartment &&
      Number(resource.semester) === selectedSemester &&
      resource.subject === subject
    ).length;

    return `
      <button class="subject-card" data-subject="${escapeHTML(subject)}">
        <span class="subject-icon">${index % 2 === 0 ? "▤" : "✦"}</span>
        <span class="subject-info">
          <strong>${escapeHTML(subject)}</strong>
          <small>${count} resource${count === 1 ? "" : "s"} · View Resources →</small>
        </span>
        <span class="arrow">›</span>
      </button>
    `;
  }).join("");

  $("#subjectSection").classList.remove("hidden");
  $("#subjectSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

function openSubject(subject) {
  selectedSubject = subject;
  currentFilter = "All";

  $("#resourceSubjectTitle").textContent = subject;
  $("#subjectBreadcrumb").textContent =
    `${selectedDepartment} · Semester ${selectedSemester}`;

  $("#resourceSubjectDescription").textContent =
    `Study resources for ${subject}. Browse notes, presentations, past papers and viva questions.`;

  $$("#resourceFilters .chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.filter === "All");
  });

  renderSubjectResources();
  showPage("subjectPage", subject);
}

/* =====================================================
   6. RESOURCE LISTS AND FILTERS
===================================================== */

function fileLabel(format = "") {
  return escapeHTML(String(format).toUpperCase() || "FILE");
}

function resourceCard(resource) {
  return `
    <article class="resource-card">
      <span class="resource-file-icon">${fileLabel(resource.format)}</span>
      <div class="resource-info">
        <h3>${escapeHTML(resource.title)}</h3>
        <p>${escapeHTML(resource.department)} · Semester ${resource.semester} ·
          ${escapeHTML(resource.subject)}</p>
        <p>${escapeHTML(resource.type)} · ${escapeHTML(resource.format)} ·
          Uploaded by ${escapeHTML(resource.uploader || "Student")}</p>
      </div>
      <div class="resource-actions">
        <span class="resource-type">${escapeHTML(resource.type)}</span>
        <button class="primary-btn" data-download="${escapeHTML(resource.id)}">
          Download
        </button>
      </div>
    </article>
  `;
}

function emptyState(title, message) {
  return `
    <div class="empty-state">
      <span>▤</span>
      <strong>${escapeHTML(title)}</strong>
      <div class="muted">${escapeHTML(message)}</div>
    </div>
  `;
}

function matchesType(resource, filter) {
  if (filter === "All") return true;
  if (filter === "PPT") {
    return resource.type === "PPT" || resource.type === "Slides";
  }
  return resource.type === filter;
}

function renderSubjectResources() {
  const matches = resources.filter(resource =>
    resource.department === selectedDepartment &&
    Number(resource.semester) === Number(selectedSemester) &&
    resource.subject === selectedSubject &&
    matchesType(resource, currentFilter)
  );

  $("#resourceList").innerHTML = matches.length
    ? matches.map(resourceCard).join("")
    : emptyState(
        "No resources uploaded yet",
        "Be the first to upload study material for this subject."
      );
}

function openLibrary() {
  renderLibrary();
  showPage("libraryPage", "Resource Library");
}

function renderLibrary() {
  const query = $("#librarySearch").value.trim().toLowerCase();
  const department = $("#libraryDepartment").value;
  const type = $("#libraryType").value;

  const matches = resources.filter(resource => {
    const searchable = [
      resource.title,
      resource.subject,
      resource.department,
      resource.description,
      resource.type
    ].join(" ").toLowerCase();

    return (!query || searchable.includes(query)) &&
      (!department || resource.department === department) &&
      (!type || resource.type === type);
  });

  $("#libraryList").innerHTML = matches.length
    ? matches.map(resourceCard).join("")
    : emptyState("No matching resources", "Try changing the search or filters.");
}

/* =====================================================
   7. SEARCH DEPARTMENT AND SUBJECT
===================================================== */

function searchCatalog(event) {
  if (event) event.preventDefault();

  const query = $("#searchInput").value.trim().toLowerCase();
  const chosenDepartment = $("#departmentSelect").value;
  const results = $("#searchResults");

  results.classList.remove("hidden");

  if (!query && !chosenDepartment) {
    results.innerHTML = `
      <p class="muted">Type a department or subject, or select a department from the dropdown.</p>
      <button class="result-row" id="browseAllResult">
        <span><strong>Browse all departments</strong>
          <small>Explore departments, semesters and subjects</small>
        </span>
        <span>→</span>
      </button>
    `;
    return;
  }

  const departmentMatches = departments.filter(department => {
    const text = `${department.name} ${department.description}`.toLowerCase();
    return (!chosenDepartment || department.name === chosenDepartment) &&
      (!query || text.includes(query));
  });

  const subjectMatches = [];

  departments.forEach(department => {
    if (chosenDepartment && department.name !== chosenDepartment) return;

    department.semesters.forEach((subjects, index) => {
      subjects.forEach(subject => {
        if (query && subject.toLowerCase().includes(query)) {
          subjectMatches.push({
            department: department.name,
            semester: index + 1,
            subject
          });
        }
      });
    });
  });

  let html = "";

  departmentMatches.forEach(department => {
    html += `
      <button class="result-row" data-open-department="${escapeHTML(department.name)}">
        <span>
          <strong>${escapeHTML(department.name)}</strong>
          <small>${department.degree} · View semesters and subjects</small>
        </span>
        <span>→</span>
      </button>
    `;
  });

  subjectMatches.slice(0, 30).forEach(item => {
    html += `
      <button class="result-row"
        data-search-subject="${escapeHTML(item.subject)}"
        data-search-department="${escapeHTML(item.department)}"
        data-search-semester="${item.semester}">
        <span>
          <strong>${escapeHTML(item.subject)}</strong>
          <small>${escapeHTML(item.department)} · Semester ${item.semester}</small>
        </span>
        <span>→</span>
      </button>
    `;
  });

  results.innerHTML = html || emptyState(
    "No results found",
    "Try a different spelling or select another department."
  );
}

function handleSearchResult(event) {
  const departmentButton = event.target.closest("[data-open-department]");

  if (departmentButton) {
    openDepartment(departmentButton.dataset.openDepartment);
    return;
  }

  const subjectButton = event.target.closest("[data-search-subject]");

  if (subjectButton) {
    selectedDepartment = subjectButton.dataset.searchDepartment;
    selectedSemester = Number(subjectButton.dataset.searchSemester);

    openDepartment(selectedDepartment);
    openSemester(selectedSemester);
    openSubject(subjectButton.dataset.searchSubject);
    return;
  }

  if (event.target.closest("#browseAllResult")) {
    goHome();
    $("#departmentGrid").scrollIntoView({ behavior: "smooth" });
  }
}

/* =====================================================
   8. UPLOAD FORM AND SEMESTER-SUBJECT DROPDOWNS
===================================================== */

function openUpload(prefill = {}) {
  $("#uploadForm").reset();
  selectedUploadFile = null;
  $("#fileName").textContent = "No file selected";

  $("#uploadSemester").disabled = true;
  $("#uploadSubject").disabled = true;

  $("#uploadSemester").innerHTML =
    '<option value="">Select semester</option>';
  $("#uploadSubject").innerHTML =
    '<option value="">Select subject</option>';

  if (prefill.department) {
    $("#uploadDepartment").value = prefill.department;
    populateUploadSemesters();
  }

  if (prefill.semester) {
    $("#uploadSemester").value = String(prefill.semester);
    populateUploadSubjects();
  }

  if (prefill.subject) {
    $("#uploadSubject").value = prefill.subject;
  }

  showPage("uploadPage", "Upload Resource");
}

function populateUploadSemesters() {
  const departmentName = $("#uploadDepartment").value;

  $("#uploadSemester").disabled = !departmentName;
  $("#uploadSubject").disabled = true;

  $("#uploadSemester").innerHTML =
    '<option value="">Select semester</option>';
  $("#uploadSubject").innerHTML =
    '<option value="">Select subject</option>';

  if (!departmentName) {
    syncStyledSelects();
    return;
  }

  const department = getDepartment(departmentName);

  department.semesters.forEach((subjects, index) => {
    $("#uploadSemester").insertAdjacentHTML(
      "beforeend",
      `<option value="${index + 1}">Semester ${index + 1}</option>`
    );
  });
  syncStyledSelects();
}

function populateUploadSubjects() {
  const departmentName = $("#uploadDepartment").value;
  const semester = Number($("#uploadSemester").value);

  $("#uploadSubject").disabled = !departmentName || !semester;
  $("#uploadSubject").innerHTML =
    '<option value="">Select subject</option>';

  if (!departmentName || !semester) {
    syncStyledSelects();
    return;
  }

  getSubjects(departmentName, semester).forEach(subject => {
    $("#uploadSubject").insertAdjacentHTML(
      "beforeend",
      `<option value="${escapeHTML(subject)}">${escapeHTML(subject)}</option>`
    );
  });
  syncStyledSelects();
}

function collectUploadData() {
  return {
    title: $("#uploadTitle").value.trim(),
    uploader: $("#uploaderName").value.trim(),
    department: $("#uploadDepartment").value,
    semester: Number($("#uploadSemester").value),
    subject: $("#uploadSubject").value,
    type: $("#uploadType").value,
    format: $("#uploadFormat").value,
    academicYear: $("#academicYear").value.trim(),
    description: $("#uploadDescription").value.trim(),
    filename: selectedUploadFile ? selectedUploadFile.name : "",
    savedAt: new Date().toISOString()
  };
}

function saveUploadDraft() {
  const data = collectUploadData();

  if (!data.title && !data.department && !data.description) {
    showToast("Please enter some details before saving your draft.");
    return;
  }

  // Draft metadata is saved locally. The selected file bytes are not saved.
  drafts.push({
    ...data,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`
  });

  saveDrafts();
  showToast("Draft saved in this browser. Complete submission when ready.");
}

function submitUpload(event) {
  event.preventDefault();

  if (!selectedUploadFile) {
    showToast("Please select a resource file.");
    return;
  }

  const data = collectUploadData();
  const extension = selectedUploadFile.name.split(".").pop().toLowerCase();
  const allowed = ["pdf", "ppt", "pptx", "doc", "docx", "txt"];

  if (!allowed.includes(extension)) {
    showToast("Supported formats: PDF, PPT, PPTX, DOC, DOCX and TXT.");
    return;
  }

  if (selectedUploadFile.size > 10 * 1024 * 1024) {
    showToast("For this demo, please select a file smaller than 10 MB.");
    return;
  }

  const objectUrl = URL.createObjectURL(selectedUploadFile);

  const newResource = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    format: extension.toUpperCase(),
    objectUrl,
    demo: false
  };

  resources.unshift(newResource);
  saveResources();

  showToast("Resource added for this browser session.");

  selectedDepartment = data.department;
  selectedSemester = data.semester;
  selectedSubject = data.subject;

  openSubject(data.subject);
}

/* =====================================================
   9. DOWNLOAD SCREEN
===================================================== */

function openDownload(resourceId) {
  currentResource = resources.find(resource => resource.id === resourceId);
  if (!currentResource) return;

  $("#downloadTitle").textContent = currentResource.title;
  $("#downloadDetails").textContent =
    `${currentResource.department} · Semester ${currentResource.semester} · ${currentResource.subject}`;

  $("#downloadFileName").textContent =
    currentResource.filename || "Resource file";

  $("#downloadOriginalFormat").textContent =
    `Original format: ${currentResource.format}`;

  $("#downloadFormat").innerHTML =
    `<option value="original">Original file (${escapeHTML(currentResource.format)})</option>`;

  previousPage = $("#subjectPage").classList.contains("active")
    ? "subjectPage"
    : "libraryPage";

  showPage("downloadPage", "Download Resource");
}

function triggerResourceDownload(url, filename, revokeUrl = false) {
  showToast("Download starting...", "download-starting");
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => showToast("Download complete", "download-complete"), 600);
  if (revokeUrl) setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function downloadCurrentResource() {
  if (!currentResource) return;

  if (currentResource.objectUrl) {
    triggerResourceDownload(
      currentResource.objectUrl,
      currentResource.filename || "resource"
    );
    return;
  }

  // The built-in demo entries contain metadata, not real study documents.
  const demoContent = "PaperPilot demo download.";

  const blob = new Blob([demoContent], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  triggerResourceDownload(url, "PaperPilot-demo-resource.txt", true);
}

/* =====================================================
   10. EVENT LISTENERS
===================================================== */

$$("[data-home]").forEach(button => {
  button.addEventListener("click", goHome);
});

$$("[data-back-home]").forEach(button => {
  button.addEventListener("click", goHome);
});

$("#allSubjectsBtn").addEventListener("click", () => {
  const departmentName = $("#departmentSelect").value;

  if (departmentName) {
    openDepartment(departmentName);
  } else {
    goHome();
    $("#departmentGrid").scrollIntoView({ behavior: "smooth" });
  }
});

$("#resourcesNav").addEventListener("click", openLibrary);
$("#uploadNav").addEventListener("click", () => openUpload());
$("#topUploadBtn").addEventListener("click", () => openUpload());
$("#bannerUploadBtn").addEventListener("click", () => openUpload());

$("#subjectUploadBtn").addEventListener("click", () => {
  openUpload({
    department: selectedDepartment,
    semester: selectedSemester,
    subject: selectedSubject
  });
});

$("#searchForm").addEventListener("submit", searchCatalog);
$("#searchResults").addEventListener("click", handleSearchResult);

$("#departmentGrid").addEventListener("click", event => {
  const card = event.target.closest("[data-department]");
  if (card) openDepartment(card.dataset.department);
});

$("#semesterGrid").addEventListener("click", event => {
  const card = event.target.closest("[data-semester]");
  if (card) openSemester(card.dataset.semester);
});

$("#subjectGrid").addEventListener("click", event => {
  const card = event.target.closest("[data-subject]");
  if (card) openSubject(card.dataset.subject);
});

$("#backToSubjects").addEventListener("click", () => {
  openDepartment(selectedDepartment);
  openSemester(selectedSemester);
});

$("#resourceFilters").addEventListener("click", event => {
  const chip = event.target.closest("[data-filter]");
  if (!chip) return;

  currentFilter = chip.dataset.filter;

  $$("#resourceFilters .chip").forEach(item => {
    item.classList.toggle("active", item === chip);
  });

  renderSubjectResources();
});

document.addEventListener("click", event => {
  const button = event.target.closest("[data-download]");
  if (button) openDownload(button.dataset.download);
});

$("#librarySearch").addEventListener("input", renderLibrary);
$("#libraryDepartment").addEventListener("change", renderLibrary);
$("#libraryType").addEventListener("change", renderLibrary);

$("#uploadDepartment").addEventListener("change", populateUploadSemesters);
$("#uploadSemester").addEventListener("change", populateUploadSubjects);

$("#resourceFile").addEventListener("change", event => {
  selectedUploadFile = event.target.files[0] || null;

  $("#fileName").textContent = selectedUploadFile
    ? `${selectedUploadFile.name} · ${(selectedUploadFile.size / 1024 / 1024).toFixed(2)} MB`
    : "No file selected";

  if (selectedUploadFile) {
    const extension = selectedUploadFile.name.split(".").pop().toUpperCase();
    const formatSelect = $("#uploadFormat");

    const matchingOption = [...formatSelect.options].find(option =>
      option.value === extension
    );

    if (matchingOption) formatSelect.value = extension;
    formatSelect.syncStyledSelect?.();
  }
});

$("#uploadForm").addEventListener("submit", submitUpload);
$("#saveDraftBtn").addEventListener("click", saveUploadDraft);

$("#cancelUpload").addEventListener("click", () => {
  $("#uploadForm").reset();
  selectedUploadFile = null;
  $("#fileName").textContent = "No file selected";
  goHome();
});

$("#uploadBackBtn").addEventListener("click", goHome);

$("#downloadBackBtn").addEventListener("click", () => {
  if (previousPage === "subjectPage") {
    showPage("subjectPage", selectedSubject);
    renderSubjectResources();
  } else {
    openLibrary();
  }
});

$("#downloadAction").addEventListener("click", downloadCurrentResource);

/* =====================================================
   11. INITIALIZE WEBSITE
===================================================== */

const savedTheme = localStorage.getItem("paperpilot_muet_theme") || "light";
applyTheme(savedTheme);
$("#themeToggle").addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

populateDepartmentDropdowns();
renderDepartmentCards();
initializeStyledSelects();
