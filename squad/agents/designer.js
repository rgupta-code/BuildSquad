const Agent = require('./base');
const fs = require('fs');
const path = require('path');

class Designer extends Agent {
    constructor() {
        super("Designer");
    }

    async work(context) {
        this.log("Design work started...");
    }

    async createStyles(projectPath) {
        this.log("Designing UI/UX with modern aesthetics (CSS variable system)...");
        const styleCss = path.join(projectPath, "style.css");
        const content = `
/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary-color: #6366f1;
  --secondary-color: #a855f7;
  --bg-color: #0f172a;
  --surface-color: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --font-main: 'Inter', system-ui, -apple-system, sans-serif;
  --radius: 0.5rem;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-family: var(--font-main);
  line-height: 1.5;
  min-height: 100vh;
}

/* Typography */
h1, h2, h3 {
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1rem;
}

h1 { font-size: 3rem; background: linear-gradient(to right, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; color: transparent; }
h2 { font-size: 2rem; }
p { margin-bottom: 1rem; color: var(--text-muted); }

/* Layout */
header {
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

section {
  margin-bottom: 4rem;
}

/* Components */
.card {
  background-color: var(--surface-color);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: var(--radius);
  font-weight: 600;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}
`;
        fs.writeFileSync(styleCss, content);
        this.log(`Created modern styles at: ${styleCss}`);
    }
}

module.exports = Designer;
