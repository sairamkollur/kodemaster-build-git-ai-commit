#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('git-ai-commit')
  .version('1.0.0')
  .description('AI-powered commit message generator');

program
  .command('hello')
  .description('Test command')
  .action(() => {
    console.log('Hello world'); // ✅ plain text (no chalk)
  });

program.parse(process.argv);