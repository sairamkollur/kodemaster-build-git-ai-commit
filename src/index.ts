#!/usr/bin/env node
// Step 04: Unified Command Chain
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('git-ai-commit')
  .description('AI-powered commit message generator')
  .version('1.0.0')
  .command('hello')
  .description('Test command')
  .action(() => {
    console.log(chalk.green('Hello world'));
  });

program.parse(process.argv);