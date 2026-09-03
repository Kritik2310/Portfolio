import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Coffee,
  FileCode2,
  Github,
  Heart,
  Linkedin,
  Mail,
  Menu,
  NotebookPen,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  overview: string;
  purpose: string;
  solution: string;
  technologies: string[];
  features: string[];
  result?: string;
  symbol: string;
};

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const projects: Project[] = [
  {
    id: "clinical-rag",
    title: "Clinical Evidence-Grounded RAG System",
    description: "A local retrieval system shaped around WHO-guideline-aligned evidence.",
    overview: "A clinical retrieval and evaluation system designed to keep generated answers closer to grounded evidence.",
    purpose: "The project focuses on reliable clinical responses, where unsupported claims and subtle negation errors matter.",
    solution: "WHO-guideline-aligned local retrieval with SentenceTransformers and FAISS, paired with negation-aware bias detection and regression testing.",
    technologies: ["Python", "Ollama Phi-3", "SentenceTransformers", "FAISS VectorDB", "PyTest"],
    features: ["Local evidence retrieval", "Negation-aware bias detection", "CI/CD regression testing"],
    result: "Reduced hallucinations by 40% compared with a baseline LLM-only approach.",
    symbol: "∿",
  },
  {
    id: "financial-chatbot",
    title: "AI-Powered Financial Independence Chatbot",
    description: "A conversational investment advisor with a responsive, human-feeling interface.",
    overview: "A conversational assistant that helps women explore investment questions through a responsive React experience.",
    purpose: "The project is centered on making financial conversations more approachable and adaptive.",
    solution: "A Python and LangChain assistant connected to the Gemini API, with dynamic tone switching and a responsive React.js UI.",
    technologies: ["Python", "LangChain", "Gemini API", "React.js"],
    features: ["Conversational investment guidance", "Dynamic tone switching", "Responsive React interface"],
    symbol: "↗",
  },
  {
    id: "research-assistant",
    title: "Multi-Agent AI Research Assistant",
    description: "A Kaggle hackathon team project for turning papers into grounded reports.",
    overview: "A multi-agent research workflow that divides retrieval, analysis, and synthesis into focused subagents.",
    purpose: "The assistant was built to support research-paper generation without losing citation grounding.",
    solution: "Retrieval, analysis, and report-generation subagents work together in a Streamlit and FastAPI application.",
    technologies: ["Python", "LangChain", "Gemini API", "Streamlit", "FastAPI"],
    features: ["Retrieval subagent", "Analysis subagent", "Report-generation subagent", "Synthesis and citation grounding"],
    symbol: "⌁",
  },
  {
    id: "news-aggregator",
    title: "Multi-Channel AI News Aggregator",
    description: "Automated synthesis that turns daily news into compact digests.",
    overview: "A news pipeline that brings together automated summarization and multi-channel delivery.",
    purpose: "The goal was to reduce the effort needed to keep up with a daily news cycle.",
    solution: "Python and Hugging Face BART synthesize news from APIs, then deliver daily digests through WhatsApp and responsive HTML emails.",
    technologies: ["Python", "Hugging Face BART", "APIs", "PythonAnywhere"],
    features: ["Automated news synthesis", "WhatsApp daily digests", "Responsive HTML emails"],
    result: "Reduced reading time by 80%.",
    symbol: "≋",
  },
  {
    id: "content-video",
    title: "AI-Powered Content Summarization & Video Gen",
    description: "A text-to-video app combining summarization, speech, and a considered UI.",
    overview: "A full-stack text-to-video application that turns written content into a narrated, visual output.",
    purpose: "The project explores how natural language processing can shorten the path from text to shareable media.",
    solution: "React.js, Python Flask, and Node.js connect spaCy and Hugging Face summarization with text-to-speech and audio synthesis.",
    technologies: ["React.js", "Python Flask", "Node.js", "spaCy", "Hugging Face", "Figma"],
    features: ["Text summarization", "Text-to-speech", "Audio synthesis", "Figma-led interface design"],
    symbol: "▶",
  },
];

const skillGroups = [
  { title: "AI & GenAI", icon: Sparkles, items: "Python · LangChain · Gemini API · Ollama · Hugging Face (BART) · Prompt Engineering · RAG Systems · SentenceTransformers · REST APIs" },
  { title: "ML & Data", icon: Terminal, items: "NumPy · Pandas · Scikit-learn · OpenCV · Mediapipe · Matplotlib · Seaborn · Plotly · Tableau · PowerBI" },
  { title: "Web & Full-Stack", icon: Code2, items: "React.js · Node.js · Express.js · Django · Flask · HTML · CSS · MongoDB · MySQL · Leaflet.js" },
  { title: "Tools & Familiar With", icon: FileCode2, items: "Git · GitHub · Figma · PyTest · Firebase · LangGraph · ClaudeCode · FAISS · Codex" },
];

