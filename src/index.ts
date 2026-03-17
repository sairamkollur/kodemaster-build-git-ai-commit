#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('git-ai-commit')
  .description('AI-powered commit message generator')
  .version('1.0.0');

program
  .action(() => {
    console.log(chalk.cyan('✨ Analyzing your changes...'));
  });

program.parse(process.argv);