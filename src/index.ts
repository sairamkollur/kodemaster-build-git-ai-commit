#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
  .name('git-ai-commit')
  .version('1.0.0')
  .description('AI commit generator');

program
  .command('hello')
  .action(() => {
    console.log(chalk.green('Hello world'));
  });

program.parse(process.argv);