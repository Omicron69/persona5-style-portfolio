/* =====================================================================
   MODEL — the data and state of the app. Never touches the DOM.
   Edit your content here: featured projects, skills, image overrides.
   ===================================================================== */

const Model = {

  githubUser: "Omicron69",

  // Where the contact form delivers (via formsubmit.co relay)
  contactEmail: "mez.rahman777@gmail.com",

  // App state (read/written by the Controller, displayed by the View)
  state: {
    screen: "home",        // which screen is showing
    menuIndex: 0,          // selected item on the home menu
    reposLoaded: false,
    skillsBuilt: false,
  },

  // ---- Featured projects (hand-written, shown above the GitHub feed) ----
  featured: [
    {
      title: "BSL Fingerspelling: “Hands”",
      tag: "Live App", color: "#3dff6e", live: true,
      url: "https://bslgame.co.uk/", cta: "Play at bslgame.co.uk →",
      img: "assets/projects/bsl.png",
      desc: "A game that teaches you the BSL alphabet using nothing but your webcam. Built with React, Node.js, TensorFlow.js and MediaPipe hand tracking. This was my final year project and it scored an A+ at 87/100.",
    },
    {
      title: "Steam Review Sentiment with Transformers",
      tag: "NLP", color: "#e60012",
      url: "https://github.com/Omicron69/Granular-Sentiment-Pipeline-Class-Weighted-Transformers-for-Steam-Reviews",
      cta: "View on GitHub →",
      img: "assets/projects/steam.png",
      desc: "Fine-tuned DistilBERT, BERTweet and RoBERTa to sort Steam reviews into a custom six-class sentiment taxonomy, with class weighting to handle the imbalance. RoBERTa came out on top at 88.2% F1.",
    },
    {
      title: "DownloadGuard",
      tag: "Security", color: "#f1e05a",
      url: "https://github.com/Omicron69/DownloadGuard", cta: "View on GitHub →",
      img: "assets/projects/downloadguard.png",
      desc: "A Chrome extension that protects everyday users in real time. It watches for malicious downloads, phishing emails, deceptive links and QR code scams, all layered into one Manifest V3 extension.",
    },
    {
      title: "Medical Image Classification",
      tag: "Deep Learning", color: "#3178c6",
      url: "https://github.com/Omicron69/organsmnist-cnn-classification", cta: "View on GitHub →",
      img: "assets/projects/medcnn.png",
      desc: "Classifying organs in CT scans, from a baseline dense net to five custom CNNs to fine-tuned ResNet50 and EfficientNetB0, reaching 79% test accuracy on 25,000+ OrganSMNIST images.",
    },
  ],

  // Repos already shown in "featured" get hidden from the GitHub feed
  featuredRepoNames: [
    "BritishFingerSpellingAI",
    "Granular-Sentiment-Pipeline-Class-Weighted-Transformers-for-Steam-Reviews",
    "DownloadGuard",
    "organsmnist-cnn-classification",
  ],

  // Shown if the GitHub API can't be reached
  fallbackRepos: [
    {
      name: "crime-analysis-montgomery-county", language: "Jupyter Notebook", stargazers_count: 0,
      html_url: "https://github.com/Omicron69/crime-analysis-montgomery-county",
      description: "Ten years of Montgomery County crime data, taken from a messy 90 MB government CSV to ten answered analytical questions, geospatial hotspot maps and a district safety ranking.",
    },
    {
      name: "asthma-worsening-prediction", language: "MATLAB", stargazers_count: 0,
      html_url: "https://github.com/Omicron69/asthma-worsening-prediction",
      description: "Predicting worsening asthma symptoms from NHS primary-care data with SQL and MATLAB, following CRISP-DM. Compares four models on a heavily imbalanced clinical dataset.",
    },
    {
      name: "Chronic-Kideney-Disease-Analyzer", language: "PHP", stargazers_count: 0,
      html_url: "https://github.com/Omicron69/Chronic-Kideney-Disease-Analyzer",
      description: "A healthcare tracking web app. I led the front-end and requirements analysis in a multidisciplinary team, and our solution improved patient diagnostics by 25%.",
    },
    {
      name: "MSc-Washington-Crime-Analysis-with-Pandas", language: "Jupyter Notebook", stargazers_count: 0,
      html_url: "https://github.com/Omicron69/MSc-Washington-Crime-Analysis-with-Pandas",
      description: "Crime trend analysis of Washington D.C. public data. Reproducible Pandas notebooks with visual summaries written for people who do not code.",
    },
  ],

  // Optional thumbnail overrides: repo name → image path.
  // Anything not listed is looked up at assets/projects/<RepoName>.png
  projectImages: {
    // "DownloadGuard": "assets/projects/downloadguard.png",
  },

  langColors: {
    JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
    PHP: "#4F5D95", CSS: "#663399", HTML: "#e34c26",
    "Jupyter Notebook": "#DA5B0B", MATLAB: "#e16737", Java: "#b07219", C: "#555", "C++": "#f34b7d",
  },

  // ---- Skills screen ----
  skills: [
    { group: "AI · ML · Data Science", items: [
      ["Python · pandas · NumPy", 92], ["TensorFlow / Keras · PyTorch", 88],
      ["scikit-learn · XGBoost", 86], ["CNNs & Transfer Learning", 85],
      ["NLP & Transformers", 82], ["Computer Vision · MediaPipe", 86],
    ]},
    { group: "Web & Full-Stack", items: [
      ["JavaScript / TypeScript", 86], ["React · React Native · Next.js", 84],
      ["Node.js · REST APIs", 80], ["TensorFlow.js (in-browser ML)", 84],
      ["PHP · SQL · PostgreSQL", 74], ["UX Design · Figma · Adobe XD", 82],
    ]},
    { group: "Cloud & Engineering", items: [
      ["Git & GitHub", 88], ["AWS · Azure · GCP", 74],
      ["Docker · Firebase", 76], ["Agile · PRINCE2 Agile", 80],
      ["Tableau · Power BI", 72], ["Bash · PowerShell", 75],
    ]},
    { group: "Spoken Languages", items: [
      ["English · Bengali · Hindi · Urdu", 100], ["Japanese (JLPT N4)", 62], ["Mandarin", 30],
    ]},
  ],

  // ---- Data fetching ----
  async fetchRepos() {
    const skip = new Set(this.featuredRepoNames);
    try {
      const res = await fetch(
        `https://api.github.com/users/${this.githubUser}/repos?per_page=100&sort=updated`
      );
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork && !skip.has(r.name));
      return { repos, live: true };
    } catch {
      return { repos: this.fallbackRepos.filter(r => !skip.has(r.name)), live: false };
    }
  },
};
