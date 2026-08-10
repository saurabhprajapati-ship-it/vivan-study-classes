let masterData = { subjects: [], chapters: [] };
let currentView = "subjects"; // 'subjects' or 'chapters'
let currentSubjectId = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  restoreTheme();
  setupThemeToggle();
  initPortal();
});

function restoreTheme() {
  try {
    const t = localStorage.getItem("edu_theme");
    if (t) {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) {}
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const html = document.documentElement;
      const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      try {
        localStorage.setItem("edu_theme", next);
      } catch (e) {}
    });
  }
}

async function initPortal() {
  try {
    const res = await fetch("chapters_registry.json");
    masterData = await res.json();

    // Listen to hash changes (for browser Back/Forward and Refresh persistence)
    window.addEventListener("hashchange", handleHashStateChange);
    
    // Restore state from URL Hash or Session Storage
    handleHashStateChange();
  } catch (err) {
    console.error("Error loading chapters registry:", err);
  }
}

function handleHashStateChange() {
  const hash = window.location.hash;

  if (hash.startsWith("#/subject/")) {
    const subjectId = hash.replace("#/subject/", "");
    currentView = "chapters";
    currentSubjectId = subjectId;
    closeViewer(false); // don't clear hash
  } else if (hash.startsWith("#/chapter/")) {
    const chapterId = hash.replace("#/chapter/", "");
    const ch = masterData.chapters.find(c => c.id === chapterId);
    if (ch) {
      currentView = "chapters";
      currentSubjectId = ch.subjectId;
      launchChapterModalOnly(ch.path, ch.fullTitle);
    }
  } else {
    currentView = "subjects";
    currentSubjectId = "all";
    closeViewer(false);
  }

  renderView();
}

function showSubjectsView() {
  window.location.hash = "#/home";
}

function showChaptersForSubject(subjectId) {
  window.location.hash = `#/subject/${subjectId}`;
}

function handleSearchInput(val) {
  searchQuery = val.toLowerCase().trim();
  renderChaptersListOnly();
}

function renderView() {
  const container = document.getElementById("mainContentWrap");
  const heroCard = document.getElementById("heroCard");
  if (!container) return;

  // Show Hero Card ONLY on Home / Subjects View
  if (heroCard) {
    if (currentView === "subjects") {
      heroCard.style.display = "grid";
    } else {
      heroCard.style.display = "none";
    }
  }

  // Update active state on bottom tab navigation bar
  updateBottomTabsState();

  if (currentView === "subjects") {
    renderSubjectsGrid(container);
  } else {
    renderChaptersGrid(container);
  }
}

function updateBottomTabsState() {
  const tabs = document.querySelectorAll(".bottom .tab");
  tabs.forEach(tab => tab.classList.remove("active"));

  if (currentView === "subjects") {
    if (tabs[0]) tabs[0].classList.add("active");
  } else if (currentSubjectId === "sanskrit") {
    if (tabs[1]) tabs[1].classList.add("active");
  }
}

