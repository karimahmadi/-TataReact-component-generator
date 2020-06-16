const path = require('path');
module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('CreateComponent', {
        description: 'this is a skeleton plopfile',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        //1. create folder by component name
        //2. cd to folder
        actions: [{
            type: 'add',
            path: path.join(process.cwd(),'src/{{name}}.js'),
            templateFile: 'templates/component.hbs'
        },
        {
            type: 'add',
            path: path.join(process.cwd(),'src/index.js'),
            templateFile: 'templates/index.hbs'
        },
        {
            type: 'add',
            path: path.join(process.cwd(),'src/stories.js'),
            templateFile: 'templates/stories.hbs'
        },
        {
            type: 'add',
            path: 'source/.npmignore',
            templateFile: 'templates/npmignore.hbs'
        },
        {
            type: 'add',
            path: 'source/package.json',
            templateFile: 'templates/package.hbs'
        },
        {
            type: 'addMany',
            destination: process.cwd(),
            base:'source',
            globOptions:{
                dot:true
            },
            templateFiles: 'source/**/*'
        }]


        //3. yarn/npm/pnpm install

        //4.
    });
};
