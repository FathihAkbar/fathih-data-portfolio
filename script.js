const projects = [
  {
    id: 1,
    title: "Student Performance Analysis",
    type: "analysis",
    typeLabel: "Data Analysis",
    github: "https://github.com/FathihAkbar/fathih-data-portfolio/tree/main/01-student-performance",
    description: "Analyzed student performance data to identify patterns across academic scores, demographics, and learning-related factors.",
    tags: ["Python", "Pandas", "EDA", "Seaborn"],
    metrics: [{v:"EDA", l:"Focus"}, {v:"Kaggle", l:"Source"}],
    details: {
      overview: "A beginner-friendly analysis project focused on understanding how student characteristics and performance variables relate to academic outcomes.",
      workflow: "Data loading → Cleaning → Exploratory analysis → Visualization → Findings",
      highlights: "Built as the first project in the portfolio to establish a repeatable analysis workflow."
    }
  },
  {
    id: 2,
    title: "Supermarket Sales Analysis",
    type: "analysis",
    typeLabel: "Business Analysis",
    github: "https://github.com/FathihAkbar/fathih-data-portfolio/tree/main/02-supermarket-sales",
    description: "Analyzed 1,000 supermarket transactions to uncover patterns in sales, products, customers, payment methods, and transaction timing.",
    tags: ["Python", "Pandas", "Business", "Visualization"],
    metrics: [{v:"1,000", l:"Transactions"}, {v:"$322.97", l:"Avg. Sales"}],
    details: {
      overview: "A business-focused EDA project that turns transaction data into operational and customer insights.",
      workflow: "Cleaning → KPI analysis → Branch/Product analysis → Customer/Payment analysis → Time analysis",
      highlights: "Giza led total sales, Food and beverages led product sales, and 19:00 was the busiest hour with 113 transactions."
    }
  },
  {
    id: 3,
    title: "Spotify Music Analysis",
    type: "analysis",
    typeLabel: "Large Dataset",
    github: "https://github.com/FathihAkbar/fathih-data-portfolio/tree/main/03-spotify-analysis",
    description: "Analyzed 113,999 cleaned tracks across 114 genres, comparing popularity, artists, and audio characteristics.",
    tags: ["Python", "EDA", "Correlation", "Spotify"],
    metrics: [{v:"113,999", l:"Cleaned Tracks"}, {v:"114", l:"Genres"}],
    details: {
      overview: "A large-scale music analysis project focused on popularity, genre performance, artist performance, and audio features.",
      workflow: "Cleaning → Popularity categories → Genre analysis → Artist analysis → Audio feature correlation",
      highlights: "Pop-film had the highest average genre popularity; Olivia Rodrigo had the highest average popularity among artists with at least five tracks."
    }
  },
  {
    id: 4,
    title: "Netflix Movies & TV Shows",
    type: "analysis",
    typeLabel: "Trend Analysis",
    github: "https://github.com/FathihAkbar/fathih-data-portfolio/tree/main/04-netflix-analysis",
    description: "Examined Netflix content by type, year added, country, rating, genre, and duration to reveal catalog patterns.",
    tags: ["Python", "Time Analysis", "Genres", "EDA"],
    metrics: [{v:"8,807", l:"Titles"}, {v:"69.62%", l:"Movies"}],
    details: {
      overview: "A content-library analysis that combines categorical breakdowns with time-based trends.",
      workflow: "Cleaning → Content type → Year added → Country → Rating → Genre → Duration",
      highlights: "2019 was the peak year for added titles with 2,016; TV-MA was the most common rating with 3,207 titles."
    }
  },
  {
    id: 5,
    title: "Titanic Survival Prediction",
    type: "ml",
    typeLabel: "Classification",
    github: "https://github.com/FathihAkbar/fathih-data-portfolio/tree/main/05-titanic-survival",
    description: "Built classification models to predict passenger survival and compared Logistic Regression with Decision Tree.",
    tags: ["Scikit-learn", "Classification", "Logistic Regression", "Decision Tree"],
    metrics: [{v:"80.45%", l:"Best Accuracy"}, {v:"0.67", l:"Recall (Survived)"}],
    details: {
      overview: "A supervised classification project using passenger demographics and travel features to predict survival.",
      workflow: "Cleaning → Encoding → Train/Test split → Logistic Regression → Decision Tree → Evaluation",
      highlights: "Logistic Regression outperformed Decision Tree with 80.45% accuracy and better recall for the survival class."
    }
  },
  {
    id: 6,
    title: "House Price Prediction",
    type: "ml",
    typeLabel: "Regression",
    github: "https://github.com/FathihAkbar/fathih-data-portfolio/tree/main/06-house-price",
    description: "Predicted house prices using selected housing features and compared Linear Regression with Random Forest.",
    tags: ["Scikit-learn", "Regression", "Random Forest", "Feature Importance"],
    metrics: [{v:"0.8847", l:"R²"}, {v:"$19,082", l:"MAE"}],
    details: {
      overview: "A regression project focused on predicting SalePrice from property quality, area, and structural features.",
      workflow: "Feature selection → Cleaning → Train/Test split → Linear Regression → Random Forest → Evaluation",
      highlights: "Random Forest outperformed Linear Regression; OverallQual was the most influential feature with importance around 0.57."
    }
  },
  {
    id: 7,
    title: "Video Game Sales SQL Analysis",
    type: "sql",
    typeLabel: "SQL Analysis",
    github: "https://github.com/FathihAkbar/fathih-data-portfolio/tree/main/07-video-game-sales",
    description: "Used SQLite and SQL queries to analyze game sales by platform, genre, publisher, region, and year.",
    tags: ["SQL", "SQLite", "GROUP BY", "HAVING"],
    metrics: [{v:"PS2", l:"Top Platform"}, {v:"Action", l:"Top Genre"}],
    details: {
      overview: "A SQL-first portfolio project that turns a sales dataset into structured business questions and answers.",
      workflow: "Load → SQLite → SELECT → GROUP BY → HAVING → CASE WHEN → Subqueries → Visualization",
      highlights: "PS2 led platform sales, Action led genre sales, Nintendo led publisher sales, and North America had the largest regional sales."
    }
  }
];

