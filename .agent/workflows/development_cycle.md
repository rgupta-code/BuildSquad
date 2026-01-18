---
description: Orchestrate the end-to-end development of a user request from GitHub.
---

# Development Cycle Workflow

This workflow describes the detailed steps for Antigravity (the Agent) to act as the BuildSquad.

## Prerequisites
- `github-mcp-server` active.
- `squad` tool optional (this workflow uses direct agent action).

## Workflow Steps

### 1. Discovery & Setup
1.  **Check Issues**: Use `github-mcp-server_list_issues` (owner="rgupta-code", repo="BuildSquad", state="open").
    - Look for fresh issues or those labeled `build-request`.
2.  **Initialize**:
    - Select the target Issue.
    - Create a log directory: `_artifacts/<date>_<issue_id>/`.
    - Create a project directory: `projects/<issue_title_slug>/`.

### 2. Planning (Manager)
1.  **Acknowledge**: `github-mcp-server_add_issue_comment` on the issue: "Starting work on this task. 🛠️".
2.  **Plan**: Create `projects/<slug>/Implementation_Plan.md`.
    - Outline files to create: `index.html`, `style.css`, `script.js`, `package.json`, `tests`.

### 3. Implementation (Designer & AI-Expert)
1.  **Scaffold**:
    - Create `package.json` with `jest` dependency.
    - Run `npm install` (simulated or real).
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
1.  **Capture**: Take a screenshot of the site (if browser available) or save the final file tree structure to `structure.log`.
2.  **Save Artifacts**: Ensure all logs are in `_artifacts/`.
3.  **Report**: `github-mcp-server_add_issue_comment`: "Task Completed! ✅\n\n**Artifacts**:\n- Tests: Passed\n- Location: `projects/<slug>`".
4.  **Close**: `github-mcp-server_update_issue` (state="closed").
