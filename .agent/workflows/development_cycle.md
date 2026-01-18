---
description: Orchestrate the end-to-end development of a user request from GitHub.
---

# Development Cycle Workflow

This workflow describes the detailed steps for Antigravity (the Agent) to act as the BuildSquad. You are the engine.

## Prerequisites
- `github-mcp-server` active.

## Workflow Steps

### 1. Discovery & Setup
1.  **Check Tasks**: Use `gh project item-list` and **filter by Current Iteration**.
    - **Source**: `https://github.com/users/rgupta-code/projects/5`.
    - **Logic**: Identify the iteration matching today's date. Ignore backlog/future tasks.
2.  **Initialize**:
    - Select the highest priority task.
    - Create a log directory: `_artifacts/<date>_<task_slug>/`.
    - Create a project directory: `projects/<task_slug>/`.

### 2. Planning (Manager)
1.  **Acknowledge**: Comment on the task/issue: "Antigravity starting work on this. 🚀".
2.  **Plan**: Create `projects/<slug>/Implementation_Plan.md`.
    - Outline files to create: `index.html`, `style.css`, `script.js`, `package.json`, `tests`.

### 3. Implementation (Designer & AI-Expert)
1.  **Scaffold**:
    - Create `package.json` with `jest` dependency.
    - Run `npm install` inside the project folder.
2.  **Design**:
    - Write `style.css` using **Designer** principles (Modern, CSS Vars).
3.  **Logic & Content**:
    - Write `index.html` with semantic structure and professional copy (**AI-Expert**).
    - Write `script.js` for interactivity.

### 4. Testing (Code-Review)
1.  **Test Creation**: Write `__tests__/app.test.js` covering key features.
2.  **Execution**: Run `npm test` inside the project folder.
    - **Important**: Capture the output.
3.  **Validation**:
    - If green, proceed.
    - If red, analyze failures, fix code/tests, and re-run.

### 5. Deployment & Artifacts
1.  **Capture**: Save the final file tree structure to `structure.log`.
2.  **Save Artifacts**: Ensure all logs are in `_artifacts/`.
3.  **Report**: Comment on GitHub: "Task Completed! ✅\n\n**Artifacts**:\n- Tests: Passed\n- Location: `projects/<slug>`".
