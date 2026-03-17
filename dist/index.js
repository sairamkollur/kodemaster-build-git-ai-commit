#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
program
    .name('git-ai-commit')
    .version('1.0.0', '-v, --version', 'output the version number')
    .description('AI-powered commit message generator');
program
    .command('hello')
    .description('Test command')
    .action(() => {
    console.log('Hello world');
});
program.parse();
