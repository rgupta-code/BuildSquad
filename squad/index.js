#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const { execSync } = require('child_process');
const Manager = require('./agents/manager');

const PROJECT_NUMBER = 5;
const PROJECT_OWNER = 'rgupta-code';

function getProjectTasks() {
    try {
        console.log(chalk.blue(`Fetching tasks from GitHub Project #${PROJECT_NUMBER}...`));
        const cmd = `gh project item-list ${PROJECT_NUMBER} --owner ${PROJECT_OWNER} --format json`;
        const output = execSync(cmd, { encoding: 'utf-8' });
        const data = JSON.parse(output);
        return data.items || [];
    } catch (e) {
        console.error(chalk.red("Failed to fetch project items."), e.message);
        return [];
    }
}

program
    .version('1.0.0')
    .description('BuildSquad Orchestration Tool');

program
    .command('start')
    .description('Start the orchestration team loop')
    .action(async () => {
        console.log(chalk.green.bold("BuildSquad Team Assembled. Accessing Project Board..."));

        const manager = new Manager();
        const tasks = getProjectTasks();

        if (tasks.length === 0) {
            console.log("No tasks found in the project.");
            return;
        }

        for (const item of tasks) {
            // Normalize content
            const title = item.content.title || "Untitled Task";
            const body = item.content.body || "No description provided.";
            const type = item.content.type; // Issue or DraftIssue
            const id = item.content.number || item.id; // Issue number or Node ID

            console.log(chalk.yellow.bold(`\nProcessing Task: ${title} (${type})`));

            // Pass current working directory as root
            const success = await manager.handleTask(title, id, process.cwd());

            if (success) {
                console.log(chalk.green(`Task '${title}' handled successfully.`));
                // Future: Move to "Done" column using gh project item-edit
            }
        }

        console.log(chalk.green.bold("Cycle complete."));
    });

program.parse(process.argv);
