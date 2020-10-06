const path = require('path');
const pkg = require('../package.json');

module.exports = function(plop) {
  plop.setHelper('pkgVersion', function() {
    return pkg.version;
  });
  plop.setGenerator('CreateComponent', {
    description: 'Create new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name for your component:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.join(process.cwd(), '{{name}}', '/src/lib/index.js'),
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: path.join(process.cwd(), '{{name}}', '/src/index.js'),
        templateFile: 'templates/index.hbs',
      },
      {
        type: 'add',
        path: 'source/.npmignore',
        templateFile: 'templates/npmignore.hbs',
      },
      {
        type: 'add',
        path: 'source/.gitignore',
        templateFile: 'templates/gitignore.hbs',
      },
      {
        type: 'add',
        path: 'source/package.json',
        templateFile: 'templates/package.hbs',
      },
      {
        type: 'add',
        path: 'source/webpack.config.js',
        templateFile: 'templates/webpack.config.hbs',
      },
      {
        type: 'add',
        path: 'source/.tatareactrc',
        templateFile: 'templates/tatareactrc.hbs',
      },
      {
        type: 'addMany',
        destination: path.join(process.cwd(), '{{name}}'),
        base: 'source',
        globOptions: {
          dot: true,
        },
        templateFiles: 'source/**',
      },
    ],
  });
};
