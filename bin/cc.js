#! /usr/bin/env node

const path = require('path');
const args = process.argv.slice(2);
const {Plop, run} = require('plop');
const argv = require('minimist')(args);

Plop.launch({
    cwd: argv.cwd,
    // In order for `plop` to always pick up the `plopfile.js` despite the CWD, you must use `__dirname`
    configPath: path.join(__dirname, 'plopfile.js'),
    require: argv.require,
    completion: argv.completion
// This will merge the `plop` argv and the generator argv.
// This means that you don't need to use `--` anymore
}, run);




// const chalk = require('chalk');
// const clear = require('clear');
// const figlet = require('figlet');
// var CLI = require('clui');
// const files = require('./lib/files');
// const inquirer  = require('./lib/inquirer');
//
// clear();
//
// console.log(
//     chalk.cyan(
//         figlet.textSync('Create Component', { horizontalLayout: 'full' })
//     )
// );


// var Spinner = CLI.Spinner;
//
// var countdown = new Spinner('Exiting in 10 seconds...  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
//
// countdown.start();
//
// var number = 10;
// setInterval(function () {
//     number--;
//     countdown.message('Exiting in ' + number + ' seconds...  ');
//     if (number === 0) {
//         // process.stdout.write('\n');
//         // process.exit(0);
//         countdown.stop();
//     }
// }, 1000);

// const run = async () => {
//     const props = await inquirer.askComponentProps();
//     console.log(props);
//     // console.log('test log');
// };
//
// run();



//1. create folder with component name
//2.copy files from bin/src to new folder
//3.replace template with component name and description
//--package.json
//--src/index.js
//--src/stories.js
//--


// console.log('test log');