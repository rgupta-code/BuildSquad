const chalk = require('chalk');

class Agent {
    constructor(name) {
        this.name = name;
    }

    log(message) {
        console.log(`${chalk.cyan.bold(`[${this.name}]`)} ${message}`);
    }

    error(message) {
        console.log(`${chalk.red.bold(`[${this.name}] ERROR:`)} ${message}`);
    }

    async work(context) {
        throw new Error("Method 'work' must be implemented.");
    }
}

module.exports = Agent;
