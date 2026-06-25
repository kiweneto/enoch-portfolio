import React from 'react'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Python', 'Django',
  'MySQL', 'Git', 'Power BI', 'Google Workspace Admin', 'REST APIs',
  'IT Support', 'Networking', 'Automation Scripting',
]

const projects = [
  {
    tag: 'Live App',
    title: 'Field Job & Maintenance Tracker',
    desc: 'A tool I built to log fire-protection and surveillance installations, schedule maintenance visits, and track client follow-ups. It is the same idea I deployed internally at Surveillant Fire to cut missed maintenance schedules.',
    stack: ['React', 'LocalStorage', 'Vite'],
    demo: '#', // replace with deployed URL
    code: '#', // replace with GitHub URL
  },
  {
    tag: 'Live App',
    title: 'Sales Data Dashboard',
    desc: 'A dashboard that records sales entries and turns them into running totals and simple visual reports. It is a web version of the Python automation I wrote to track and record sales data automatically.',
    stack: ['React', 'Charts', 'Vite'],
    demo: '#',
    code: '#',
  },
  {
    tag: 'Client Work',
    title: 'Kiwe’s Hub: IT & Web Services',
    desc: 'My own IT services and web development practice. I design and deploy responsive websites and landing pages for small businesses and individuals, and maintain them after launch.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    demo: '#', // replace with Kiwe's Hub URL
    code: null,
  },
]

const experience = [
  {
    role: 'IT Support & Software Manager',
    org: 'Surveillant Fire Limited, Mowe (Hybrid)',
    when: 'Dec 2025 – Present',
    note: 'IT support for office and field teams, an internal job-tracking tool, network and CCTV/surveillance system upkeep, and onboarding setup for new staff.',
  },
  {
    role: 'Freelance IT & Web Services',
    org: 'Kiwe’s Hub, Lagos',
    when: 'Feb 2025 – Dec 2025',
    note: 'Built and maintained responsive websites, handled device setup and troubleshooting, and managed each client project end to end.',
  },
  {
    role: 'IT Support / Web Developer',
    org: 'Lawma Academy, Lagos',
    when: 'Jul 2022 – Feb 2025',
    note: 'Resolved technical issues for staff and the public, administered Google Workspace, and maintained internal web applications.',
  },
  {
    role: 'CTO II / ICT',
    org: 'MABKET NG, Lagos',
    when: 'Aug 2021 – Jun 2022',
    note: 'Led ICT for an e-commerce platform, built customer-facing sites, integrated APIs, and improved backend performance with Django and Python.',
  },
]

export default function App() {
  return (
    <>
      <nav>
        <div className="wrap">
          <div className="brand">Enoch Ogebule</div>
          <div className="links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">IT Support · Software &amp; Web Developer</div>
          <h1>I build, fix, and keep <span>software and systems</span> running.</h1>
          <p className="lead">
            IBM-certified DevOps &amp; software engineer based in Lagos, Nigeria. Close to four years
            across IT support, web development, and cloud productivity tools, comfortable across the
            full web stack and happiest solving the problem behind the problem.
          </p>
          <div className="cta">
            <a className="btn primary" href="#projects">View my work</a>
            <a className="btn ghost" href="/Enoch_Aderinsola_CV.pdf" download>Download CV</a>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <h2>About</h2>
          <p className="sub">A quick introduction.</p>
          <p style={{ color: 'var(--muted)', maxWidth: 760 }}>
            I started in IT support and grew into building the software and websites that the same
            users rely on. That mix means I can talk to non-technical people, find the real issue, and
            then go and fix it in code or in the system. I work with React, Python/Django, and the
            usual web stack, administer Google Workspace, and I'm currently deepening my skills in
            system security and workflow automation, with Microsoft (AZ-900) and IBM Full Stack
            certifications in progress.
          </p>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <h2>Skills &amp; Tools</h2>
          <p className="sub">What I work with day to day.</p>
          <div className="chips">
            {skills.map((s) => <span className="chip" key={s}>{s}</span>)}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <h2>Projects</h2>
          <p className="sub">Real things I've built. Replace the “#” links with your deployed URLs.</p>
          <div className="grid">
            {projects.map((p) => (
              <div className="proj" key={p.title}>
                <div className="tag">{p.tag}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="stack">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="plinks">
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo →</a>}
                  {p.code && <a href={p.code} target="_blank" rel="noreferrer">Code</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <h2>Experience</h2>
          <p className="sub">Where I've worked.</p>
          <div className="tl">
            {experience.map((e) => (
              <div className="item" key={e.role + e.when}>
                <div className="top">
                  <h4>{e.role}</h4>
                  <span className="when">{e.when}</span>
                </div>
                <div className="org">{e.org}</div>
                <p>{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <h2>Get in touch</h2>
          <p className="sub">Open to IT support, software, and web development roles, remote or on-site.</p>
          <div className="contact-card">
            <a className="email" href="mailto:enochogebule8@gmail.com">enochogebule8@gmail.com</a>
            <div className="row">
              <span>📍 Lagos, Nigeria</span>
              <span>📞 +234 810 438 6125</span>
              <a href="https://github.com/kiweneto" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/ogebule-enoch" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Enoch Aderinsola Ogebule · Built with React
      </footer>
    </>
  )
}
