#!/usr/bin/env node

const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const boxen = require('boxen');

const token = process.argv[2];

if (!token) {
  console.error(chalk.red('Please provide a JWT to decode.'));
  process.exit(1);
}

try {
  const decoded = jwt.decode(token, { complete: true });
  if (decoded) {
    const header = chalk.cyan(JSON.stringify(decoded.header, null, 2));
    const payload = chalk.green(JSON.stringify(decoded.payload, null, 2));
    const signature = chalk.yellow(decoded.signature);

    console.log(boxen(header, { title: chalk.bold.magenta('Header'), padding: 1, margin: 1, borderStyle: 'round' }));
    console.log(boxen(payload, { title: chalk.bold.magenta('Payload'), padding: 1, margin: 1, borderStyle: 'round' }));
    console.log(boxen(signature, { title: chalk.bold.magenta('Signature'), padding: 1, margin: 1, borderStyle: 'round' }));

  } else {
    console.error(chalk.red('Invalid JWT provided.'));
    process.exit(1);
  }
} catch (error) {
  console.error(chalk.red('Error decoding JWT:'), error.message);
  process.exit(1);
}
