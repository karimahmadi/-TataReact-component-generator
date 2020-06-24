const path = require('path');
module.exports = function (plop) {
    plop.setGenerator('CreateComponent', {
        description: 'this is a skeleton plopfile',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Please enter a name for your component:'
        }],
        actions: [

        {
            type: 'add',
            path: path.join(process.cwd(),'{{name}}','/src/{{name}}.js'),
            templateFile: 'templates/component.hbs'
        },
        {
            type: 'add',
            path: path.join(process.cwd(),'{{name}}','/src/index.js'),
            templateFile: 'templates/index.hbs'
        },
        {
            type: 'add',
            path: path.join(process.cwd(),'{{name}}','/src/stories.js'),
            templateFile: 'templates/stories.hbs'
        },
        {
            type: 'add',
            path: 'source/.npmignore',
            templateFile: 'templates/npmignore.hbs'
        },
        {
            type: 'add',
            path: 'source/.gitignore',
            templateFile: 'templates/gitignore.hbs'
        },
        {
            type: 'add',
            path: 'source/package.json',
            templateFile: 'templates/package.hbs'
        },
        {
            type: 'add',
            path: 'source/webpack.config.js',
            templateFile: 'templates/webpack.config.hbs'
        },
        {
            type: 'addMany',
            destination: path.join(process.cwd(), '{{name}}'),
            base:'source',
            globOptions:{
                dot:true
            },
            templateFiles: 'source/**'
        }
        ]
    });
};
