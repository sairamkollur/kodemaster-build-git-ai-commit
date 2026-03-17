#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('git-ai-commit')
  .version('1.0.0')
  .description('AI-powered commit message generator');

program
  .command('hello')
  .description('Test command')
  .action(() => {
    console.log(chalk.green('Hello world'));
  });

program.parse(process.argv);