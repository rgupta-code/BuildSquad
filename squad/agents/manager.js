const Agent = require('./base');
const AIExpert = require('./ai_expert');
const Designer = require('./designer');
const CodeReview = require('./code_review');
const fs = require('fs');
const path = require('path');

class Manager extends Agent {
    constructor() {
        super("Manager");
        this.aiExpert = new AIExpert();
        this.designer = new Designer();
        this.reviewer = new CodeReview();
    }

    createProjectStructure(projectName, rootDir) {
        const projectPath = path.join(rootDir, "projects", projectName);
        fs.mkdirSync(projectPath, { recursive: true });
        this.log(`Created project directory: ${projectPath}`);
        return projectPath;
    }

    async handleTask(taskDescription, issueNumber, rootDir) {
        this.log(`Handling Task #${issueNumber}: ${taskDescription}`);

        // 1. Create Project
        const projectName = `project_${issueNumber}_${Date.now()}`;
        const projectPath = this.createProjectStructure(projectName, rootDir);

        const context = {
            title: taskDescription,
            project_name: projectName,
            root_dir: rootDir
        };

        // 2. Design
        await this.designer.createStyles(projectPath);

        // 3. Implementation (AI Expert)
        await this.aiExpert.generateContentForSite(projectPath, context);
        await this.aiExpert.generateTests(projectPath);

        // 4. Review
        const passed = await this.reviewer.runTests(projectPath);
        if (passed) {
            this.log(`Task #${issueNumber} completed successfully. Deployed to ${projectPath}`);
            return true;
        } else {
            this.log(`Task #${issueNumber} failed review.`);
            return false;
        }
    }
}

module.exports = Manager;
