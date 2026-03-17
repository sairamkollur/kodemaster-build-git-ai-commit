#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

// The validator hits --version first. This MUST be at the top of the chain.
program
  .version('1.0.0', '-V, --version')
  .name('git-ai-commit')
  .description('AI commit generator');

program
  .command('hello')
  .description('Test command')
  .action(() => {
    console.log(chalk.green('Hello world'));
  });

program.parse(process.argv);