const projectGrid = document.getElementById('projectGrid');
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');

function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';
  projects
    .filter(p => filter === 'all' || p.type === filter)
    .forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-top">
          <span class="project-number">${String(project.id).padStart(2,'0')}</span>
          <span class="project-type">${project.typeLabel}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-result">
          ${project.metrics.map(m => `<div class="metric"><strong>${m.v}</strong><small>${m.l}</small></div>`).join('')}
        </div>
        <div class="project-actions">
          <button class="small-btn primary" data-project="${project.id}">Read project</button>
          <a class="small-btn" href="${project.github}" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      `;
      projectGrid.appendChild(card);
    });

  projectGrid.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', () => openProject(Number(btn.dataset.project)));
  });
}

function openProject(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;
  modalContent.innerHTML = `
    <div class="modal-kicker">Project ${String(project.id).padStart(2,'0')} · ${project.typeLabel}</div>
    <h3 class="modal-title" id="modalTitle">${project.title}</h3>
    <p class="modal-desc">${project.description}</p>
    <div class="modal-grid">
      <div class="detail-box"><strong>Overview</strong><p>${project.details.overview}</p></div>
      <div class="detail-box"><strong>Workflow</strong><p>${project.details.workflow}</p></div>
      <div class="detail-box"><strong>Key result</strong><p>${project.details.highlights}</p></div>
      <div class="detail-box"><strong>Tools</strong><p>${project.tags.join(' · ')}</p></div>
    </div>
    <div class="project-actions" style="margin-top:26px">
      <a class="small-btn primary" href="${project.github}" target="_blank" rel="noreferrer">View on GitHub ↗</a>
      <a class="small-btn" href="#contact" data-close="modal">Contact Me</a>
    </div>
  `;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

document.querySelectorAll('[data-close="modal"]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

renderProjects();
