#!/usr/bin/env bun
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .version('1.0.0')
  .name('git-ai-commit')
  .description('AI-powered commit message generator');

program
  .command('hello')
  .description('Test command')
  .action(() => {
    console.log(chalk.green('Hello world'));
  });

program.parse(process.argv);