
const portfolioData = {
  eyebrow: "Bamzam.live",
  name: "Hervie Keithrick Mariano",
  role: "Network Administrator | Aspiring Professional | Customer relations enthusiast",
  summary:
    "I am building my path with curiosity, discipline, and a strong interest in learning new skills. This portfolio is a space to highlight my background, achievements, and the projects I am proud of.",
  about: [
    "A computer science graduate that would like to transition to IT and network administration.",
    "+++."
  ],
  details: [
    { label: "Location", value: "Antipolo City, Rizal, PH" },
    { label: "Email", value: "keithrick.mariano@hotmail.com" },
    { label: "Focus", value: "Web Development / Design / Academics / Quality Assurance / Customer relations" }
  ],
  stats: [
    { value: "3+", label: "Major achievements" },
    { value: "2", label: "Education entries" },
    { value: "4", label: "Key skills listed" }
  ],
  education: [
    {
      school: "ICCT Colleges",
      degree: "Bachelor of Science in Information Technology",
      years: "2022 - 2026",
      highlights: [
        "Cisco Networking.",
        "Computer Hardware and Software Maintenance."
      ]
    },
    {
      school: "Antipolo City Senior High School",
      degree: "Humanities and Social Sciences Strand",
      years: "2020 - 2022",
      highlights: [
        "One of the Honor student of 2022 graduates.",
        "Consecutive honor for Grade 11 and 12."
      ]
    }
  ],
  // Edit these four starter entries with your work experience.
  jobHistory: [
    {
      company: "Alorica Philippines",
      role: "Customer Service Representative",
      years: "November 2022 - May 2024",
      summary:
        "Helping customers resolve their issues and providing excellent service."
    },
    {
      company: "Alorica Philippines",
      role: "Quality Analyst",
      years: "June 2024 - January 2025",
      summary:
        "Improving agents' performance and supporting their professional development."
    },
    {
      company: "Movate Inc.",
      role: "Fraud Analyst",
      years: "January 2025 - December 2025",
      summary:
        "Investigating and preventing fraudulent activities to protect the company and its customers."
    },
    {
      company: "ICCT COLLEGES",
      role: "MIS Intern",
      years: "January 2026 - March 2026",
      summary:
        "Keeping the information systems running smoothly and assisting with various technical tasks."
    }
  ],
  achievements: [
    {
      title: "Academic Recognition",
      year: "2022",
      description:
        "Honor student of 2022 graduates under humanities and social sciences."
    },
    {
      title: "Quality Analyst",
      year: "2024",
      description:
        "I became a quality coach handled 40+ agents during my tenure improving their performance and their call center journey."
    },
    {
      title: "Binovation Metal waste detector",
      year: "2025",
      description:
        "A capstone project that addresses the issue of metal waste in the environment and detecting types of metals."
    }
  ],
  skills: [
    "Communication",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "java & python programming",
    "Public Speaking",
    "Customer Service",
    "Root cause analysis",
    "Linux server management",
    "Server management",
    "Docker and Kubernetes"
    
  ],
  projects: [
    {
      title: "Portfolio Website",
      description:
        "A personal website template designed to present my background, strengths, and achievements in a professional but approachable way.",
      linkLabel: "Home",
      link: "#top"
    },
    {
      title: "Binovation Metal waste detector",
      description:
        "A metal waste detector that addresses the issue of metal waste and helping small electronics shops identify and sort different types of metals.",
      linkLabel: "Contact me",
      link: "#contact"
    },
    {
      title: "Home Automation System",
      description:
        "An automated system for controlling and monitoring household appliances and devices.",
      linkLabel: "Contact me",
      link: "#contact"
    },
    {
      title: "Home Server",
      description:
        "A personal server with different components that run a variety of services using docker and kubernetes.",
      linkLabel: "Contact me",
      link: "#contact"
    }
  ],
  contactMessage:
    "You may reach me out using these contact details. I am open to connecting with professionals, students, and anyone interested in joining me on my journey.",
  contacts: [
    {
      label: "Email",
      value: "keithrick.mariano@hotmail.com",
      href: "mailto:keithrick.mariano@hotmail.com"
    },
    {
      label: "Phone or WhatsApp",
      value: "+63 9389734983",
      href: "tel:+639389734983"
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/hervie-keithrick-mariano-2b4a40228/",
      href: "https://www.linkedin.com/in/hervie-keithrick-mariano-2b4a40228/"
    }
  ]
};