const certifications = [
  "Introduction to Django Web Frameworks · Coursera · Jan 2025",
  "Oracle Certified Foundations Associate for Oracle Cloud Infrastructure 2025 AI · Oracle · Oct 2025",
  "JavaScript Algorithms and Data Structures · freeCodeCamp · Nov 2024",
  "Python Programming For Everybody · Coursera · Nov 2024",
  "Introduction to Web Programming Using HTML and CSS · Udemy · Nov 2024",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CoffeeCompanion() {
  return (
    <div className="coffee-companion" aria-hidden="true">
      <span className="steam" />
      <span className="steam two" />
      <div className="coffee-cup" />
    </div>
  );
}

function DeveloperDesk() {
  return (
    <div className="desk-scene" aria-hidden="true">
      <div className="plant"><span className="leaf" /><span className="leaf two" /><span className="leaf three" /><span className="plant-pot" /></div>
      <div className="desk-board">
        <div className="desk-screen">
          <span>const idea =</span>
          <span>build("useful");</span>
          <span>ship(idea);</span>
        </div>
        <div className="desk-base" />
      </div>
      <div className="sticker one">make<br />room</div>
      <div className="sticker two">ship<br />kindly</div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()} data-testid={`modal-project-${project.id}`}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close project details" data-testid="button-close-project-modal"><X size={18} /></button>
        <div className="modal-kicker">project note / {project.id}</div>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="modal-overview">{project.overview}</p>
        <div className="modal-block">
          <h3>Why it exists</h3>
          <p>{project.purpose}</p>
        </div>
        <div className="modal-block">
          <h3>How it works</h3>
          <p>{project.solution}</p>
        </div>
        <div className="modal-block">
          <h3>What is inside</h3>
          <div className="modal-tags">
            {project.features.map((feature) => <span className="tag" key={feature}><Check size={12} /> {feature}</span>)}
          </div>
        </div>
        <div className="modal-block">
          <h3>Stack</h3>
          <div className="modal-tags">
            {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
          </div>
        </div>
        {project.result && <div className="modal-block"><h3>Result</h3><p>{project.result}</p></div>}
      </article>
    </div>
  );
}

export function KritiPortfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-35% 0px -55% 0px", threshold: [0, .2, .6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  const goTo = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <main className="portfolio-page">
      <div className="edge-doodle left" aria-hidden="true" />
      <div className="edge-doodle right" aria-hidden="true" />

      <header className="site-nav">
        <div className="nav-inner">
          <a href="#home" className="nav-mark" onClick={() => goTo("home")} data-testid="link-home">KK<span aria-hidden="true"></span></a>
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => <a href={`#${item.id}`} className={`nav-link ${activeSection === item.id ? "active" : ""}`} onClick={() => goTo(item.id)} key={item.id} data-testid={`link-nav-${item.id}`}>{item.label}</a>)}
          </nav>
          <button type="button" className="nav-menu" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} data-testid="button-mobile-menu">
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {mobileOpen && <nav id="mobile-navigation" className="mobile-panel" aria-label="Mobile navigation">{navItems.map((item) => <a href={`#${item.id}`} className="nav-link" onClick={() => goTo(item.id)} key={item.id} data-testid={`link-mobile-nav-${item.id}`}>{item.label}</a>)}</nav>}
      </header>

      <section id="home" className="section hero">
        <div className="hero-grid">
          <div className="hero-copy">
            {/* <div className="eyebrow"><span aria-hidden="true" /> available for thoughtful software work</div> */}
            <h1>Kriti<br /><em>Kashyap</em></h1>
            <p className="hero-title">Computer Science B.Tech student <span aria-hidden="true">,</span> Software Developer Intern</p>
            <p className="hero-blurb">I build grounded AI systems, useful web experiences, and the occasional tiny interface with a lot of personality. Based in Navi Mumbai, currently learning in public at SAS R&D.</p>
            <div className="hero-actions">
              <button type="button" className="button primary" onClick={() => goTo("projects")} data-testid="button-explore-work">Explore my work <ArrowDownRight className="arrow" size={16} /></button>
              <a className="button secondary" href="mailto:kritikashyap2316@gmail.com" data-testid="link-hero-email">Let's connect <ArrowUpRight className="arrow" size={15} /></a>
            </div>
            <div className="hero-note"><Coffee size={15} /> Navi Mumbai · PCET's Pimpri Chinchwad University · GPA 9.08/10</div>
          </div>
          <div className="hero-art">
            <div className="frame-shadow" />
            <div className="friends-frame">
              <div className="frame-inner">
                <div className="frame-caption">a little corner of the internet</div>
                <img className="mascot-image" src={`${import.meta.env.BASE_URL}kriti-developer-mascot.png`} alt="Illustration of a developer at a laptop with a coffee cup" data-testid="img-developer-mascot"/>
                <span className="code-float code-one" aria-hidden="true">&lt;/&gt;</span>
                <span className="code-float code-two" aria-hidden="true">{"{ }"}</span>
              </div>
            </div>
            <CoffeeCompanion />
            <div className="hero-doodle" aria-hidden="true">good ideas<br />need a desk</div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">keep scrolling</div>
      </section>

      <div className="highlight-strip" aria-label="Portfolio highlights">
        <div className="strip-items">
          <span data-testid="text-highlight-internship">Current: SAS R&D Research Intern</span>
          <span data-testid="text-highlight-rag">Intelligent AI systems</span>
          <span data-testid="text-highlight-gpa">9.08 / 10 GPA</span>
          <span data-testid="text-highlight-location">Navi Mumbai</span>
        </div>
      </div>

      <section id="about" className="section reveal">
        <div className="section-kicker">01 / the person behind the pull request</div>
        <div className="about-layout">
          <div className="about-paper">
            <h2 className="section-title">A little<br />about me<span aria-hidden="true">.</span></h2>
            <p>I'm a final-year Computer Science Engineering student at PCET's Pimpri Chinchwad University, Pune, with a soft spot for the space where thoughtful interfaces meet technically careful systems.</p>
            <p>My work sits at the intersection of grounded AI, thoughtful web experiences, and data-driven interfaces. I like building things that are technically curious but still useful—systems that know their context, interfaces that respect their users, and small details that make software feel a little more human.</p>
            <div className="fact-row">
              <span className="fact-chip">final-year CSE student</span>
              <span className="fact-chip">software developer intern</span>
              <span className="fact-chip">AI + full-stack</span>
            </div>
          </div>
          <DeveloperDesk />
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="experience-wrap reveal">
          <div className="section-kicker">02 / where I've been putting it to work</div>
          <h2 className="section-title">The work<br /><em>so far.</em></h2>
          <div className="timeline">
            <article className="experience-card current" data-testid="card-experience-collameta">
              <span className="current-badge">current</span>
              <div className="experience-top">
                <div><h3 className="experience-role">Research Intern</h3><p className="experience-company">SAS R&D Pune</p></div>
                <span className="experience-dates">Current</span>
              </div>
              <p className="experience-copy">Enhancing a performance and concurrency testing framework for RISK RCM and IRR solutions, focusing on stability and automating manual testing workflows through the RCI-provided framework.</p>
              <div className="tag-list"><span className="tag">SAS</span><span className="tag">Python</span><span className="tag">YAML</span><span className="tag">Postgres DB</span></div>
            </article>
            <article className="experience-card" data-testid="card-experience-barc">
              <div className="experience-top">
                <div><h3 className="experience-role">Junior Java Developer</h3><p className="experience-company">BARC · Government Internship</p></div>
                <span className="experience-dates">May 25 – Jul 25</span>
              </div>
              <p className="experience-copy">Worked on Apex Project Monitoring dashboards, KPIs, financial analysis, and graphical analytics using Java, Spring MVC, Hibernate, and PostgreSQL. Also used Python for server and database log analysis to investigate slow queries, bottlenecks, and anomalies.</p>
              <div className="tag-list"><span className="tag">Java</span><span className="tag">Spring MVC</span><span className="tag">Hibernate</span><span className="tag">PostgreSQL</span><span className="tag">Python</span></div>
            </article>
            <article className="experience-card" data-testid="card-experience-collameta">
              <div className="experience-top">
                <div><h3 className="experience-role">Summer Intern</h3><p className="experience-company">CollaMeta · International Internship</p></div>
                <span className="experience-dates">May 24 – Jun 24</span>
              </div>
              <p className="experience-copy">Developing an Android cognitive assessment app with interactive quiz and memory modules. The work brings together Android Studio, Java, XML, and Firebase Realtime Database, with accessibility, usability, and UX considerations for elderly users.</p>
              <div className="tag-list"><span className="tag">Android Studio</span><span className="tag">Java</span><span className="tag">XML</span><span className="tag">Firebase Realtime Database</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="section reveal">
        <div className="section-kicker">03 / tools I reach for</div>
        <h2 className="section-title">A practical<br /><em>toolbox.</em></h2>
        <div className="skills-layout">
          <div className="skills-aside">
            <p>No progress bars, no mysterious percentages — just the technologies I have actually worked with, grouped by the kinds of problems they help me solve.</p>
            <span className="hero-note"><NotebookPen size={15} /> familiar with: LangGraph, ClaudeCode, FAISS, Codex</span>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }, index) => <article className="skill-card" key={title} data-testid={`card-skill-group-${index}`}><span className="skill-icon"><Icon size={16} /></span><h3>{title}</h3><p>{items}</p></article>)}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section reveal">
          <div className="section-kicker">04 / things I've built</div>
          <h2 className="section-title">Projects with<br /><em>receipts.</em></h2>
          <p className="section-intro">A wall of experiments, systems, and interfaces. Open a card for the enriched version — every detail here comes from my work.</p>
          <div className="projects-wall">
            {projects.map((project, index) => <button type="button" className="project-card" onClick={() => setSelectedProject(project)} key={project.id} data-testid={`card-project-${project.id}`} aria-label={`Open details for ${project.title}`}>
              <div className="project-image"><span className="project-symbol" aria-hidden="true">{project.symbol}</span><span className="project-number">0{index + 1} / project note</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-footer"><span>{project.technologies.slice(0, 2).join(" · ")}</span><span className="project-arrow">read note <ChevronRight size={14} /></span></div>
            </button>)}
          </div>
        </div>
      </section>

      <section id="education" className="section reveal">
        <div className="section-kicker">05 / the paper trail</div>
        <h2 className="section-title">Learning,<br /><em>in chapters.</em></h2>
        <div className="education-layout">
          <div className="edu-list">
            <article className="edu-item" data-testid="card-education-university">
              <div className="edu-year">2023 — now</div>
              <div><h3>B.Tech in Computer Science Engineering</h3><p>PCET's Pimpri Chinchwad University, Pune · Cumulative GPA 9.08/10</p></div>
            </article>
            <article className="edu-item" data-testid="card-education-class-xii">
              <div className="edu-year">2022</div>
              <div><h3>Class XII · CBSE</h3><p>Apeejay School, Kharghar, Mumbai Maharashtra · 91.2%</p></div>
            </article>
            <article className="edu-item" data-testid="card-education-class-x">
              <div className="edu-year">2020</div>
              <div><h3>Class X · CBSE</h3><p>Apeejay School, Kharghar, Mumbai Maharashtra · 93.2%</p></div>
            </article>
          </div>
          <aside className="cert-card" data-testid="card-certifications">
            <h3>Things I've<br />picked up.</h3>
            <ul className="cert-list">
              {certifications.map((certification) => <li key={certification}><Award size={15} /> <span>{certification}</span></li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="community-title">
        <div className="section-kicker">06 / beyond the screen</div>
        <h2 id="community-title" className="section-title">The people<br />part.</h2>
        <div className="community-grid">
          <article className="community-card" data-testid="card-community-acm"><span className="community-date">Jan 2025 – Jul 2026</span><h3>ACM PCU Design Team</h3><p>Design Team Member at ACM Pimpri Chinchwad University.</p></article>
          <article className="community-card" data-testid="card-community-vibenity"><span className="community-date">Nov 2025</span><h3>Vibenity Hackathon</h3><p>Technical Team Volunteer.</p></article>
          <article className="community-card" data-testid="card-community-rep"><span className="community-date">Aug 2025 – present</span><h3>Class Representative</h3><p>Pimpri Chinchwad University.</p></article>
        </div>
      </section>

      <section id="contact" className="section contact-section reveal">
        <div className="section-kicker">07 / leave a note</div>
        <div className="contact-card">
          <div>
            <h3>Could we<br /><em>build something</em><br />good?</h3>
            <p>If you're looking for a curious developer who cares about grounded systems and the people using them, my inbox is open.</p>
            <div className="contact-note"><Heart size={13} /> no contact forms were harmed in the making of this page</div>
          </div>
          <div className="contact-links">
            <a href="mailto:kritikashyap2316@gmail.com" className="contact-link" data-testid="link-contact-email"><Mail size={17} /> kritikashyap2316@gmail.com <ArrowUpRight size={15} /></a>
            <a href="https://github.com/Kritik2310" target="_blank" rel="noreferrer" className="contact-link" data-testid="link-contact-github"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
            <a href="https://www.linkedin.com/in/kriti-kashyap-a72886289/" target="_blank" rel="noreferrer" className="contact-link" data-testid="link-contact-linkedin"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span><BriefcaseBusiness size={13} /> Kriti Kashyap · built with code, caffeine & a little curiosity</span>
        <div className="footer-links"><a href="https://github.com/Kritik2310" target="_blank" rel="noreferrer" data-testid="link-footer-github">GitHub</a><a href="https://www.linkedin.com/in/kriti-kashyap-a72886289/" target="_blank" rel="noreferrer" data-testid="link-footer-linkedin">LinkedIn</a></div>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
}