function renderSubjectsGrid(container) {
  let html = `
    <div class="view-header-row">
      <h1>विषय चयन (Select Subject)</h1>
      <div class="subtitle">कक्षा 10 बिहार बोर्ड (BSEB 2026 Batch) — Vivan Study Classes</div>
    </div>

    <div class="subjects">
  `;

  masterData.subjects.forEach(sub => {
    html += `
      <div class="sub" onclick="showChaptersForSubject('${sub.id}')" role="button" tabindex="0">
        <div class="sub-icon">${sub.icon}</div>
        <h4>${sub.name}</h4>
        <div class="sub-subtitle">${sub.count} अध्याय (Smart Class)</div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function renderChaptersGrid(container) {
  const subObj = masterData.subjects.find(s => s.id === currentSubjectId);
  const subjectTitle = subObj ? subObj.name : "सभी अध्याय (All Chapters)";

  let html = `
    <div class="back-link" onclick="showSubjectsView()" role="button" tabindex="0">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"/>
        <polyline points="12 19 5 12 12 5"/>
      </svg>
      <span>Back to Subjects</span>
    </div>

    <div class="view-header-row">
      <h1>${subjectTitle}</h1>
      <div class="subtitle">पाठ्यक्रम अनुसार स्मार्ट-क्लास प्रस्तुति (100% BSEB Standard)</div>
    </div>

    <!-- Chapter Search Bar Inside Subject View ONLY -->
    <div class="search-box-wrap">
      <svg class="search-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input type="text" id="chapterSearchInput" class="search-input-field" value="${searchQuery}" oninput="handleSearchInput(this.value)" placeholder="इस विषय के किसी भी पाठ का नाम या नंबर खोजें (e.g. मङ्गलम्, 4, कर्मवीर)..." />
    </div>

    <div id="chaptersListTarget"></div>
  `;

  container.innerHTML = html;
  renderChaptersListOnly();
}

function renderChaptersListOnly() {
  const target = document.getElementById("chaptersListTarget");
  if (!target) return;

  let filtered = masterData.chapters;

  if (currentSubjectId !== "all") {
    filtered = filtered.filter(c => c.subjectId === currentSubjectId);
  }

  if (searchQuery) {
    filtered = filtered.filter(c => {
      const titleMatch = c.title && c.title.toLowerCase().includes(searchQuery);
      const fullTitleMatch = c.fullTitle && c.fullTitle.toLowerCase().includes(searchQuery);
      const bsebNumMatch = c.bsebNumber && c.bsebNumber.toLowerCase().includes(searchQuery);
      const subtitleMatch = c.subtitle && c.subtitle.toLowerCase().includes(searchQuery);
      const idMatch = c.id && c.id.toLowerCase().includes(searchQuery);
      
      return titleMatch || fullTitleMatch || bsebNumMatch || subtitleMatch || idMatch;
    });
  }

  if (filtered.length === 0) {
    target.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--muted);">
        <h3 style="font-size: 20px; margin-bottom: 8px; color: var(--text);">कोई पाठ नहीं मिला</h3>
        <p>कृपया अन्य शब्द या पाठ संख्या टाइप करके खोजें।</p>
      </div>
    `;
    return;
  }

  let html = `<div class="chapters-container">`;

  filtered.forEach(ch => {
    html += `
      <article class="chapter-card-edumate" onclick="launchChapter('${ch.id}', '${ch.path}', '${ch.fullTitle}')">
        <div class="chapter-img-wrap">
          <img src="${ch.thumbnail}" alt="${ch.title}" class="chapter-img" onerror="this.src='https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80'" />
          <span class="chapter-badge-tag">${ch.bsebNumber}</span>
        </div>
        
        <div class="chapter-content-body">
          <span class="chapter-bseb-title">${ch.bsebNumber} • BSEB CLASS 10</span>
          <h2 class="chapter-main-name">${ch.fullTitle}</h2>
          <p class="chapter-desc-text">${ch.subtitle}</p>
          
          <div class="chapter-stats-pills">
            <span class="ch-pill">🎯 ${ch.mcqCount} MCQs</span>
            <span class="ch-pill">📝 ${ch.subjCount} Subjective</span>
            <span class="ch-pill">📖 ${ch.vocabCount} Vocab</span>
          </div>
          
          <button class="launch-btn-edumate">
            ▶ पाठ शुरू करें (Launch Presentation)
          </button>
        </div>
      </article>
    `;
  });

  html += `</div>`;
  target.innerHTML = html;
}

function launchChapter(chapterId, url, title) {
  window.location.hash = `#/chapter/${chapterId}`;
  launchChapterModalOnly(url, title);
}

function launchChapterModalOnly(url, title) {
  const modal = document.getElementById("viewerModal");
  const iframe = document.getElementById("viewerIframe");
  const titleEl = document.getElementById("viewerTitle");

  if (modal && iframe) {
    if (iframe.src !== url) iframe.src = url;
    if (titleEl) titleEl.textContent = title;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeViewer(clearHash = true) {
  const modal = document.getElementById("viewerModal");
  const iframe = document.getElementById("viewerIframe");

  if (modal && iframe) {
    iframe.src = "about:blank";
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  if (clearHash) {
    window.location.hash = `#/subject/${currentSubjectId}`;
  }
}