const text = (value) => value ?? "";

const escapeHtml = (value) =>
  text(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const sanitizeUrl = (value) => {
  const url = text(value).trim();
  if (
    url.startsWith("#") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    url.startsWith("https://") ||
    url.startsWith("http://")
  ) {
    return url;
  }

  return "#";
};

const themeStorageKey = "portfolio-theme";

const getStoredTheme = () => {
  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch (error) {
    return "";
  }

  return "";
};

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme) => {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = resolvedTheme;

  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) {
    return;
  }

  const isDark = resolvedTheme === "dark";
  const themeLabel = themeToggle.querySelector(".theme-toggle-label");

  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

  if (themeLabel) {
    themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
  }
};

const initializeThemeToggle = () => {
  applyTheme(getPreferredTheme());

  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) {
    return;
  }

  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
      // Ignore storage issues and still let the user switch themes.
    }

    applyTheme(nextTheme);
  });
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text(value);
  }
};

const createListItem = (value) => `<li>${escapeHtml(value)}</li>`;

const render = () => {
  setText("eyebrow", portfolioData.eyebrow);
  setText("name", portfolioData.name);
  setText("role", portfolioData.role);
  setText("summary", portfolioData.summary);
  setText("contactMessage", portfolioData.contactMessage);

  document.getElementById("stats").innerHTML = portfolioData.stats
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
        </article>
      `
    )
    .join("");

  document.getElementById("aboutContent").innerHTML = portfolioData.about
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  document.getElementById("details").innerHTML = portfolioData.details
    .map(
      (item) => `
        <div class="detail-pill">
          <strong>${escapeHtml(item.label)}:</strong> <span>${escapeHtml(item.value)}</span>
        </div>
      `
    )
    .join("");

  document.getElementById("educationList").innerHTML = portfolioData.education
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-top">
            <div>
              <h3>${escapeHtml(item.school)}</h3>
              <p class="timeline-subtitle">${escapeHtml(item.degree)}</p>
            </div>
            <span class="year-badge">${escapeHtml(item.years)}</span>
          </div>
          <ul class="timeline-list">
            ${item.highlights.map(createListItem).join("")}
          </ul>
        </article>
      `
    )
    .join("");

  document.getElementById("jobHistoryList").innerHTML = portfolioData.jobHistory
    .map(
      (job) => `
        <article class="job-card">
          <div class="job-top">
            <div>
              <h3>${escapeHtml(job.company)}</h3>
              <p class="job-subtitle">${escapeHtml(job.role)}</p>
            </div>
            <span class="year-badge">${escapeHtml(job.years)}</span>
          </div>
          <p>${escapeHtml(job.summary)}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("achievementList").innerHTML = portfolioData.achievements
    .map(
      (item) => `
        <article class="achievement-card">
          <div class="achievement-top">
            <h3>${escapeHtml(item.title)}</h3>
            <span class="year-badge">${escapeHtml(item.year)}</span>
          </div>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("skillsList").innerHTML = portfolioData.skills
    .map((skill) => `<span class="skill-chip">${escapeHtml(skill)}</span>`)
    .join("");

  document.getElementById("projectList").innerHTML = portfolioData.projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-top">
            <h3>${escapeHtml(project.title)}</h3>
          </div>
          <p>${escapeHtml(project.description)}</p>
          <a class="project-link" href="${sanitizeUrl(project.link)}">${escapeHtml(project.linkLabel)}</a>
        </article>
      `
    )
    .join("");

  document.getElementById("contactLinks").innerHTML = portfolioData.contacts
    .map(
      (contact) => `
        <a href="${sanitizeUrl(contact.href)}">
          <span class="contact-label">${escapeHtml(contact.label)}</span>
          <span>${escapeHtml(contact.value)}</span>
        </a>
      `
    )
    .join("");
};

initializeThemeToggle();
render();
