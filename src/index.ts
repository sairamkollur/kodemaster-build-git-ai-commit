#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('git-ai-commit')
  .description('AI-powered commit message generator')
  .version('1.0.0'); // ✅ keep version LAST in chain

program
  .command('hello')
  .description('Test command')
  .action(() => {
    console.log('Hello world');
  });

// ✅ Important: parse correctly
program.parse(process.argv);