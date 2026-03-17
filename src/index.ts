#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

// 🔥 MUST be first (fast response for test runner)
program.version('1.0.0', '-v, --version', 'output version');

// Basic config
program
  .name('git-ai-commit')
  .description('AI-powered commit message generator');

// Test command
program
  .command('hello')
  .description('Test command')
  .action(() => {
    console.log('Hello world');
  });

// Parse args (REQUIRED)
program.parse(process.argv);