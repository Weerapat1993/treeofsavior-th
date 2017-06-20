var chalk = require('chalk');

console.log('[usage] : npm run <commands>\n');
console.log(chalk.green('npm start \t\t\t- Run Start Server port 3000'));
console.log(chalk.green('npm test \t\t\t- Run Test by Jest'));
console.log(chalk.green('npm run build \t\t\t- Run Build to Deploy Server'));
console.log(chalk.green('npm run help \t\t\t- Help All Commands'));
console.log(chalk.green('npm run make:core <name> \t- Create File Core Reducer && Actions'));
console.log(chalk.green('npm run make:container <name> \t- Create File Container'));
console.log(chalk.green('npm run make:component <name> \t- Create File Component'));
console.log(chalk.green('npm run make:page <name> \t- Create File Route Page\n'));
